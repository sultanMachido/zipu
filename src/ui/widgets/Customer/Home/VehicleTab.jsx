/* eslint-disable no-unused-vars */
import { DatePicker } from 'antd';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { searchGroupedTrips } from 'redux/actions/trips/trips.actions';
// const {RangePicker} = DatePicker;
import { ReturnIcon } from 'ui/svgs';
import { dateFilterParser } from 'utils/dateFilter';
import { fromStates, toStates } from 'utils/states';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

const VehicleTab = ({ trips: { trips, fetchAllTripsLoading }, ...props }) => {
	let history = useHistory();
	const [dates, setDates] = useState([null, null]);
	const [queryString, setQueryString] = useState('');

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

	const redirect = () => {
		history.push('/search/trips');
	};

	const handleDateChange = (dates) => {
		setDates(dates);
	};

	const handleBlur = () => {
		setQueryString(
			`/search/trips?origin=${dateFilter?.origin}&destination=${dateFilter?.destination}`
		);
	};

	const redirectToSearch = () => {
		props.history.push(queryString);
	};

	useEffect(() => {
		handleBlur();
	}, []);

	return (
		<Fragment>
			<ul className="d-flex relative">
				<li>
					<div className="d-flex align-center datefilter-input">
						<input
							name="origin"
							value={dateFilter?.origin}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<ReturnIcon width="25px" height="25px" />
						<input
							name="destination"
							value={dateFilter?.destination}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
					</div>
				</li>
				<li>
					{/* <div className="form-select"></div> */}
					<select>
						<option value="grapefruit">Return</option>
						<option value="lime">One Way</option>
					</select>
				</li>
				<li>
					{/* <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} /> */}
					<RangePicker onChange={handleDateChange} />
				</li>
				<li>
					{/* <button onClick={() => props.searchGroupedTrips(dateFilter)} className="btn btn-brand-2 "> */}
					<button onClick={redirectToSearch} className="btn btn-brand-2 ">
						SHOW VEHICLES
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VehicleTab));
