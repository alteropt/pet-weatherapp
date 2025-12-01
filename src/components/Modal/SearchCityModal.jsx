import { X } from 'lucide-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { getWeatherScreenData } from '../../api/xweather.service'
import { useSearchCityModal } from '../../hooks/useSearchCityModal'
import { useWeather } from '../../hooks/useWeather'
import classes from './SearchCityModal.module.css'

const SearchCityModal = () => {
	const { setWeather } = useWeather()
	const { isModalOpen, closeModal, city, setCity } = useSearchCityModal()
	const [error, setError] = useState('')

	async function handleCityChange(event) {
		event.preventDefault()

		try {
			const data = await getWeatherScreenData(event.target[0].value)
			setWeather(data)
			closeModal()
			setCity(event.target[0].value)
			setError('')
		} catch {
			setError('The city was not found!')
		}
	}

	if (!isModalOpen) return null

	return createPortal(
		<div className={classes.modal} onClick={closeModal}>
			<form
				className={classes.form}
				onSubmit={event => handleCityChange(event)}
				onClick={event => event.stopPropagation()}
			>
				<div className={classes['input-container']}>
					<input
						city={city}
						type='text'
						className={classes['city-input']}
						placeholder='Enter city name'
					/>
					<label className={classes.error}>{error}</label>
				</div>
				<button type='submit' className={classes['enter-button']}>
					Enter
				</button>

				<button onClick={closeModal} className={classes['close-button']}>
					<X />
				</button>
			</form>
		</div>,
		document.getElementById('modal')
	)
}

export default SearchCityModal
