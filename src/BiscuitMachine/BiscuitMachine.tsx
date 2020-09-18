import { useObserver } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'

import ConveyorBelt from './ConeyorBelt'
import Controls from './Controls'
import MachineStore, { MachineStoreProvider } from './MachineStore'

import './BiscuitMachine.scss'

export default function BiscuitMachine() {
	const [store] = useState(() => new MachineStore())

	useEffect(() => {
		return () => store.destroy()
	}, [store])

	const isMotorMoving = useObserver(() => store.isMotorMoving)

	return (
		<MachineStoreProvider value={store}>
			<div className={isMotorMoving ? 'biscuit-machine motor-on' : 'biscuit-machine'}>
				<ConveyorBelt />
				<Controls />
			</div>
		</MachineStoreProvider>
	)
}
