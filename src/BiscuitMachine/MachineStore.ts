import { action, observable, runInAction } from 'mobx'
import { createContext, useContext } from 'react'

import MachineState from './MachineState'

import config from './config.module.scss'

const tickMilliseconds = Number(config.tickMilliseconds)
const movingMilliseconds = Number(config.movingMilliseconds)
const pausedMilliseconds = Number(config.pausedMilliseconds)

export default class MachineStore {
	@observable state: MachineState = MachineState.Off

	// #region Properties with initial value set from reset method
	@observable private shouldMoveIfNotPaused!: boolean // Pulse state
	private intervalId!: ReturnType<typeof setTimeout> | 0
	private nextTickTimestamp!: number
	private nextMotorStateChangeTimestamp!: number

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
		this.isMotorMoving = false
	}

	private startInterval() {
		if (this.intervalId) return

		runInAction(() => {
			const timestamp = Date.now()
			this.updateNextTickTimestamp(timestamp)
			this.updateNextMotorStateChangeTimestamp(timestamp)
		})

		this.intervalId = setInterval(this.handleTick, tickMilliseconds)
	}

	@action.bound private handleTick() {
		const timestamp = Date.now()
		while (this.nextTickTimestamp <= timestamp) {
			if (!this.shouldMoveIfNotPaused && this.state === 'off') {
				this.reset()
				continue
			}

			if (this.nextMotorStateChangeTimestamp <= this.nextTickTimestamp) {
				this.shouldMoveIfNotPaused = !this.shouldMoveIfNotPaused

				if (this.shouldMoveIfNotPaused) {
					this.moveConveyor()
				} else {
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

	private moveConveyor() {
		if (this.state === 'paused') return

		this.isMotorMoving = true
	}

	@action changeState(newState: MachineState) {
		this.state = newState
		this.startInterval()
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
