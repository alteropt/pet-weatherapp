import classes from './WeatherCard.module.css'

const WeatherCard = ({ period, temp, description, style }) => {
	let resultingDescription = description

	if (description.toLowerCase().includes('cloudy')) {
		resultingDescription = 'Cloudy'
	} else if (description.toLowerCase().includes('rain')) {
		resultingDescription = 'Rain'
	} else if (description.toLowerCase().includes('snow')) {
		resultingDescription = 'Snow'
	} else if (description.toLowerCase().includes('sunny')) {
		resultingDescription = 'Sunny'
	} else if (description.toLowerCase().includes('clear')) {
		resultingDescription = 'Clear'
	}

	return (
		<div className={classes.card} style={{ ...style }}>
			<p className={classes.period}>{period}</p>
			<span className={classes.temp}>{temp}°</span>

			<p className={classes.description}>{resultingDescription}</p>
		</div>
	)
}

export default WeatherCard
