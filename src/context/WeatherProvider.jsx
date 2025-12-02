import { useEffect, useState } from 'react'
import { getWeatherScreenData } from '../api/xweather.service'
import { WeatherContext } from './WeatherContext'

export const WeatherProvider = ({ children }) => {
	const [weather, setWeather] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function load() {
			const data = await getWeatherScreenData('minsk')
			setIsLoading(false)
			setWeather(data)
		}

		load()
	}, [])

	return (
		<WeatherContext.Provider
			value={{ weather, setWeather, isLoading, setIsLoading }}
		>
			{children}
		</WeatherContext.Provider>
	)
}
