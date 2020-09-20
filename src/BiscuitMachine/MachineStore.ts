import { action, observable, runInAction } from 'mobx'
import { createContext, useContext } from 'react'
import { v4 as uuid } from 'uuid'

import Location from './Location'
import MachineState from './MachineState'

import config from './config.module.scss'

const tickMilliseconds = Number(config.tickMilliseconds)
const movingMilliseconds = Number(config.movingMilliseconds)
const pausedMilliseconds = Number(config.pausedMilliseconds)
const maxDough = Number(process.env.REACT_APP_MAX_DOUGH)
const initialDough = Number(process.env.REACT_APP_INITIAL_DOUGH)
const cookieCost = Number(process.env.REACT_APP_COOKIE_COST)

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
	if (initialDough > maxDough) throw new Error('`initialDough` must not be bigger than `maxDough`')
}

class Cookie {
	id = uuid()
	location = Location.UnderExtruder
	isStamped = false

	stamp() {
		this.isStamped = true
	}

	move() {
		/* istanbul ignore next */
		if (process.env.NODE_ENV && this.location >= Location.Slide) {
			throw new Error('`move` called after `location` is already set to maximum')
		}

		this.location++
	}
}

function isCookieUnderExtruder(cookie: Cookie) {
	return cookie.location === Location.UnderExtruder
}

export default class MachineStore {
	@observable state: MachineState = MachineState.Off
	@observable dough = initialDough
	@observable cookies: Cookie[] = []

	// #region Properties with initial value set from reset method
	@observable private shouldMoveIfNotPaused!: boolean // Pulse state
	private intervalId!: ReturnType<typeof setTimeout> | 0
	private nextTickTimestamp!: number
	private nextMotorStateChangeTimestamp!: number

	@observable isStamperStamping!: boolean
	@observable isMotorMoving!: boolean
	// #endregion

	constructor() {
		runInAction(() => {
			this.reset()
		})
	}

	private reset() {
		clearInterval(this.intervalId as Parameters<typeof clearInterval>[0])
		this.shouldMoveIfNotPaused = false
		this.intervalId = 0
		this.nextTickTimestamp = Infinity
		this.nextMotorStateChangeTimestamp = Infinity
		this.isStamperStamping = false
		this.isMotorMoving = false
	}

	private startInterval() {
		if (this.intervalId) return

		runInAction(() => {
			this.createCookie()
			const timestamp = Date.now()
			this.updateNextTickTimestamp(timestamp)
			this.updateNextMotorStateChangeTimestamp(timestamp)
		})

		this.intervalId = setInterval(this.handleTick, tickMilliseconds)
	}

	@action.bound private handleTick() {
		const timestamp = Date.now()
		while (this.nextTickTimestamp <= timestamp) {
			if (!this.shouldMoveIfNotPaused && !this.shouldMove && this.state === 'off') {
				this.reset()
				continue
			}

			if (this.nextMotorStateChangeTimestamp <= this.nextTickTimestamp) {
				this.shouldMoveIfNotPaused = !this.shouldMoveIfNotPaused

				if (this.shouldMoveIfNotPaused) {
					this.isStamperStamping = false
					this.moveConveyor()
				} else {
					this.createCookie()
					this.stampCookie()
					this.isMotorMoving = false
				}

				this.updateNextMotorStateChangeTimestamp(this.nextMotorStateChangeTimestamp)
			}

			this.updateNextTickTimestamp(this.nextTickTimestamp)
		}
	}

	private updateNextMotorStateChangeTimestamp(timestamp: number) {
		this.nextMotorStateChangeTimestamp =
			timestamp + (this.shouldMoveIfNotPaused ? movingMilliseconds : pausedMilliseconds)
	}

	private updateNextTickTimestamp(timestamp: number) {
		this.nextTickTimestamp = timestamp + tickMilliseconds
	}

	private createCookie() {
		if (this.state !== 'on') return // Should not create more cookies
		if (this.dough < cookieCost) return // Not enough dough to create cookie
		if (this.cookies.find(isCookieUnderExtruder)) return // There is already a cookie under extruder
		this.dough = Math.max(this.dough - cookieCost, 0)
		this.cookies.push(new Cookie())
	}

	private get shouldMove() {
		return Boolean(this.cookies.find((cookie) => cookie.location <= Location.Slide))
	}

	private moveConveyor() {
		if (this.state === 'paused' || !this.shouldMove) return

		let movingCookies = 0
		for (let i = this.cookies.length - 1; i >= 0; i--) {
			const cookie = this.cookies[i]
			const location = cookie.location
			if (location >= Location.Slide) {
				this.cookies.splice(i, 1)
				continue
			}
			cookie.move()
			movingCookies++
		}
		this.isMotorMoving = Boolean(movingCookies)
	}

	private stampCookie() {
		const cookie = this.cookies.find((cookie) => cookie.location === 1)
		if (!cookie || cookie.isStamped) return
		cookie.stamp()
		this.isStamperStamping = true
	}

	@action changeState(newState: MachineState) {
		this.state = newState
		this.startInterval()
	}

	@action refillExtruder() {
		this.dough = maxDough
	}

	destroy() {
		clearInterval(this.intervalId as Parameters<typeof clearInterval>[0])
	}
}

const context = createContext<MachineStore | null>(null)

export function useMachineStore() {
	const store = useContext(context)
	if (!store) throw new Error('Machine store not provided')
	return store
}

export const MachineStoreProvider = context.Provider
