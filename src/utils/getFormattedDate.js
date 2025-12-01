export default function getFormattedDate() {
	const d = new Date()
	const day = String(d.getDate()).padStart(2, '0')
	const month = String(d.getMonth() + 1).padStart(2, '0')
	const year = d.getFullYear()

	const formatted = `${day}.${month}.${year}`
	return formatted
}
