// import { DatePicker } from 'antd';
// import { ReactComponent as Calendar } from 'assets/svg/calendar.svg';
import { ReactComponent as Search } from 'assets/svg/search.svg';
import classnames from 'classnames/bind';
// import moment from 'moment';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';

// const {RangePicker} = DatePicker;
// const dateFormat = 'YYYY/MM/DD';
import style from './index.module.scss';

let styles = classnames.bind(style);

function BookingHeader() {
	return (
		<View className={`d-flex ${styles('booking--fwrapper')}`}>
			<View display="flex" className={`tsrow ${styles('booking--header')}`}>
				<h3 className="sub-lg black">Your booking history</h3>
			</View>
			<View display="flex" className={`${styles('booking--filter')}`}>
				<ul className={`d-flex  ${styles('booking--ul')} `}>
					<li className={`d-flex align-items-center`}>
						<p>Types:&nbsp; </p>
						<select>
							<option value="grapefruit">Trip 2</option>
							<option value="lime">Akure to Lagos</option>
							<option value="lime">Benin to Lagos</option>
							<option value="lime">Abuja to Lagos</option>
						</select>
					</li>
					<li className={`d-flex align-items-center`}>
						<p>Status:&nbsp; </p>
						<select>
							<option value="grapefruit">Return</option>
							<option value="lime">One Way</option>
						</select>
					</li>
					<li className={`d-flex align-items-center`}>
						{/* <figure>
							<Calendar />
						</figure> */}
						<input type="date" name="date" />
					</li>
					<li className={`d-flex align-items-center`}>
						<figure>
							<Search />
						</figure>
						<input name="search" type="text" placeholder="Search Bookings" />
					</li>
				</ul>
			</View>
		</View>
	);
}

export default BookingHeader;
