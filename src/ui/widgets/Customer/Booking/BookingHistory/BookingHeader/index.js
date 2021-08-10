/* eslint-disable jsx-a11y/no-onchange */
// import { DatePicker } from 'antd';
import { ReactComponent as Calendar } from 'assets/svg/calendar.svg';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import classnames from 'classnames/bind';
// import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { filterCustomerBookingHistory } from 'redux/actions/bookings/booking.actions';
import { View } from 'ui/atoms/components/Typography';

// const {RangePicker} = DatePicker;
// const dateFormat = 'YYYY/MM/DD';
import style from './index.module.scss';

let styles = classnames.bind(style);

const BookingHeader = ({ bookings: { bookings }, ...props }) => {
	const filterStatus = (e) => {
		let searchTerm = e?.target?.value.toLowerCase();
		if (searchTerm.length > 0) {
			let filtered = [];
			filtered = bookings.filter((item) => {
				return item.trip_status && item?.trip_status.toLowerCase() === searchTerm;
			});
			props.filterCustomerBookingHistory([...filtered]);
		} else {
			props.filterCustomerBookingHistory([...bookings]);
		}
	};

	const filterType = (e) => {
		let searchTerm = e?.target?.value.toLowerCase();
		if (searchTerm.length > 0) {
			let filtered = [];
			filtered = bookings.filter((item) => {
				return item.trip_type && item?.trip_type.toLowerCase() === searchTerm;
			});
			props.filterCustomerBookingHistory([...filtered]);
		} else {
			props.filterCustomerBookingHistory([...bookings]);
		}
	};

	const filterTrip = (e) => {
		let searchTerm = e?.target?.value.toLowerCase();
		if (searchTerm.length > 0) {
			let filtered = [];
			filtered = bookings.filter((item) => {
				const regEx = new RegExp(`${searchTerm}`, 'gi');
				return (
					(item.trip && item?.trip.origin_terminal.name.toLowerCase().match(regEx)) ||
					item?.trip.origin_terminal.address.toLowerCase().match(regEx) ||
					item?.trip.origin_terminal.state.toLowerCase().match(regEx) ||
					item?.trip.origin_terminal.city.toLowerCase().match(regEx) ||
					item?.trip.destination_terminal.name.toLowerCase().match(regEx) ||
					item?.trip.destination_terminal.address.toLowerCase().match(regEx) ||
					item?.trip.destination_terminal.state.toLowerCase().match(regEx) ||
					item?.trip.destination_terminal.city.toLowerCase().match(regEx)
				);
			});
			props.filterCustomerBookingHistory([...filtered]);
		} else {
			props.filterCustomerBookingHistory([...bookings]);
		}
	};

	const filterDate = (e) => {
		let searchTerm = e?.target?.value;
		let filtered = [];
		filtered = bookings.filter((item) => {
			console.log('search', formatDate(searchTerm));
			console.log('item', formatDate(item?.trip.origin_terminal?.created_at));

			console.log('search', searchTerm);
			console.log('item', item?.trip.origin_terminal?.created_at);

			return (
				item?.trip && formatDate(item?.trip.origin_terminal?.created_at) === formatDate(searchTerm)
			);
		});
		if (filtered.length > 0) {
			props.filterCustomerBookingHistory([...filtered]);
		} else {
			props.filterCustomerBookingHistory([]);
		}
	};

	const formatDate = (dateStr) => {
		return Date.parse(dateStr) / 1000;
	};

	return (
		<View className={`d-flex ${styles('booking--fwrapper')}`}>
			<View display="flex" className={`tsrow ${styles('booking--header')}`}>
				<h3 className="sub-lg black">Your booking history</h3>
			</View>
			<View display="flex" className={`${styles('booking--filter')}`}>
				<ul className={`d-flex  ${styles('booking--ul')} `}>
					<li className={`d-flex align-items-center`}>
						<p>Status:&nbsp; </p>
						<select onChange={filterStatus}>
							<option value="">Status</option>
							<option value="completed">Completed</option>
							<option value="transit">In-Transit</option>
						</select>
					</li>
					<li className={`d-flex align-items-center`}>
						<p>Types:&nbsp; </p>
						<select onChange={filterType}>
							<option value="">Trip Type</option>
							<option value="seat-booking">Seat-booking</option>
							<option value="vehicle-booking">Vehicle-booking</option>
						</select>
					</li>
					<li className={`d-flex align-items-center`}>
						<figure>
							<Calendar />
						</figure>
						<input onChange={filterDate} type="date" name="date" />
					</li>
					<li className={`d-flex align-items-center`}>
						<figure>
							<Search />
						</figure>
						<input onChange={filterTrip} name="search" type="text" placeholder="Search Bookings" />
					</li>
				</ul>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	bookings: state.bookings
});

const mapDispatchToProps = {
	filterCustomerBookingHistory
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingHeader));
