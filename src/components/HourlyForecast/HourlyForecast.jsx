import WeatherCard from '../WeatherCard/WeatherCard'

const hoursAmount = 6

const HourlyForecast = ({ weather }) => {
	const weatherCards = []

	for (let i = 0; i < hoursAmount; i++) {
		const time = weather[i].validTime.split('T')[1].slice(0, 5)
		weatherCards.push(
			<WeatherCard
				key={i}
				period={time}
				temp={weather[i].tempC}
				description={weather[i].weather}
			/>
		)
	}

	return <div className='hourly-forecast'>{weatherCards}</div>
}

export default HourlyForecast
