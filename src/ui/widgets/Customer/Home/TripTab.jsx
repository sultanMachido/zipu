/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-unused-vars */
import { DatePicker } from 'antd';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { searchGroupedTrips } from 'redux/actions/trips/trips.actions';
// const {RangePicker} = DatePicker;
import { ReturnIcon } from 'ui/svgs';
import { dateFilterParser } from 'utils/dateFilter';
import { fromStates, toStates } from 'utils/states';

const dateFormat = 'YYYY/MM/DD';

const TripTab = ({ trips: { trips, fetchAllTripsLoading }, ...props }) => {
	let history = useHistory();

	const { startDate: _startDate, endDate: _endDate } = dateFilterParser('day');
	const [dateFilter, setDateFilter] = useState({
		origin: fromStates[0],
		destination: toStates[0],
		round_trip: 0
	});

	const handleChange = (e) => {
		setDateFilter({
			...dateFilter,
			[e.target.name]: e.target.value
		});
	};

	return (
		<Fragment>
			<ul className="d-flex relative">
				<li>
					<div className="d-flex  w-100 align-center">
						<select name="origin" onChange={handleChange}>
							{fromStates.map((item, index) => {
								return (
									<option key={index} value={item}>
										{item}
									</option>
								);
							})}
						</select>
						<ReturnIcon width="40px" height="40px" />
						<select name="destination" onChange={handleChange}>
							{toStates.map((item, index) => {
								return (
									<option key={index} value={item}>
										{item}
									</option>
								);
							})}
						</select>
					</div>
				</li>
				<li>
					<select name="round_trip" onChange={handleChange}>
						<option value="0">Round Trip</option>
						<option value="1">One Way</option>
					</select>
				</li>
				<li>
					<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
				</li>
				<li>
					<button onClick={() => props.searchGroupedTrips(dateFilter)} className="btn btn-brand-2 ">
						SHOW TRIPS
					</button>
				</li>
			</ul>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	trips: state.trips
});

const mapDispatchToProps = {
	searchGroupedTrips
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TripTab));
