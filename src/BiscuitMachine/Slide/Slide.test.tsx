import React from 'react'
import { render } from '../../testUtils'
import ConveyorBelt from './Slide'

test('should render successfully', () => {
	const { container } = render(<ConveyorBelt />)
	expect(container.children.length).toBeGreaterThan(0)
})
