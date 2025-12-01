import { getWeekdayFromDate } from '../../utils/getWeekday'
import WeatherCard from '../WeatherCard/WeatherCard'

const WeeklyForecast = ({ weather }) => {
	return (
		<div
			style={{
				display: 'flex',
				marginTop: '3rem',
				justifyContent: 'center',
				gap: '1rem',
			}}
		>
			{weather.periods.map((period, index) => {
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
					/>
				)
			})}
		</div>
	)
}

export default WeeklyForecast
