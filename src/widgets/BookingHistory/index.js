import React from 'react';
import BookingHeader from './BookingHeader';
import BookingTable from './BookingTable';

function BookingHistory({dataSource, columns, loading = false, rowKey, locale, pagination}) {
	return (
		<>
			<BookingHeader />
			<BookingTable
				dataSource={dataSource}
				columns={columns}
				loading={loading}
				rowKey={rowKey}
				locale={locale}
				pagination={pagination}
			/>
		</>
	);
}

export default BookingHistory;
