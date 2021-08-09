/* eslint-disable no-empty */
import moment from 'moment';

const dateFilterParser = (type) => {
	const today = moment();
	let startDate = today.startOf(type).format('YYYY-MM-DD');
	let endDate = today.endOf(type);

	if (type === 'all') {
		return { startDate: null, endDate: null };
	}

	const isTypeADate = !['day', 'week', 'month', 'year'].includes(type);

	if (isTypeADate) {
		startDate = type;
		endDate = moment(type, 'YYYY-MM-DD');
	} else {
	}
	if (type === 'day') {
		endDate = endDate.add(1, 'days').format('YYYY-MM-DD');
	} else {
		endDate = endDate.add(1, 'days').format('YYYY-MM-DD');
	}

	return { startDate, endDate };
};

const dateFilterTimestampParser = (type) => {
	const today = moment();
	let startDate = today.startOf(type).format('YYYY-MM-DD');
	let endDate = today.endOf(type);

	if (type === 'all') {
		return { startDate: null, endDate: null };
	}

	const isTypeADate = !['day', 'week', 'month', 'year'].includes(type);

	if (isTypeADate) {
		startDate = type;
		endDate = moment(type, 'YYYY-MM-DD');
	}

	if (type === 'day') {
		endDate = endDate.add(1, 'days').format('YYYY-MM-DD');
	} else {
		endDate = endDate.add(1, 'days').format('YYYY-MM-DD');
	}

	return { startDate: new Date(startDate).getTime(), endDate: new Date(endDate).getTime() };
};

export { dateFilterParser, dateFilterTimestampParser };
