import React from 'react'
import { render } from '../../testUtils'
import Cookie from './Cookie'
import Location from '../Location'
import Color from 'color'

test('should change data-location attribute when changing location prop', () => {
	const commonProps = { isStamped: false, baked: 0 }
	const { container, rerender } = render(<Cookie {...commonProps} location={Location.UnderExtruder} />)

	expect(container.children.length).toBe(1)
	const child = container.firstElementChild!
	expect(child.getAttribute('data-location')).toBe(Location.UnderExtruder.toString())

	rerender(<Cookie {...commonProps} location={Location.UnderStamper} />)

	expect(child.getAttribute('data-location')).toBe(Location.UnderStamper.toString())
})

test('should change path d attribute when stamped', () => {
	const commonProps = { location: Location.UnderExtruder, baked: 0 }
	const { container, rerender } = render(<Cookie {...commonProps} isStamped={false} />)

	const [path, ...otherPaths] = Array.from(container.getElementsByTagName('path'))
	expect(otherPaths.length).toBe(0)
	const pathBefore = path.getAttribute('d')

	rerender(<Cookie {...commonProps} isStamped={true} />)
	mockRaf.step()

	const pathAfter = path.getAttribute('d')

	expect(pathAfter).not.toBe(pathBefore)
})

test('should darken fill color when changing baked prop', () => {
	const commonProps = { location: 0, isStamped: false }
	const { container, rerender } = render(<Cookie {...commonProps} baked={0} />)

	expect(container.getElementsByTagName('svg').length).toBe(1)
	const fillBefore = container.getElementsByTagName('svg')[0].getAttribute('fill')
	expect(fillBefore).not.toBe(null)
	const hslBefore = Color(fillBefore!).hsl().object()
	expect(typeof hslBefore.l).toBe('number')

	rerender(<Cookie {...commonProps} baked={50} />)

	expect(container.getElementsByTagName('svg').length).toBe(1)
	const fillAfter = container.getElementsByTagName('svg')[0].getAttribute('fill')
	expect(fillAfter).not.toBe(null)
	const hslAfter = Color(fillAfter!).hsl().object()
	expect(typeof hslAfter.l).toBe('number')

	expect(hslBefore.l).toBeGreaterThan(hslAfter.l)
})
