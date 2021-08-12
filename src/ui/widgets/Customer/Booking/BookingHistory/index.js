/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
	fetchCustomerBookingHistory,
	filterCustomerBookingHistory
} from 'redux/actions/bookings/booking.actions';

import BookingHeader from './BookingHeader';
import BookingTable from './BookingTable';
import { mockData } from './MOCK_DATA';

const BookingHistory = ({
	bookings: { bookings, filteredBookings, fetchAllBookingsLoading },
	...props
}) => {
	useEffect(() => {
		props.fetchCustomerBookingHistory();
	}, []);

	useEffect(() => {
		bookings && bookings.length > 0 && filterCustomerBookingHistory([...bookings]);
	}, [bookings]);

	return (
		<>
			<BookingHeader />
			<BookingTable
				dataSource={filteredBookings}
				columns={mockData?.columns}
				loading={fetchAllBookingsLoading}
			/>
		</>
	);
};

const mapStateToProps = (state) => ({
	bookings: state.bookings
});

const mapDispatchToProps = {
	filterCustomerBookingHistory,
	fetchCustomerBookingHistory
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingHistory));
