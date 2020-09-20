// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import './mobxConfiguration'

import createMockRaf from '@react-spring/mock-raf'
import { Globals, FrameLoop } from 'react-spring'

declare global {
	type MockRaf = ReturnType<typeof createMockRaf>
	const mockRaf: MockRaf

	namespace NodeJS {
		interface Global {
			mockRaf: MockRaf
		}
	}
}

global.mockRaf = createMockRaf()
Globals.assign({
	now: mockRaf.now,
	requestAnimationFrame: mockRaf.raf,
	frameLoop: new FrameLoop(),
})
