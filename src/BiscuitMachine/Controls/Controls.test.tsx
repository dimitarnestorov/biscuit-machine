import React from 'react'
import { renderWithStore } from '../../testUtils'
import Controls from './Controls'
import user from '@testing-library/user-event'

test('should render with off state by default', () => {
	const { getByLabelText, store } = renderWithStore(<Controls />)

	expect((getByLabelText('Off') as HTMLInputElement).checked).toBe(true)

	store.destroy()
})

test('should change state to On', () => {
	const { getByLabelText, store } = renderWithStore(<Controls />)

	const input = getByLabelText('On') as HTMLInputElement
	user.click(input)

	expect(input.checked).toBe(true)

	store.destroy()
})

test('should change state to Paused', () => {
	const { getByLabelText, store } = renderWithStore(<Controls />)

	const input = getByLabelText('Paused') as HTMLInputElement
	user.click(input)

	expect(input.checked).toBe(true)

	store.destroy()
})

test('should change state to Off', () => {
	const { getByLabelText, store } = renderWithStore(<Controls />)

	const onInput = getByLabelText('On') as HTMLInputElement
	user.click(onInput)

	expect(onInput.checked).toBe(true)

	const offInput = getByLabelText('Off') as HTMLInputElement
	user.click(offInput)

	expect(offInput.checked).toBe(true)

	store.destroy()
})
