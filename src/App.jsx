import Modal from './components/Modal/SearchCityModal'
import WeatherElement from './components/WeatherElement/WeatherElement'
import WeeklyForecast from './components/WeeklyForecast/WeeklyForeCast'
import { useWeather } from './hooks/useWeather'

function App() {
	const { weather } = useWeather()

	if (!weather) return <div>Loading...</div>

	return (
		<>
			<Modal />
			<WeatherElement isLarge={true} weather={weather.current.response} />
			<WeeklyForecast weather={weather.daily.response[0]} />
		</>
	)
}

export default App
