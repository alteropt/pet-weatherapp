import { useWeather } from '../../hooks/useWeather'
import WeatherCard from '../WeatherCard/WeatherCard'

const hoursAmount = 6

const HourlyForecast = () => {
	const { weather } = useWeather()
	const periods = weather?.hourly?.response?.[0]?.periods || []

	const weatherCards = []

	for (let i = 0; i < hoursAmount; i++) {
		const p = periods[i]

		const time = p ? p.validTime.split('T')[1].slice(0, 5) : undefined

		weatherCards.push(
			<WeatherCard
				key={i}
				period={time}
				temp={p?.tempC}
				description={p?.weather}
			/>
		)
	}

	return <div className='hourly-forecast'>{weatherCards}</div>
}

export default HourlyForecast
