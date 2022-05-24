export function formatDate(date) {
	const currentDate = new Date(date)
	return currentDate.toLocaleDateString('fr-FR')
}