export const formatDate = (dateString) => {
	return new Date(dateString).toLocaleDateString('en-gb', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

export const formatDayString = (data) => {
	let day = new Date(data).getDay();
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fiday', 'Saturday'];
	return days[day];
};
