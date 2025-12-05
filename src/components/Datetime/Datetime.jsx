import { useEffect, useState } from 'react'

const Datetime = () => {
	const [time, setTime] = useState(
		new Date().toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})
	)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})
			)
		}, 10000)

		return () => clearInterval(interval)
	}, [setTime])

	return (
		<>
			<h1>
				Good{' '}
				{new Date().getHours() < 12 && new Date().getHours() >= 6
					? 'Morning'
					: new Date().getHours() < 18
					? 'Afternoon'
					: new Date().getHours() < 24
					? 'Evening'
					: 'Night'}
			</h1>
			<span className='sidebar__time'>{time}</span>
		</>
	)
}

export default Datetime
