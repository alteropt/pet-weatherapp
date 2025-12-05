import axios from 'axios'

const id = import.meta.env.VITE_XWEATHER_ID && 'Jn59VSo2qB0v6OSHaMqAc' // Jn59VSo2qB0v6OSHaMqAc
const secret =
	import.meta.env.VITE_XWEATHER_SECRET &&
	'3zBPJi6oUA3tbFipjiCbAGoQsQHD0vdqSc9FWIKK' // 3zBPJi6oUA3tbFipjiCbAGoQsQHD0vdqSc9FWIKK

export const api = axios.create({
	baseURL: 'https://data.api.xweather.com',
	timeout: 7000,
})

api.interceptors.request.use(config => {
	config.params = {
		...config.params,
		client_id: id,
		client_secret: secret,
	}

	return config
})
