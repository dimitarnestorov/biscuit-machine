import { useObserver } from 'mobx-react-lite'
import React, { useCallback } from 'react'

import MachineState from '../MachineState'
import { useMachineStore } from '../MachineStore'

import './Controls.scss'

function Radio({ value }: { value: MachineState }) {
	const store = useMachineStore()
	const machineState = useObserver(() => store.state)
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => store.changeState(event.target.value as MachineState),
		[store],
	)

	return (
		<input
			type="radio"
			name="machine-state"
			value={value}
			onChange={handleChange}
			checked={machineState === value}
		/>
	)
}

export default function Controls() {
	const store = useMachineStore()
	const goodCookies = useObserver(() => store.goodCookies)
	const badCookies = useObserver(() => store.badCookies)

	return (
		<div className="controls">
			<ul>
				<li>
					<label>
						<Radio value={MachineState.On} /> On
					</label>
				</li>
				<li>
					<label>
						<Radio value={MachineState.Paused} /> Paused
					</label>
				</li>
				<li>
					<label>
						<Radio value={MachineState.Off} /> Off
					</label>
				</li>
			</ul>
			<div className="splitter" />
			<ul>
				<li>Good Cookies: {goodCookies}</li>
				<li>Bad Cookies: {badCookies}</li>
			</ul>
		</div>
	)
}
