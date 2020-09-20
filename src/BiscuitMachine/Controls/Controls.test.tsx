import React from 'react'
import { renderWithStore } from '../../testUtils'
import Controls from './Controls'
import user from '@testing-library/user-event'
import { runInAction } from 'mobx'

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

test('should update good cookies label', () => {
	const { container, store } = renderWithStore(<Controls />)

	const li = Array.from(container.querySelectorAll('li')).find((li) => li.textContent?.match(/^good cookies/i))!

	const newValue = 18
	runInAction(() => (store.goodCookies = newValue))

	expect(Number(li.textContent!.match(/\d+$/))).toBe(newValue)

	store.destroy()
})

test('should update bad cookies label', () => {
	const { container, store } = renderWithStore(<Controls />)

	const li = Array.from(container.querySelectorAll('li')).find((li) => li.textContent?.match(/^bad cookies/i))!

	const newValue = 16
	runInAction(() => (store.badCookies = newValue))

	expect(Number(li.textContent!.match(/\d+$/))).toBe(newValue)

	store.destroy()
})
