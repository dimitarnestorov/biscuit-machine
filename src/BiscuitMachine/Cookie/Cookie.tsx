import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { CSSTransition } from 'react-transition-group'

import Location from '../Location'

import config from '../config.module.scss'

import './Cookie.scss'

const cookieTransformTransitionDuration = Number(config.cookieTransformTransitionDuration)

const output = [
	'm 305.26371,113.80958 c 0.38403,-2.34869 0.67803,-4.72546 0.88202,-7.13032 0.21314,-2.53258 2.03793,-5.09292 2.03989,-7.68102 0.0185,-51.050675 -43.69263,-92.4450081 -95.50115,-92.4450081 -51.80853,0 -93.23004,40.2495071 -93.21151,91.3001821 0,2.375096 -0.48162,5.872696 -0.30003,8.203166 0.20223,2.61609 0.51301,5.20042 0.93235,7.753 z',
	'm 305.26371,113.80958 c 18.31106,-0.1074 43.5971,-0.53988 64.52546,-0.36563 22.34474,-0.57631 51.2027,4.4202 50.74169,-12.46629 0.0202,-20.994599 -92.26315,-14.98101 -207.25545,-14.98101 -114.992291,0 -209.0834923,-4.80881 -208.5979772,13.160987 0,17.496923 51.8022192,14.002373 77.7997292,14.960893 3.70639,0.14531 34.539638,-0.44669 37.628118,-0.30895 z',
]

export default function Cookie({ isStamped, location }: { isStamped: boolean; location: Location }) {
	const svgRef = useRef<SVGSVGElement>(null)

	const spring = useSpring({ config: { duration: 800 }, x: isStamped ? 1 : 0 })

	const [isMounted, setIsMounted] = useState(false)
	useEffect(() => {
		setIsMounted(true)
	}, [])

	return (
		<CSSTransition
			in={isMounted}
			timeout={cookieTransformTransitionDuration}
			classNames="cookie"
			nodeRef={(svgRef as unknown) as React.RefObject<HTMLElement>}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				viewBox="0 0 425.24487 118.77472"
				fill="#faa21b"
				stroke="#979797"
				strokeWidth="10"
				data-location={location}
				className="cookie"
				ref={svgRef}
			>
				<animated.path d={spring.x.to({ range: [0, 1], output })} />
			</svg>
		</CSSTransition>
	)
}
