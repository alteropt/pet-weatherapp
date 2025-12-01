import { useEffect, useState } from 'react'
import { WeatherContext } from './WeatherContext'
import { getWeatherScreenData } from '../api/xweather.service'

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState(null)

	useEffect(() => {
		async function load() {
			const data = await getWeatherScreenData('minsk')
			setWeather(data)
		}

		load()
	}, [])

	return (
		<WeatherContext.Provider value={{ weather, setWeather }}>
			{children}
		</WeatherContext.Provider>
	)
}
