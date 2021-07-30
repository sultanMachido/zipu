/* eslint-disable no-unused-vars */
// import TripSearchItem from 'components/TripSearchItem';
import classnames from 'classnames/bind';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { View } from 'ui/atoms/components/Typography';
import { ReturnLeftIcon } from 'ui/svgs';

import TripCard from '../components/TripCard';
import style from './booking.module.scss';
import { mockData_TripCard } from './MOCK_DATA';
let styles = classnames.bind(style);

const BookTrip = () => {
	return (
		<Fragment>
			<View className={styles('hero')}>
				<View className={`${styles('hero--header')} ${styles('search-tab')}`}>
					<button className={`${styles('btn--return')}`}>
						<ReturnLeftIcon /> <span>Complete yor booking</span>
					</button>
				</View>
				<View className={styles('herotab--content')}>
					<View className={styles('booking--container')}>
						<View className={styles('booking--main')}>
							<View
								className={`${styles('booking-form')} ${styles('bordered--bottom')} mb-sm pb-sm`}>
								<p className="body-2-lg black mb-1">Personal Details</p>
								<p className="mb-sm">
									You can also click here to sign in if you already have an account
								</p>

								<div className="tsrow  justify-between mb-sm">
									<div className="tscol-2 tscol">
										<input type="text" name="add" placeholder="First Name" />
									</div>
									<div className="tscol-2 tscol">
										<input type="text" name="add" placeholder="Last Name" />
									</div>
								</div>

								<div className="tsrow  justify-between mb-sm">
									<div className="tscol-2 tscol">
										<input type="email" name="add" placeholder="Email Address" />
									</div>
									<div className="tscol-2 tscol">
										<input type="number" name="ad" placeholder="Phone Number" />
									</div>
								</div>

								<div className="tsrow align-items-center mb-xs">
									<input type="checkbox"></input>
									<p className="body-2-lg black ml-xs">
										I’m making this booking on behalf of someone else
									</p>
								</div>
							</View>

							<View className={styles('booking--form')}>
								<p className="body-2-lg black mb-xs">Passenger Details</p>
								<div className="tsrow  justify-between mb-sm">
									<div className="tscol-2 tscol">
										<p className="mb-1 body-2-lg "> Adults</p>
										<select>
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
									</div>
									<div className="tscol-2 tscol">
										<p className="mb-1 body-2-lg mb-xs">Children</p>
										<select>
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
									</div>
								</div>

								<div className="tsrow  justify-between mb-sm">
									<div className="tscol-2 tscol">
										<p className="mb-1 body-2-lg ">Additional Luggage</p>
										<input name="add" />
									</div>
									<div className="tscol-2 tscol">
										<p className="body-2-lg  brand-1 font-500">+3000</p>
									</div>
								</div>

								<div className="tsrow align-items-center mb-xs">
									<input type="checkbox"></input>
									<p className="body-2-lg black ml-xs">Pickup Service</p>
								</div>

								<div className="tsrow  justify-between mb-sm">
									<div className="tscol-2 tscol">
										<p className="mb-1 body-2-lg ">Preference</p>
										<select>
											<option>Departure only</option>
											<option>2</option>
											<option>3</option>
										</select>
									</div>
									<div className="tscol-2 tscol">
										<p className="mb-1 body-2-lg mb-xs">Select your prefered pickup location</p>
										<select>
											<option>Berger Bustop</option>
											<option>2</option>
											<option>3</option>
										</select>
									</div>
								</div>
							</View>
						</View>
						<View className={styles('booking--side')}>
							{/* <section className="item tsCol bordered mb-md"> */}
							<View className={`tsCol bordered ${styles('booking-aside-item')}`}>
								<div className="tsCol border-bottom pb-sm mb-md">
									<h2 className="p-md">Summary of Charges</h2>
									<p className="body-2-lg"> Here is your payement breakdown</p>
								</div>

								<div className="tsCol border-bottom">
									<div className="tsrow justify-between mb-xs">
										<p className="body-2-lg"> Adult Ticket(s) </p>
										<p className="body-2-lg">₦ 22,000</p>
									</div>
									<div className="tsrow justify-between mb-xs">
										<p className="body-2-lg"> Adult Ticket(s) </p>
										<p className="body-2-lg">₦ 22,000</p>
									</div>
									<div className="tsrow justify-between mb-xs">
										<p className="body-2-lg"> Adult Ticket(s) </p>
										<p className="body-2-lg">₦ 22,000</p>
									</div>
									<div className="tsrow justify-between mb-xs">
										<p className="body-2-lg"> Adult Ticket(s) </p>
										<p className="body-2-lg">₦ 22,000</p>
									</div>
								</div>

								<div className="tsrow justify-between mt-sm mb-xs">
									<p className="sub-md"> Total Cost </p>
									<p className="sub-md">₦ 12,000</p>
								</div>
								<div className="tsrow justify-end mb-xs">
									<p className="body-2-sm grey-dark">(Includes taxes and fees)</p>
								</div>

								<div className="tsrow justify-start mb-xs">
									<p className="body-2-sm grey-dark">
										In some cases, additional local taxes and fees may be due at the counter. Please
										see the reservation terms and conditions for more information.
									</p>
								</div>

								<div className="tsrow justify-start  mb-xs">
									<Link to="/login" className="link link-brand-2 w-100 black">
										PROCEED TO PAYMENT
									</Link>
								</div>
							</View>
							<View
								className={`tsCol mt-lg ${styles('booking-aside-item')} ${styles(
									'booking--refund'
								)}`}>
								<p className="body-2-sm black font-600 mb-xs">Refund Policy</p>
								<p className="body-2-sm black">
									We use your personal data to process services that you have applied for, to
									contact you with newsletters and deal offers, and for personalised content and
									ads. You consent to our Data Policy if you click the above. You can withdraw
									consent and contact our Data Protection Officer at any time.
								</p>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Fragment>
	);
};

export default BookTrip;
