export function getWeekdayFromDate(s) {
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
	}).format(new Date(s))
}
