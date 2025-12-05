import { useWeather } from '../../hooks/useWeather'
import { getWeekdayFromDate } from '../../utils/getWeekday'
import WeatherCard from '../WeatherCard/WeatherCard'

const WeeklyForecast = () => {
	const { weather } = useWeather()
	const currentWeather = weather?.daily.response[0]
	return (
		<div
			style={{
				display: 'flex',
				marginTop: '3rem',
				justifyContent: 'center',
				gap: '1rem',
				flexWrap: 'wrap',
			}}
		>
			{currentWeather?.periods.map((period, index) => {
				let periodName

				if (index === 0) {
					periodName = 'Today'
				} else {
					periodName = getWeekdayFromDate(period.validTime)
				}

				if (index > 5) return null

				return (
					<WeatherCard
						key={period.validTime}
						period={periodName}
						temp={period.feelslikeC}
						description={period.weather}
						style={{ flexBasis: 'initial' }}
					/>
				)
			})}
		</div>
	)
}

export default WeeklyForecast
