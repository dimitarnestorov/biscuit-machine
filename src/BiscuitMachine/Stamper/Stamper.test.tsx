import { fireEvent } from '@testing-library/react'
import { runInAction } from 'mobx'
import React from 'react'
import { renderWithStore, withClock, act } from '../../testUtils'
import Stamper from './Stamper'

test('should add stamper-stamp class when stamping', () =>
	withClock((clock) => {
		const { store, container } = renderWithStore(<Stamper />)

		expect(container.firstChild).not.toHaveClass('stamper-stamp')

		runInAction(() => (store.isStamperStamping = true))

		clock.tick(16) // requestAnimationFrame
		expect(container.firstChild).toHaveClass('stamper-stamp')

		store.destroy()
	}))

test('should remove stamper-stamp class when done with transition', () =>
	withClock((clock) => {
		const { store, container } = renderWithStore(<Stamper />)

		expect(container.firstChild).not.toHaveClass('stamper-stamp')

		runInAction(() => (store.isStamperStamping = true))
		clock.tick(16) // requestAnimationFrame

		expect(container.firstChild).toHaveClass('stamper-stamp')

		fireEvent.transitionEnd(container.firstElementChild!)
		clock.tick(16) // requestAnimationFrame

		expect(container.firstChild).not.toHaveClass('stamper-stamp')

		store.destroy()
	}))

test('should not throw when unmounted while about to add transition class', () =>
	withClock((clock) => {
		const { store, unmount } = renderWithStore(<Stamper />)

		act(() => void runInAction(() => (store.isStamperStamping = true)))

		unmount()

		expect(() => clock.tick(16 * 100)).not.toThrow()

		store.destroy()
	}))
