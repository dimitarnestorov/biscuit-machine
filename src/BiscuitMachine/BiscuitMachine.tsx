import { useObserver } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'

import Cookie from './Cookie'
import ConveyorBelt from './ConeyorBelt'
import Controls from './Controls'
import Extruder from './Extruder'
import MachineStore, { MachineStoreProvider, useMachineStore } from './MachineStore'
import Stamper from './Stamper'
import Slide from './Slide'

import './BiscuitMachine.scss'

function Cookies() {
	const store = useMachineStore()

	return (useObserver(() =>
		store.cookies.map((cookie) => (
			<Cookie key={cookie.id} isStamped={cookie.isStamped} location={cookie.location} />
		)),
	) as unknown) as JSX.Element
}

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
				<Extruder />
				<Stamper />
				<Cookies />
				<Slide />
			</div>
		</MachineStoreProvider>
	)
}
