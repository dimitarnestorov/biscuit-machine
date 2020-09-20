import { useObserver } from 'mobx-react-lite'
import React, { useEffect, useRef } from 'react'

import { useMachineStore } from '../MachineStore'

import './Stamper.scss'

export default function Stamper() {
	const ref = useRef<SVGSVGElement>(null)
	const store = useMachineStore()
	const isStamperStamping = useObserver(() => store.isStamperStamping)

	useEffect(() => {
		if (!isStamperStamping) return

		const id = requestAnimationFrame(() => {
			ref.current!.classList.add('stamper-stamp')
		})

		return () => cancelAnimationFrame(id)
	}, [isStamperStamping])

	return (
		<svg
			viewBox="0 0 161 217"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			stroke="#979797"
			fill="#D8D8D8"
			className="stamper"
			onTransitionEnd={() => requestAnimationFrame(() => ref.current!.classList.remove('stamper-stamp'))}
			ref={ref}
		>
			<g className="stamper-arm">
				<path strokeWidth="4" d="M76 126h10v85H76z" />
				<path strokeWidth="4" d="M54 205h54v10H54z" />
			</g>
			<path strokeWidth="5" d="M102.95 116.5l-10.03 20H69.08l-10.03-20h43.9z" />
			<path strokeWidth="6" d="M156.866 3l-36.86 113H40.994L4.135 3h152.73z" />
		</svg>
	)
}
