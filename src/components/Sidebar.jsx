import { Menu } from 'lucide-react'
import { useRef, useState } from 'react'
import { useOutsideClicker } from '../hooks/useOutsideClicker'
import { useWeather } from '../hooks/useWeather'
import Datetime from './Datetime/Datetime'
import HourlyForecast from './HourlyForecast/HourlyForecast'
import WeatherElement from './WeatherElement/WeatherElement'

const Sidebar = () => {
	const { weather } = useWeather()

	const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 992)
	const sidebarRef = useRef()
	useOutsideClicker(sidebarRef, setIsSidebarOpen, 992)

	let content

	if (isSidebarOpen) {
		content = (
			<>
				<Datetime />

				<WeatherElement isFeelsLikeNeeded={true} />
				<h3 className='sidebar__hourly'>Hourly Forecast</h3>
				<HourlyForecast />
			</>
		)
	} else {
		content = (
			<button
				className='sidebar__burger'
				onClick={() => setIsSidebarOpen(true)}
			>
				<Menu color='#000' />
			</button>
		)
	}

	return (
		<div
			className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
			ref={sidebarRef}
		>
			{weather?.error ? (
				<>
					<Datetime />
					<div className='error'>{weather.error}</div>
				</>
			) : (
				content
			)}
		</div>
	)
}

export default Sidebar
