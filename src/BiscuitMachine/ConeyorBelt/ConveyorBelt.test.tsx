import React from 'react'
import { render } from '../../testUtils'
import ConveyorBelt from './ConveyorBelt'

test('should render a SVG', () => {
	const { container } = render(<ConveyorBelt />)
	expect(container.children.length).toBe(1)
	expect(container.children[0].tagName).toBe('svg')
})
