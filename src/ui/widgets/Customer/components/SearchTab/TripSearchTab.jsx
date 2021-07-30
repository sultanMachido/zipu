import { DatePicker } from 'antd';
import moment from 'moment';
import React, { Fragment } from 'react';

const dateFormat = 'YYYY/MM/DD';

const TripSearchTab = () => {
	return (
		<Fragment>
			<ul className="d-flex">
				<li>
					<select>
						<option value="grapefruit">Trip 2</option>
						<option value="lime">Akure to Lagos</option>
						<option value="lime">Benin to Lagos</option>
						<option value="lime">Abuja to Lagos</option>
					</select>
				</li>
				<li>
					<select>
						<option value="grapefruit">Return</option>
						<option value="lime">One Way</option>
					</select>
				</li>
				<li>
					<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
				</li>
				<li>
					<button className="btn btn-brand-2 ">SHOW TRIPS</button>
				</li>
			</ul>
		</Fragment>
	);
};

export default TripSearchTab;
