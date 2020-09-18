import React from 'react'

import './ConveyorBelt.scss'

const strokeDasharray = [160, 6]
const strokeDasharrayString = [160, 6].join()
const pathLength = (strokeDasharray[0] + strokeDasharray[1]) * 16

export default function ConveyorBelt() {
	return (
		<svg
			className="conveyor-belt"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 1307 422"
			fill="none"
		>
			<defs>
				<circle id="tail-pulley-path" cx="1250" cy="125" r="39" />
				<circle id="secondary-pulley-path" cx="104.5" cy="125.5" r="84.5" />
				<circle id="primary-pulley-path" cx="292" cy="341" r="35" />
				<mask
					id="tail-pulley-mask"
					width="78"
					height="78"
					x="0"
					y="0"
					fill="#fff"
					maskContentUnits="userSpaceOnUse"
					maskUnits="objectBoundingBox"
				>
					<use xlinkHref="#tail-pulley-path" />
				</mask>
				<mask
					id="secondary-pulley-mask"
					width="169"
					height="169"
					x="0"
					y="0"
					fill="#fff"
					maskContentUnits="userSpaceOnUse"
					maskUnits="objectBoundingBox"
				>
					<use xlinkHref="#secondary-pulley-path" />
				</mask>
				<mask
					id="primary-pulley-mask"
					width="70"
					height="70"
					x="0"
					y="0"
					fill="#fff"
					maskContentUnits="userSpaceOnUse"
					maskUnits="objectBoundingBox"
				>
					<use xlinkHref="#primary-pulley-path" />
				</mask>
			</defs>
			<path
				className="conveyor-belt-path"
				stroke="#000"
				strokeDasharray={strokeDasharrayString}
				pathLength={pathLength}
				strokeDashoffset="-2"
				strokeWidth="4"
				d="M91 72h1161c29.271 0 53 23.729 53 53s-23.729 53-53 53H91c-29.271 0-53-23.729-53-53s23.729-53 53-53z"
			/>
			<use
				className="tail-pulley"
				fill="#D8D8D8"
				stroke="#979797"
				strokeDasharray="26,9"
				strokeWidth="14"
				mask="url(#tail-pulley-mask)"
				xlinkHref="#tail-pulley-path"
			/>
			<use
				className="secondary-pulley"
				fill="#D8D8D8"
				stroke="#979797"
				strokeDasharray="100,6"
				strokeWidth="26"
				mask="url(#secondary-pulley-mask)"
				xlinkHref="#secondary-pulley-path"
			/>
			<g className="motor" fill="#48AEDF" stroke="#335475">
				<circle cx="292" cy="341" r="77.5" strokeWidth="6" />
				<use
					className="primary-pulley"
					strokeDasharray="70,3"
					strokeWidth="12"
					mask="url(#primary-pulley-mask)"
					xlinkHref="#primary-pulley-path"
				/>
			</g>
			<path
				className="vee-belt"
				stroke="#000"
				strokeDasharray="137,4"
				strokeWidth="10"
				d="M322.185 367.717s0 0 0 0c-14.003 16.036-38.181 18.123-54.724 4.723L47.195 194.028C12.442 165.878 4.33 116.14 28.337 78.407c5.613-8.822 11.763-16.02 18.448-21.591 0 0 0 0 0 0 37.917-31.6 94.272-26.48 125.873 11.438a89.372 89.372 0 017.84 11.004l145.805 241.346c9.019 14.929 7.354 33.975-4.118 47.113 0 0 0 0 0 0z"
			/>
		</svg>
	)
}
