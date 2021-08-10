/* eslint-disable react-hooks/exhaustive-deps */
// import { Button, Empty } from 'antd';
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

	// const EmptyState = (
	// 	<Empty
	// 		image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
	// 		imageStyle={{
	// 			height: 60
	// 		}}
	// 		description={
	// 			<span>
	// 				Customize <a href="#API">Description</a>
	// 			</span>
	// 		}>
	// 		<Button type="primary">Create Now</Button>
	// 	</Empty>
	// );
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
