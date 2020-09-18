import React, { createContext, ReactNode, useContext, useEffect } from 'react'
import { render } from '../testUtils'
import BiscuitMachine from './BiscuitMachine'
import MachineStore, { useMachineStore } from './MachineStore'
import EventEmitter from 'events'
import { action } from 'mobx'

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
		return () => emitter.off('change', handleEvent)
	})
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

	const { container } = render(<BiscuitMachineModifier />, { wrapper: Wrapper })

	expect(container.children[0].classList.contains('motor-on')).toBe(false)
	emitter.emit('change', true)
	expect(container.children[0].classList.contains('motor-on')).toBe(true)
})

test('should call store.destroy on unmount', () => {
	const spy = jest.spyOn(MachineStore.prototype, 'destroy')

	const { unmount } = render(<BiscuitMachine />)

	expect(spy).toBeCalledTimes(0)

	unmount()

	expect(spy).toBeCalledTimes(1)

	spy.mockRestore()
})
