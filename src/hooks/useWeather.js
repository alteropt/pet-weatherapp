import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

export const useWeather = () => {
	const context = useContext(WeatherContext)

	return context
}
