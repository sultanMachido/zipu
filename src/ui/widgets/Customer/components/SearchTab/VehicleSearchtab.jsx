import { DatePicker } from 'antd';
import { ReactComponent as Bidir } from 'assets/svg/Bidir.svg';
import { states } from 'data/index';
import moment from 'moment';
import React, { Fragment } from 'react';

// const {RangePicker} = DatePicker;
// Bidir

const dateFormat = 'YYYY/MM/DD';

const VehicleSearchTab = () => {
	return (
		<Fragment>
			<ul className="d-flex">
				<li className="fromTo">
					<select>
						<option>From</option>
						{states.map((item) => {
							return (
								<option key={item} value={item.code}>
									{item.name}
								</option>
							);
						})}
					</select>
					<Bidir />
					<select>
						<option>To</option>
						{states.map((item) => {
							return (
								<option key={item} value={item.code}>
									{item.name}
								</option>
							);
						})}
					</select>
				</li>
				<li className="withDriver">
					<select>
						<option>Return</option>
						<option value="lime">One Way</option>
					</select>
				</li>
				<li>
					<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
				</li>
				<li>
					<button className="btn btn-brand-2 ">SHOW VEHICLES</button>
				</li>
			</ul>
		</Fragment>
	);
};

export default VehicleSearchTab;
