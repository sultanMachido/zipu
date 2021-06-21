import React, {Fragment} from 'react';
import {DatePicker} from 'antd';
import moment from 'moment';
import {ReactComponent as Bidir} from 'assets/svg/Bidir.svg';
import {states} from 'data/index';


// const {RangePicker} = DatePicker;
// Bidir

const dateFormat = 'YYYY/MM/DD';

const VehicleTab = () => {
	return (
		<Fragment>
			<ul className="d-flex">
				<li className="fromTo">
					<select>
						<option>From</option>
						{states.map((item) => {
						   return <option value={item.code}>{item.name}</option>	 
						})}
					</select>
						<Bidir />
					<select>
						<option>To</option>
						{states.map((item) => {
						   return <option value={item.code}>{item.name}</option>	 
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
					<DatePicker
						defaultValue={moment('2015/01/01', dateFormat)}
						format={dateFormat}
					/>
				</li>
				<li>
					<button className="btn btn-brand-2 ">SHOW VEHICLES</button>
				</li>
			</ul>
		</Fragment>
	);
};

export default VehicleTab;
