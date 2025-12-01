import classes from './WeatherCard.module.css'

const WeatherCard = ({ period, temp, description }) => {
	return (
		<div className={classes.card}>
			<p className={classes.period}>{period}</p>
			<span className={classes.temp}>{temp}°</span>
			<p className={classes.description}>{description}</p>
		</div>
	)
}

export default WeatherCard
