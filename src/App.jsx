import Modal from './components/Modal/SearchCityModal'
import WeatherElement from './components/WeatherElement/WeatherElement'
import WeeklyForecast from './components/WeeklyForecast/WeeklyForeCast'
import { useWeather } from './hooks/useWeather'

function App() {
	const { weather, isLoading } = useWeather()

	return (
		<>
			<Modal />
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<WeatherElement isLarge={true} weather={weather.current.response} />
					<WeeklyForecast weather={weather.daily.response[0]} />
				</>
			)}
		</>
	)
}

export default App
