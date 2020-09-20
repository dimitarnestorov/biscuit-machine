import { observable, withClock, withStore } from '../testUtils'
import MachineState from './MachineState'
import MachineStore, { useMachineStore, MachineStoreProvider } from './MachineStore'
import config from './config.module.scss'
import { renderHook } from '@testing-library/react-hooks'
import React, { ReactNode } from 'react'
import Location from './Location'
import { runInAction } from 'mobx'

// const tickMilliseconds = Number(config.tickMilliseconds)
const movingMilliseconds = Number(config.movingMilliseconds)
const pausedMilliseconds = Number(config.pausedMilliseconds)

test('changeState should set state', async () => {
	await withStore((store) => {
		store.changeState(MachineState.On)
		expect(observable(() => store.state)).toBe(MachineState.On)
	})

	await withStore((store) => {
		store.changeState(MachineState.Paused)
		expect(observable(() => store.state)).toBe(MachineState.Paused)
	})

	await withStore((store) => {
		store.changeState(MachineState.On)
		store.changeState(MachineState.Off)
		expect(observable(() => store.state)).toBe(MachineState.Off)
	})
})

test('isMotorMoving should be true after pausedMilliseconds when machine is on', () =>
	withStore((store) =>
		withClock((clock) => {
			store.changeState(MachineState.On)

			clock!.tick(pausedMilliseconds)

			expect(observable(() => store.isMotorMoving)).toBe(true)
		}),
	))

test('isMotorMoving should be false after pausedMilliseconds + movingMilliseconds when machine is on', () =>
	withStore((store) =>
		withClock((clock) => {
			store.changeState(MachineState.On)

			clock!.tick(pausedMilliseconds + movingMilliseconds)

			expect(observable(() => store.isMotorMoving)).toBe(false)
		}),
	))

test('isMotorMoving should be false after pausedMilliseconds when machine is paused', () =>
	withStore((store) =>
		withClock((clock) => {
			store.changeState(MachineState.Paused)

			clock!.tick(pausedMilliseconds)

			expect(observable(() => store.isMotorMoving)).toBe(false)
		}),
	))

test('reset should be called after pulse (pausedMilliseconds + movingMilliseconds) and state is off', () =>
	withStore((store) =>
		withClock((clock) => {
			const spy = jest.spyOn((MachineStore.prototype as unknown) as { reset(): void }, 'reset')

			expect(clock!.countTimers()).toBe(0)

			store.changeState(MachineState.On)

			clock!.tick(pausedMilliseconds / 2)

			store.changeState(MachineState.Off)

			expect(clock!.countTimers()).toBe(1)

			clock!.tick(
				pausedMilliseconds / 2 +
					movingMilliseconds +
					(pausedMilliseconds + movingMilliseconds) * (Object.values(Location).length / 2),
			) // We need to wait for cookie to get off of conveyor

			expect(clock!.countTimers()).toBe(0)

			expect(spy).toBeCalledTimes(1)

			spy.mockRestore()
		}),
	))

test('cookie location should change', () =>
	withStore((store) =>
		withClock((clock) => {
			runInAction(() => store.changeState(MachineState.On))

			clock.tick(pausedMilliseconds)

			expect(observable(() => store.cookies[0].location)).not.toBe(Location.UnderExtruder)
		}),
	))

test('should not create cookies if there is not enough dough', () =>
	withStore((store) =>
		withClock((clock) => {
			runInAction(() => {
				store.dough = 0
				store.changeState(MachineState.On)
			})

			clock.tick((pausedMilliseconds + movingMilliseconds) * 20)

			expect(observable(() => store.cookies.length)).toBe(0)
		}),
	))

test('should not create cookies if there is one under extruder already', () =>
	withStore((store) =>
		withClock((clock) => {
			runInAction(() => {
				store.changeState(MachineState.On)
				store.changeState(MachineState.Paused)
			})

			clock.tick(pausedMilliseconds)
			runInAction(() => store.changeState(MachineState.On))

			clock.tick(movingMilliseconds)

			expect(observable(() => store.cookies.length)).toBe(1)
		}),
	))

test('useMachineStore should throw when no store is provided', () => {
	const { result } = renderHook(useMachineStore)
	expect(result.error).toBeInstanceOf(Error)
})

test('useMachineStore should not throw when a store is provided', () => {
	const store = new MachineStore()
	function Wrapper({ children }: { children: ReactNode }) {
		return <MachineStoreProvider value={store}>{children}</MachineStoreProvider>
	}
	const { result } = renderHook(useMachineStore, { wrapper: Wrapper })
	expect(result.current).toBe(store)
})
