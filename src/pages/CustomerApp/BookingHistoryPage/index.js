import React from 'react';
import BookingHistory from '../../../widgets/BookingHistory';
import { mockData_BookingTable } from '../../../widgets/BookingHistory/BookingTable/MOCK_DATA';

function BookingHistoryPage() {
	return <BookingHistory {...mockData_BookingTable}/>;
}

export default BookingHistoryPage;
