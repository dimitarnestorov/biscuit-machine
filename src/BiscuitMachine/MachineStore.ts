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
const minimumOvenTemperature = Number(process.env.REACT_APP_MINIMUM_OVEN_TEMPERATURE)
const goodBakeTemperature = Number(process.env.REACT_APP_GOOD_BAKE_TEMPERATURE)
const burningBakeTemperature = Number(process.env.REACT_APP_BURNING_BAKE_TEMPERATURE)
const bakeRate = Number(process.env.REACT_APP_BAKE_RATE)
const overbakeRate = Number(process.env.REACT_APP_OVERBAKE_RATE)
const ovenTemperatureChangeAfterTick = Number(process.env.REACT_APP_OVEN_TEMPERATURE_CHANGE_AFTER_TICK)
const minimumGoodBakedRate = Number(process.env.REACT_APP_MINIMUM_GOOD_BAKED_RATE)
const maximumGoodBakedRate = Number(process.env.REACT_APP_MAXIMUM_GOOD_BAKED_RATE)

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
	if (initialDough > maxDough) throw new Error('`initialDough` must not be bigger than `maxDough`')
}

class Cookie {
	id = uuid()
	@observable location = Location.UnderExtruder
	@observable isStamped = false
	@observable baked = 0

	stamp() {
		/* istanbul ignore next */
		if (process.env.NODE_ENV !== 'production') {
			if (this.baked) throw new Error('`stamp` called after `bake` was already called at least once')
			if (this.isStamped) throw new Error('`stamp` was already called')
		}

		this.isStamped = true
	}

	bake(temperature: number) {
		/* istanbul ignore next */
		if (process.env.NODE_ENV !== 'production') {
			if (!this.isStamped) throw new Error('`bake` called before calling `stamp`')
			if (temperature < goodBakeTemperature) throw new Error('Temperature too low')
		}

		this.baked += bakeRate * (1 + Math.max(temperature - burningBakeTemperature, 0) / overbakeRate)
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
	@observable state = MachineState.Off
	@observable dough = initialDough
	@observable.shallow cookies: Cookie[] = []
	@observable ovenTemperature = minimumOvenTemperature
	@observable badCookies = 0
	@observable goodCookies = 0

	// #region Properties with initial value set from reset method
	@observable private isTimeToMove!: boolean // Pulse state
	private intervalId!: ReturnType<typeof setTimeout> | 0
	private nextTickTimestamp!: number
	private nextMotorStateChangeTimestamp!: number

	@observable isStamperStamping!: boolean
	@observable isMotorMoving!: boolean
	@observable isHeatingElementOn!: boolean
	// #endregion

	constructor() {
		runInAction(() => {
			this.reset()
		})
	}

	private reset() {
		clearInterval(this.intervalId as Parameters<typeof clearInterval>[0])
		this.isTimeToMove = false
		this.intervalId = 0
		this.nextTickTimestamp = Infinity
		this.nextMotorStateChangeTimestamp = Infinity
		this.isStamperStamping = false
		this.isMotorMoving = false
		this.isHeatingElementOn = false
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
			if (
				!this.isTimeToMove &&
				!this.areThereUnprocessedCookies &&
				this.state === 'off' &&
				this.ovenTemperature <= minimumOvenTemperature
			) {
				this.reset()
				continue
			}

			if (!this.isTimeToMove) this.bakeCookies()

			this.updateOven()

			if (this.nextMotorStateChangeTimestamp <= this.nextTickTimestamp) {
				this.isTimeToMove = !this.isTimeToMove

				if (this.isTimeToMove) {
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
		this.nextMotorStateChangeTimestamp = timestamp + (this.isTimeToMove ? movingMilliseconds : pausedMilliseconds)
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

	private get areThereUnprocessedCookies() {
		return Boolean(this.cookies.find((cookie) => cookie.location <= Location.Slide))
	}

	// Checks if oven is ready when there is a cookie ready to cook
	private get shouldMoveIntoOven() {
		if (this.cookies.find((cookie) => cookie.location === Location.AfterStamper)) {
			return this.ovenTemperature >= goodBakeTemperature
		}

		return true // There are not any ready to bake cookies (conveyor should move)
	}

	private moveConveyor() {
		if (this.state === 'paused' || !this.areThereUnprocessedCookies || !this.shouldMoveIntoOven) return

		let movingCookies = 0
		for (let i = this.cookies.length - 1; i >= 0; i--) {
			const cookie = this.cookies[i]
			const location = cookie.location
			if (location >= Location.Slide) {
				this.cookies.splice(i, 1)
				continue
			}

			if (location === Location.AfterOven) {
				if (cookie.baked >= minimumGoodBakedRate && cookie.baked <= maximumGoodBakedRate) {
					this.goodCookies++
				} else {
					this.badCookies++
				}
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

	private updateOven() {
		this.ovenTemperature = Math.max(
			this.ovenTemperature + ovenTemperatureChangeAfterTick * (this.isHeatingElementOn ? 1 : -1),
			5,
		)
		if (
			this.isHeatingElementOn &&
			(this.ovenTemperature >= burningBakeTemperature ||
				(!this.areThereUnprocessedCookies && this.state === 'off'))
		) {
			this.isHeatingElementOn = false
		} else if (
			!this.isHeatingElementOn &&
			this.ovenTemperature <= goodBakeTemperature &&
			(this.areThereUnprocessedCookies || this.state !== 'off')
		) {
			this.isHeatingElementOn = true
		}
	}

	private bakeCookies() {
		for (const cookie of this.cookies) {
			const location = cookie.location
			if (location !== Location.InOven1 && location !== Location.InOven2) continue
			cookie.bake(this.ovenTemperature)
		}
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
