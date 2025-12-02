import { Menu } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useOutsideClicker } from '../hooks/useOutsideClicker'
import { useWeather } from '../hooks/useWeather'
import HourlyForecast from './HourlyForecast/HourlyForecast'
import WeatherElement from './WeatherElement/WeatherElement'

const Sidebar = () => {
	const { weather, isLoading } = useWeather()

	const [time, setTime] = useState(
		new Date().toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})
	)

	const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 992)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})
			)
		}, 10000)

		return () => clearInterval(interval)
	}, [setTime])

	const sidebarRef = useRef()

	useOutsideClicker(sidebarRef, setIsSidebarOpen, 992)

	return (
		<div
			className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
			ref={sidebarRef}
		>
			{isSidebarOpen ? (
				<>
					<h1>
						Good{' '}
						{new Date().getHours() < 12 && new Date().getHours() >= 6
							? 'Morning'
							: new Date().getHours() < 18
							? 'Afternoon'
							: new Date().getHours() < 24
							? 'Evening'
							: 'Night'}
					</h1>
					<span className='sidebar__time'>{time}</span>
					{isLoading ? (
						'Loading...'
					) : (
						<WeatherElement isFeelsLikeNeeded={true} />
					)}
					<h3 className='sidebar__hourly'>Hourly Forecast</h3>
					{isLoading ? (
						'Loading...'
					) : (
						<HourlyForecast weather={weather.hourly.response[0].periods} />
					)}
				</>
			) : (
				<button
					className='sidebar__burger'
					onClick={() => setIsSidebarOpen(true)}
				>
					<Menu />
				</button>
			)}
		</div>
	)
}

export default Sidebar
