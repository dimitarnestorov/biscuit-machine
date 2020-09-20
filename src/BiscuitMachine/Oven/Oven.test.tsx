import { runInAction } from 'mobx'
import React from 'react'
import { observable, renderWithStore } from '../../testUtils'
import Oven from './Oven'
import Color from 'color'
import userEvent from '@testing-library/user-event'

const goodBakeTemperature = Number(process.env.REACT_APP_GOOD_BAKE_TEMPERATURE)

test('should update current temperature label when temperature changes', () => {
	const { store, container } = renderWithStore(<Oven />)

	const temperatureSpan = Array.from(container.querySelectorAll('tspan')).find((span) =>
		/^current temperature/i.test(span.textContent!),
	)!
	expect(Number(temperatureSpan.textContent!.match(/\d+/))).toBe(observable(() => store.ovenTemperature))

	runInAction(() => (store.ovenTemperature = goodBakeTemperature))

	expect(Number(temperatureSpan.textContent!.match(/\d+/))).toBe(goodBakeTemperature)

	store.destroy()
})

test('should update heating element label when state changes', () => {
	const { store, container } = renderWithStore(<Oven />)

	const temperatureSpan = Array.from(container.querySelectorAll('tspan')).find((span) =>
		/^heating element/i.test(span.textContent!),
	)!
	expect(/off$/.test(temperatureSpan.textContent!)).toBe(true)

	runInAction(() => (store.isHeatingElementOn = true))

	expect(/on$/.test(temperatureSpan.textContent!)).toBe(true)

	store.destroy()
})

test('should change heating element color when temperature changes', () => {
	const { store, container } = renderWithStore(<Oven />)

	const rects = container.querySelectorAll('rect')
	expect(rects.length).toBe(1)
	const rect = rects[0]
	const fillBefore = Color(rect.getAttribute('fill')!).hsl().object()

	runInAction(() => (store.ovenTemperature = goodBakeTemperature))

	const fillAfter = Color(rect.getAttribute('fill')!).hsl().object()
	expect(fillBefore.l).toBeLessThan(fillAfter.l)

	store.destroy()
})

test('x-ray checkbox should change opacity on change', () => {
	const { store, container, getByLabelText } = renderWithStore(<Oven />)

	const transparentPaths = container.querySelectorAll('path[opacity="0.6"]')
	expect(transparentPaths.length).toBe(1)
	const transparentPath = transparentPaths[0]

	userEvent.click(getByLabelText(/x-ray/i))

	expect(transparentPath.getAttribute('opacity')).toBe('1')

	store.destroy()
})
