import axios from 'axios'

const id = import.meta.env.VITE_XWEATHER_ID
const secret = import.meta.env.VITE_XWEATHER_SECRET

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
