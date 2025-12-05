import Modal from './components/Modal/SearchCityModal'
import WeatherElement from './components/WeatherElement/WeatherElement'
import WeeklyForecast from './components/WeeklyForecast/WeeklyForeCast'
import { useWeather } from './hooks/useWeather'

function App() {
	const { weather } = useWeather()
	return (
		<>
			<Modal />
			{weather?.error ? (
				<div className='error'>{weather.error}</div>
			) : (
				<>
					<WeatherElement isLarge={true} />
					<WeeklyForecast />
				</>
			)}
		</>
	)
}

export default App
