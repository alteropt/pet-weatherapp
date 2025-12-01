import { useEffect, useState } from 'react'
import HourlyForecast from './HourlyForecast/HourlyForecast'
import WeatherElement from './WeatherElement/WeatherElement'

const Sidebar = () => {
	const [time, setTime] = useState(
		new Date().toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})
	)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})
			)
		}, 15000)

		return () => clearInterval(interval)
	}, [setTime])

	return (
		<div className='sidebar'>
			<h1>Good Morning</h1>
			<span className='sidebar__time'>{time}</span>
			<WeatherElement isFeelsLikeNeeded={true} />
			<h3 className='sidebar__hourly'>Hourly Forecast</h3>
			<HourlyForecast />
		</div>
	)
}

export default Sidebar
