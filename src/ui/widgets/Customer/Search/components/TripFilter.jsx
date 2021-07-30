/* eslint-disable no-unused-vars */
import { DatePicker } from 'antd';
import moment from 'moment';
import React, { Fragment } from 'react';
const dateFormat = 'YYYY/MM/DD';
import { ReturnIcon } from 'ui/svgs';

const TripFilter = () => {
	return (
		<Fragment>
			<ul className="d-flex relative">
				<li>
					<div className="d-flex align-center">
						<select>
							<option value="grapefruit">Trip 2</option>
							<option value="lime">Akure</option>
							<option value="lime">Enugu</option>
							<option value="lime">Lagos</option>
						</select>
						<ReturnIcon width="25px" height="25px" />
						<select>
							<option value="grapefruit">Trip 2</option>
							<option value="lime">Lagos</option>
							<option value="lime">Akure</option>
							<option value="lime">Abuja</option>
						</select>
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
					<select>
						<option value="grapefruit">Trip 2</option>
						<option value="lime">Akure to Lagos</option>
						<option value="lime">Benin to Lagos</option>
						<option value="lime">Abuja to Lagos</option>
					</select>
				</li>
				<li>
					<button className="btn btn-brand-2 ">SHOW TRIPS</button>
				</li>
			</ul>
		</Fragment>
	);
};

export default TripFilter;
