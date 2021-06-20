import React from 'react';
import './styles.scss';
import ArrowDown from '../../../assets/img/arrowDown.png';
import Calender from '../../../assets/img/calender.png';
import {DatePicker} from 'antd';

function BookingHeader() {
	return (
		<div className="header-wrapper">
			<div className="title">
				<h2>Your booking history</h2>
			</div>
			<div className="actions">
				<div className="input">
					<span className="title">Status:</span> <span>All</span>
					<img src={ArrowDown} alt="ArrowDown" />
				</div>
				<div className="input">
					<span className="title">Types:</span> <span>Trip booking</span>
					<img src={ArrowDown} alt="ArrowDown" />
				</div>
				<div className="input">
					<img src={Calender} alt="Calender" />
					<span>Today</span>
				</div>
				<div className="input">
					<input type="text" placeholder="Search booking" />
				</div>
			</div>
		</div>
	);
}

export default BookingHeader;
