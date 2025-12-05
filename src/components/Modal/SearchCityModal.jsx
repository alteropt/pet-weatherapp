import { X } from 'lucide-react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { getWeatherScreenData } from '../../api/xweather.service'
import { useSearchCityModal } from '../../hooks/useSearchCityModal'
import { useWeather } from '../../hooks/useWeather'
import classes from './SearchCityModal.module.css'

const SearchCityModal = () => {
	const { setWeather, isLoading, setIsLoading } = useWeather()
	const { isModalOpen, closeModal, setCity } = useSearchCityModal()
	const [error, setError] = useState('')
	const [inputValue, setInputValue] = useState('')

	const handleCityChange = async e => {
		e.preventDefault()
		const cityName = inputValue.trim()

		if (!cityName) {
			setError('Please enter a city name')
			return
		}

		setError('')
		setIsLoading(true)
		try {
			const data = await getWeatherScreenData(cityName)
			setWeather(data)
			setCity(cityName)
			closeModal()
		} catch {
			setError('The city was not found!')
		} finally {
			setIsLoading(false)
		}
	}

	if (!isModalOpen) return null

	return createPortal(
		<div className={classes.modal} onClick={closeModal}>
			<form
				className={classes.form}
				onSubmit={handleCityChange}
				onClick={e => e.stopPropagation()}
			>
				<div className={classes['input-container']}>
					<input
						type='text'
						className={classes['city-input']}
						placeholder='Enter city name'
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						autoFocus
						disabled={isLoading}
					/>
					{isLoading && <p className={classes.loading}>Loading...</p>}
					<label className={classes.error}>{error}</label>
				</div>

				<button type='submit' className={classes['enter-button']}>
					Enter
				</button>

				<button
					type='button'
					onClick={closeModal}
					className={classes['close-button']}
				>
					<X size={24} />
				</button>
			</form>
		</div>,
		document.getElementById('modal')
	)
}

export default SearchCityModal
