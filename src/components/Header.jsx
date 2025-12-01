import { useSearchCityModal } from '../hooks/useSearchCityModal'
import getFormattedDate from '../utils/getFormattedDate'

const Header = () => {
	const { openModal, city } = useSearchCityModal()

	return (
		<header className='header'>
			<button className='header__city' onClick={openModal}>
				{city ? city : 'Minsk'}
			</button>
			<span className='header__date'>{getFormattedDate()}</span>
		</header>
	)
}

export default Header
