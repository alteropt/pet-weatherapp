import axios from 'axios'

export async function resolveCity(input) {
	const query = input.trim()

	const { data } = await axios.get(
		'https://geocoding-api.open-meteo.com/v1/search',
		{
			params: {
				name: query,
				language: 'en',
				count: 1,
			},
		}
	)

	if (!data.results?.length) {
		throw new Error('The city was not found')
	}

	const city = data.results[0]

	const cityName = city.name.toLowerCase().replace(' ', '-')
	const country = city.country_code.toLowerCase()

	return `${cityName},${country}`
}
