/* eslint-disable no-unused-vars */
import { DatePicker } from 'antd';
import moment from 'moment';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
// const {RangePicker} = DatePicker;
import { ReturnIcon } from 'ui/svgs';

const dateFormat = 'YYYY/MM/DD';

const TripTab = () => {
	let history = useHistory();

	const redirect = () => {
		history.push('/search/trips');
	};
	return (
		<Fragment>
			<ul className="d-flex relative">
				<li>
					<div className="d-flex  w-100 align-center">
						<select>
							<option value="lime">Enugu</option>
							<option value="lime">Lagos</option>
							<option value="lime">Akure</option>
						</select>
						<ReturnIcon width="40px" height="40px" />
						<select>
							<option value="lime">Lagos</option>
							<option value="lime">Akure</option>
							<option value="lime">Abuja</option>
						</select>
					</div>
				</li>
				<li>
					<select>
						<option value="grapefruit">Return</option>
						<option value="lime">One Way</option>
					</select>
				</li>
				<li>
					<select>
						<option value="grapefruit">Trip 2</option>
						<option value="lime">Akure to Lagos</option>
						<option value="lime">Benin to Lagos</option>
						<option value="lime">Abuja to Lagos</option>
					</select>
				</li>
				<li>
					<button className="btn btn-brand-2 ">SHOW TRIPS</button>
					<button onClick={redirect} className="btn btn-brand-2 ">
						SHOW VEHICLES
					</button>
				</li>
			</ul>
		</Fragment>
	);
};

export default TripTab;
