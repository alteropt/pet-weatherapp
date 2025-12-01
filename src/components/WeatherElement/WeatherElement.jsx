import { Droplet, Wind } from 'lucide-react'
import { useWeather } from '../../hooks/useWeather'
import classes from './WeatherElement.module.css'

const WeatherElement = ({ isLarge = false, isFeelsLikeNeeded = false }) => {
	const { weather } = useWeather()

	if (!weather || weather.length === 0) return 'Loading...'

	const currentWeather = weather.current.response[0].periods[0]

	const tempC = currentWeather.tempC
	const description = currentWeather.weather
	const humidity = currentWeather.humidity
	const windSpeedMPH = currentWeather.windSpeedMPH
	const feelsLike = currentWeather.feelslikeC

	return (
		<div className={classes.container}>
			<div className={isLarge ? classes['data-large'] : classes.data}>
				<div className={classes['temp-container']}>
					<span className={isLarge ? classes['temp-large'] : classes.temp}>
						{tempC}°
					</span>
					{isLarge && (
						<p className={classes['description-large']}>{description}</p>
					)}
				</div>
				<div className={isLarge ? classes['extra-large'] : classes.extra}>
					<span>
						<Wind size={isLarge ? 24 : 16} />
						{windSpeedMPH} mph
					</span>
					<span>
						<Droplet size={isLarge ? 24 : 16} />
						{humidity}%
					</span>
				</div>
			</div>
			{isFeelsLikeNeeded && (
				<p
					className={
						isLarge ? classes['feels-like-large'] : classes['feels-like']
					}
				>
					Feels like {feelsLike}°
				</p>
			)}
			{!isLarge && <p className={classes.description}>Cloudy</p>}
		</div>
	)
}

export default WeatherElement
