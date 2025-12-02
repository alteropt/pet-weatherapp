import { useEffect } from 'react'

export const useOutsideClicker = (
	parentRef,
	setIsParentOpen,
	triggerWidth = Infinity
) => {
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				parentRef.current &&
				!parentRef.current.contains(event.target) &&
				!event.target.closest('.sidebar__burger') &&
				window.innerWidth <= triggerWidth
			) {
				setIsParentOpen(false)
			}
		}

		window.addEventListener('click', handleClickOutside)

		return () => {
			window.removeEventListener('click', handleClickOutside)
		}
	}, [parentRef, setIsParentOpen, triggerWidth])
}
