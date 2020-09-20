import * as FakeTimers from '@sinonjs/fake-timers'
import { render } from '@testing-library/react'
import { Reaction } from 'mobx'
import React, { ReactNode } from 'react'

import MachineStore, { MachineStoreProvider } from './BiscuitMachine/MachineStore'

export * from '@testing-library/react'

export async function withStore(fn: (store: MachineStore) => Promise<void> | void) {
	const store = new MachineStore()
	await fn(store)
	store.destroy()
}

export async function withClock(fn: (clock: FakeTimers.InstalledClock) => Promise<void> | void) {
	const clock = FakeTimers.install({ now: 1_000_000_000 })
	await fn(clock)
	clock.uninstall()
}

export function observable<T>(callback: () => T): T {
	let data: T
	const reaction = new Reaction('willDispose', () => {})
	reaction.track(() => {
		data = callback()
	})
	reaction.dispose()
	return data!
}

export function renderWithStore(node: React.ReactElement, options?: Parameters<typeof render>[1]) {
	const store = new MachineStore()

	function WithStoreWrapper({ children }: { children: ReactNode }) {
		return <MachineStoreProvider value={store}>{children}</MachineStoreProvider>
	}

	return { ...render(node, { ...options, wrapper: WithStoreWrapper as React.ComponentType }), store }
}
