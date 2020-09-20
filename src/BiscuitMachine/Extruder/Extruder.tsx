import { easeSinIn } from 'd3-ease'
import { useObserver } from 'mobx-react-lite'
import React, { useRef, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

import { useMachineStore } from '../MachineStore'

import './Extruder.scss'

const doughY = 12
const doughHeight = 95

export default function Extruder() {
	const store = useMachineStore()
	const state = useObserver(() => 1 - store.dough / 100)
	const { y } = useSpring({
		y: doughY + doughHeight * easeSinIn(state), // ease-in because extruder is cone shaped and there is more dough on the top vs the bottom
	})

	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (state <= 0) return
		requestAnimationFrame(() => {
			containerRef.current!.classList.add('extruder-extruding')
		})
	}, [state])

	return (
		<div className="extruder" ref={containerRef}>
			<svg
				viewBox="0 0 161 139"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				fill="none"
				className="extruder-svg"
			>
				<animated.mask id="extruder-contents-mask" y={y} maskUnits="userSpaceOnUse">
					<rect width="129" x="16" y="12" height={doughHeight} fill="#FFFFFF" />
				</animated.mask>
				<path stroke="#979797" strokeWidth="5" d="M102.95 116.5l-10.03 20H69.08l-10.03-20h43.9z" />
				<path stroke="#979797" strokeWidth="6" d="M156.866 3l-36.86 113H40.994L4.135 3h152.73z" />
				<path fill="#FFA300" d="M16 12h129l-31.103 95H47.103z" mask="url(#extruder-contents-mask)" />
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 50 50"
				className={state === 0 ? 'extruder-refill extruder-refill-hide' : 'extruder-refill'}
				onClick={() => store.refillExtruder()}
				role="button"
				aria-label="Refill Extruder"
			>
				<path d="M50 25c0 4.533-1.117 8.717-3.35 12.55s-5.267 6.867-9.1 9.1C33.717 48.883 29.533 50 25 50c-4.533 0-8.717-1.117-12.55-3.35s-6.867-5.267-9.1-9.1C1.117 33.717 0 29.533 0 25c0-4.533 1.117-8.717 3.35-12.55s5.267-6.867 9.1-9.1C16.283 1.117 20.467 0 25 0c4.533 0 8.717 1.117 12.55 3.35s6.867 5.267 9.1 9.1C48.883 16.283 50 20.467 50 25zm-13 4l9-9h-6c-1-3.067-2.967-5.617-5.9-7.65-2.933-2.033-6.05-3.033-9.35-3-4.367 0-8.1 1.533-11.2 4.6-3.1 3.067-4.65 6.8-4.65 11.2 0 4.4 1.55 8.117 4.65 11.15 3.1 3.033 6.833 4.583 11.2 4.65 4.367.067 8.083-1.467 11.15-4.6l-3.1-3.55C30.6 34.933 28 36 25 36c-3.033 0-5.617-1.083-7.75-3.25S14.033 28 14 25c-.033-3 1.05-5.6 3.25-7.8S22.033 13.933 25 14c3.167 0 5.767 1.067 7.8 3.2.267.267.467.533.6.8.133.267.233.617.3 1.05.067.433.167.75.3.95h-6l9 9z" />
			</svg>
			<div
				className="extruder-dough"
				onAnimationEnd={() =>
					requestAnimationFrame(() => containerRef.current!.classList.remove('extruder-extruding'))
				}
			/>
		</div>
	)
}
