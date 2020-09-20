import React from 'react'
import { render } from '../../testUtils'
import Cookie from './Cookie'
import Location from '../Location'

test('should change data-location attribute when changing location prop', () => {
	const commonProps = { isStamped: false }
	const { container, rerender } = render(<Cookie {...commonProps} location={Location.UnderExtruder} />)

	expect(container.children.length).toBe(1)
	const child = container.firstElementChild!
	expect(child.getAttribute('data-location')).toBe(Location.UnderExtruder.toString())

	rerender(<Cookie {...commonProps} location={Location.UnderStamper} />)

	expect(child.getAttribute('data-location')).toBe(Location.UnderStamper.toString())
})

test('should change path d attribute when stamped', () => {
	const commonProps = { location: Location.UnderExtruder }
	const { container, rerender } = render(<Cookie {...commonProps} isStamped={false} />)

	const [path, ...otherPaths] = Array.from(container.getElementsByTagName('path'))
	expect(otherPaths.length).toBe(0)
	const pathBefore = path.getAttribute('d')

	rerender(<Cookie {...commonProps} isStamped={true} />)
	mockRaf.step()

	const pathAfter = path.getAttribute('d')

	expect(pathAfter).not.toBe(pathBefore)
})
