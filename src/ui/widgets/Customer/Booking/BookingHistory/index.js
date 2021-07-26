import React from 'react';

import BookingHeader from './BookingHeader';
import BookingTable from './BookingTable';
import { mockData } from './MOCK_DATA';

function BookingHistory({ loading = false }) {
	return (
		<>
			<BookingHeader />
			<BookingTable
				dataSource={mockData?.dataSource}
				columns={mockData?.columns}
				loading={loading}
			/>
		</>
	);
}

export default BookingHistory;
