import { useWeather } from '../../hooks/useWeather'
import WeatherCard from '../WeatherCard/WeatherCard'

const hoursAmount = 6

const HourlyForecast = () => {
	const { weather } = useWeather()

	if (!weather) return 'Loading...'

	const hourlyForecast = weather.hourly.response[0].periods
	const weatherCards = []

	for (let i = 0; i < hoursAmount; i++) {
		const time = hourlyForecast[i].validTime.split('T')[1].slice(0, 5)
		weatherCards.push(
			<WeatherCard
				key={i}
				period={time}
				temp={hourlyForecast[i].tempC}
				description={hourlyForecast[i].weather}
			/>
		)
	}

	return <div className='hourly-forecast'>{weatherCards}</div>
}

export default HourlyForecast
