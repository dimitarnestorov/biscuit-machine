import React from 'react'
import { observable, renderWithStore, withClock, act, fireEvent } from '../../testUtils'
import Extruder from './Extruder'
import user from '@testing-library/user-event'
import { runInAction } from 'mobx'
import MachineState from '../MachineState'

const maxDough = Number(process.env.REACT_APP_MAX_DOUGH)

test('should make dough height smaller when a cookie is created', () => {
	const { store, container } = renderWithStore(<Extruder />)
	const mask = container.querySelector('#extruder-contents-mask')!
	const yBefore = Number(mask.getAttribute('y'))

	store.changeState(MachineState.On)
	mockRaf.step()

	const yAfter = Number(mask.getAttribute('y'))
	expect(yAfter).toBeGreaterThan(yBefore)

	store.destroy()
})

test('should refill extruder when refill button is clicked', () => {
	const { getByLabelText, store } = renderWithStore(<Extruder />)
	runInAction(() => --store.dough)

	const refillButton = getByLabelText(/refill/i)
	expect(refillButton.getAttribute('role')).toBe('button')
	user.click(refillButton)

	expect(observable(() => store.dough)).toBe(maxDough)

	store.destroy()
})

test('should show refill button when dough is below maxDough', () => {
	const { getByLabelText, store } = renderWithStore(<Extruder />)
	const refillButton = getByLabelText(/refill/i)

	expect(refillButton).toHaveClass('extruder-refill-hide')

	runInAction(() => (store.dough = maxDough / 2))

	expect(refillButton).not.toHaveClass('extruder-refill-hide')

	store.destroy()
})

test('should not show refill button when dough is maxDough', () => {
	const { getByLabelText, store } = renderWithStore(<Extruder />)
	const refillButton = getByLabelText(/refill/i)

	expect(refillButton).toHaveClass('extruder-refill-hide')

	runInAction(() => (store.dough = maxDough / 2))

	expect(refillButton).not.toHaveClass('extruder-refill-hide')

	user.click(refillButton)

	expect(refillButton).toHaveClass('extruder-refill-hide')

	store.destroy()
})

test('should add extruder-extruding class when dough decreases', () =>
	withClock(async (clock) => {
		const { container, store } = renderWithStore(<Extruder />)

		expect(container.children.length).toBe(1)

		const child = container.firstChild!
		expect(child).not.toHaveClass('extruder-extruding')

		act(() => void runInAction(() => (store.dough = 50)))

		clock.tick(20) // requestAnimationFrame

		expect(child).toHaveClass('extruder-extruding')

		store.destroy()
	}))

test('should remove extruder-extruding class when dough decreases', () =>
	withClock((clock) => {
		const { container, store } = renderWithStore(<Extruder />)

		expect(container.children.length).toBe(1)

		const eventHandler = jest.fn()
		const child = container.firstChild!
		const dough = container.querySelector('.extruder-dough')!
		dough.addEventListener('animationend', eventHandler)
		expect(child).not.toHaveClass('extruder-extruding')

		act(() => void runInAction(() => (store.dough = 50)))
		clock.tick(16) // requestAnimationFrame
		expect(child).toHaveClass('extruder-extruding')

		fireEvent.animationEnd(dough)
		clock.tick(16) // requestAnimationFrame

		expect(child).not.toHaveClass('extruder-extruding')
		expect(eventHandler).toBeCalledTimes(1)

		store.destroy()
	}))
