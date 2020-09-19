import * as FakeTimers from '@sinonjs/fake-timers'
import { observable } from '../testUtils'
import MachineState from './MachineState'
import MachineStore, { useMachineStore, MachineStoreProvider } from './MachineStore'
import config from './config.module.scss'
import { renderHook } from '@testing-library/react-hooks'
import React, { ReactNode } from 'react'

// const tickMilliseconds = Number(config.tickMilliseconds)
const movingMilliseconds = Number(config.movingMilliseconds)
const pausedMilliseconds = Number(config.pausedMilliseconds)

async function withStore(fn: (store: MachineStore) => Promise<void> | void) {
	const store = new MachineStore()
	await fn(store)
	store.destroy()
}

async function withClock(fn: (clock: FakeTimers.InstalledClock) => Promise<void> | void) {
	const clock = FakeTimers.install({ now: 1_000_000_000 })
	await fn(clock)
	clock.uninstall()
}

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
			type T = { reset(): void }
			const spy = jest.spyOn<T, 'reset'>((MachineStore.prototype as unknown) as T, 'reset')

			expect(clock!.countTimers()).toBe(0)

			store.changeState(MachineState.On)

			clock!.tick(pausedMilliseconds / 2)

			store.changeState(MachineState.Off)

			expect(clock!.countTimers()).toBe(1)

			clock!.tick(pausedMilliseconds / 2 + movingMilliseconds)

			expect(clock!.countTimers()).toBe(0)

			expect(spy).toBeCalledTimes(1)

			spy.mockRestore()
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
