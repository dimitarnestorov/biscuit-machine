import Color from 'color'
import { useObserver } from 'mobx-react-lite'
import React, { useState, useMemo } from 'react'

import { useMachineStore } from '../MachineStore'

import './Oven.scss'

export default function Oven() {
	const store = useMachineStore()

	const { temperature, heatingElementState } = useObserver(() => ({
		temperature: store.ovenTemperature,
		heatingElementState: store.isHeatingElementOn ? 'on' : 'off',
	}))
	const [isXRayOn, setIsXRayOn] = useState(true)

	const heaterFill = useMemo(
		() =>
			Color('#910000')
				.darken(1 - temperature / 240)
				.hex(),
		[temperature],
	)

	return (
		<div className="oven">
			<svg
				viewBox="0 0 349 375"
				xmlns="http://www.w3.org/2000/svg"
				fontFamily="monospace"
				fontSize="20"
				fontWeight="normal"
				letterSpacing=".188"
			>
				<path stroke="#979797" strokeWidth="4" fill="none" d="M2 2h345v371H2z" />
				<rect fill={heaterFill} x="19" y="88" width="310" height="31" rx="8" />
				<path
					stroke="#979797"
					strokeWidth="4"
					fill="#D8D8D8"
					opacity={isXRayOn ? 0.6 : 1}
					d="M2 2h345v371H2z"
				/>
				<path stroke="#979797" fill="#979797" d="M.5.5h348v74H.5z" />
				<text fill="#000" x="174.5" y="25">
					<tspan dominantBaseline="middle" textAnchor="middle">
						Heating element: {heatingElementState}
					</tspan>
				</text>
				<text fill="#000" x="174.5" y="55">
					<tspan dominantBaseline="middle" textAnchor="middle">
						Current temperature: {temperature.toFixed(0)}°C
					</tspan>
				</text>
			</svg>

			<label>
				<input type="checkbox" onChange={() => setIsXRayOn(!isXRayOn)} checked={isXRayOn} />
				X-ray
			</label>
		</div>
	)
}
