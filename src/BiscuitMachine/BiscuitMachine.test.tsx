import React, { createContext, ReactNode, useContext, useEffect } from 'react'
import { render, withClock } from '../testUtils'
import BiscuitMachine from './BiscuitMachine'
import MachineStore, { useMachineStore } from './MachineStore'
import EventEmitter from 'events'
import { action } from 'mobx'
import config from './config.module.scss'
import user from '@testing-library/user-event'

const movingMilliseconds = Number(config.movingMilliseconds)
const pausedMilliseconds = Number(config.pausedMilliseconds)

const emitterContext = createContext<EventEmitter | null>(null)

function useEmitter() {
	const emitter = useContext(emitterContext)
	if (!emitter) throw new Error('emitter not provided')
	return emitter
}

function Trigger() {
	const store = useMachineStore()
	const emitter = useEmitter()
	useEffect(() => {
		const handleEvent = action((value: boolean) => {
			store.isMotorMoving = value
		})

		emitter.on('change', handleEvent)
		return () => void emitter.off('change', handleEvent)
	}, [emitter, store])
	return null
}

function BiscuitMachineModifier() {
	const original = BiscuitMachine()

	const provider = React.Children.only(original)
	const providerChild: JSX.Element = provider.props.children

	return React.cloneElement(provider, provider.props, providerChild, <Trigger />)
}

test('should add a helper class when isMotorMoving is true', () => {
	const emitter = new EventEmitter()
	function Wrapper({ children }: { children: ReactNode }) {
		return <emitterContext.Provider value={emitter}>{children}</emitterContext.Provider>
	}

	const { container } = render(<BiscuitMachineModifier />, { wrapper: Wrapper as React.ComponentType })

	expect(container.firstChild).not.toHaveClass('motor-on')
	emitter.emit('change', true)
	expect(container.firstChild).toHaveClass('motor-on')
})

test('should call store.destroy on unmount', () => {
	const spy = jest.spyOn(MachineStore.prototype, 'destroy')

	const { unmount } = render(<BiscuitMachine />)

	expect(spy).toBeCalledTimes(0)

	unmount()

	expect(spy).toBeCalledTimes(1)

	spy.mockRestore()
})

test('should render just fine with a bunch of cookies', () =>
	withClock((clock) => {
		const { rerender, getByLabelText } = render(<BiscuitMachine />)

		user.click(getByLabelText(/on/i))

		expect(() => void clock.tick((pausedMilliseconds + movingMilliseconds) * 14)).not.toThrow()
		expect(() => void rerender(<BiscuitMachine />)).not.toThrow()
	}))
