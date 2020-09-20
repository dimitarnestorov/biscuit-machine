import locations from './locations.module.scss'

enum Location {
	UnderExtruder = Number(locations.underExtruder),
	UnderStamper = Number(locations.underStamper),
	AfterStamper = Number(locations.afterStamper),
	InOven1 = Number(locations.inOven1),
	InOven2 = Number(locations.inOven2),
	AfterOven = Number(locations.afterOven),
	Slide = Number(locations.slide),
}

export default Location
