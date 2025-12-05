import axios from 'axios'
import { resolveCity } from './resolveCity.service'
import { api } from './xweather'

export async function getCurrentWeather(location = 'minsk,by') {
	const res = await api.get(`/conditions/${location}`)
	return res.data
}

export async function getDailyForecast(location = 'minsk,by') {
	const res = await api.get(`/forecasts/${location}`, {
		params: { filter: 'daily' },
	})
	return res.data
}

export async function getHourlyForecast(location = 'minsk,by') {
	const res = await api.get(`/forecasts/${location}`, {
		params: { filter: '1h', period: '48h' },
	})
	return res.data
}

export async function getWeatherScreenData(userInput = 'minsk') {
	try {
		const location = await resolveCity(userInput)

		const [current, daily, hourly] = await Promise.all([
			getCurrentWeather(location),
			getDailyForecast(location),
			getHourlyForecast(location),
		])

		return {
			current,
			daily,
			hourly,
		}
	} catch (error) {
		let currentError = null
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 401) {
				currentError = 'The User is not authorized!'
			} else {
				currentError = 'Something went wrong!'
			}
		} else {
			currentError = 'The city was not found!'
		}
		return {
			current: null,
			daily: null,
			hourly: null,
			error: currentError,
		}
	}
}
