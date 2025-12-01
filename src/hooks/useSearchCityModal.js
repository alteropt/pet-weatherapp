import { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

export const useSearchCityModal = () => {
	const context = useContext(ModalContext)

	return context
}
