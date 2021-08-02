/* eslint-disable no-unused-vars */
// import TripSearchItem from 'components/TripSearchItem';
import GIGM from 'assets/img/GIGMLogo.png';
import classnames from 'classnames/bind';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { View } from 'ui/atoms/components/Typography';
import Company from 'ui/components/Company';
import { ReturnLeftIcon } from 'ui/svgs';
import { CircleIcon, NextIcon, PreviousIcon, TimeIcon } from 'ui/svgs';
import { MapIcon } from 'ui/svgs/MapIcon';
import { PIcon } from 'ui/svgs/PIcon';

import TripCard from '../components/TripCard';
import style from './booking.module.scss';
import { mockData_TripCard } from './MOCK_DATA';
let styles = classnames.bind(style);

let companyInfo = {
	imgUrl: GIGM,
	tripsCompleted: '',
	rating: 5,
	reviewCount: 70
};
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
							<View className={` ${styles('booking--trip')} d-flex mb-sm pb-sm`}>
								<div className="w-25 mr-lg">
									<Company className="w-100" companyInfo={companyInfo} />
								</div>
								<div className="tscol w-100">
									<div className="tsrow justify-between w-100 mb-xs">
										<div className="tsrow">
											<div className="tscol mr-sm">
												<figure>
													<img src={GIGM} alt="motor" />
												</figure>
											</div>
											<div className="tscol">
												<h2 className="p-md font-500 lack">GIGM Jet Plus</h2>
												<p className="font-500 body-2-lg  grey-dark"> Departure trip</p>
											</div>
										</div>
										<div className="tsrow">
											<p className="tsrow">
												<span className="sub-md font-700 black">₦5,500</span>
											</p>
										</div>
									</div>

									<div className="d-flex justify-between w-100 mb-xs">
										<div className="tsrow">
											<p className="tsrow">
												<span className="body-2-lg black">Pick-up terminal</span>{' '}
											</p>
										</div>
										<div className="tsrow">
											<p className="tsrow">
												<span className="body-2-lg black">Drop-off terminal</span>
											</p>
										</div>
									</div>

									<div className="d-flex justify-between w-100 mb-xs">
										<div className="tsrow">
											<p className="tsrow">
												<TimeIcon className="mr-xs" />
												<span className="body-2-lg black">07:00am</span>{' '}
											</p>
										</div>
										<div className="tsrow">
											<p className="tsrow">
												<TimeIcon className="mr-xs" />
												<span className="body-2-lg black">07:00am</span>
											</p>
										</div>
									</div>

									<div className="d-flex justify-between w-100 mb-xs">
										<div className="tsrow">
											<p className="tsrow">
												<MapIcon className="mr-xs" />
												<span className="p-md">Ojota moto park</span>{' '}
											</p>
										</div>
										<div className="tsrow">
											<p className="tsrow">
												<MapIcon className="mr-xs" />
												<span className="p-md">Ekpoma park</span>
											</p>
										</div>
									</div>
								</div>
							</View>

							<View
								className={`${styles('booking-form')} ${styles('bordered--bottom')} mb-sm pb-sm`}>
								<h4 className="body-2-lg black">Your Trip details</h4>
								<p className="body-2-lg ">
									Click
									<span className={`${styles('clickable')} black clickable brand-1`}>
										&nbsp;Here&nbsp;
									</span>
									to modify your trip selection
								</p>
							</View>

							<View
								className={`${styles('date--selector')} ${styles('bordered--bottom')} mb-sm pb-sm`}>
								<div className="tsrow">
									<p className="body-2-lg black">Selected travel date</p>
								</div>
								<div className="tsrow">
									<button className="action--btn pr-sm">
										<PreviousIcon />
									</button>
									<button className="action--btn">
										<NextIcon />
									</button>
								</div>
							</View>

							<View className={`tscol mb-sm pb-sm`}>
								<div className="d-flex">
									<CircleIcon className="mt-y mr-md" />
									<div className="tscol">
										<div className="tsrow mb-1">
											<h2 className="p-lg  font-500 black">7:00AM Lagos - Benin</h2>
										</div>
										<div className="tsrow mb-1">
											<PIcon className="mr-xs" />
											<p className="body-2-sm black">Ojota moto park, Lagos</p>
										</div>
										<div className="tsrow mb-1">
											<PIcon className="mr-xs" />
											<p className="body-2-sm black">Premium - ₦7,700 </p>
										</div>
										<div className="tsrow mt-xs mb-1">
											<div className="info--badge">4 seat left, book now!</div>
										</div>
									</div>
								</div>
							</View>

							<View className={`tscol mb-sm pb-sm`}>
								<div className="d-flex">
									<CircleIcon className="mt-y mr-md" />
									<div className="tscol">
										<div className="tsrow mb-1">
											<h2 className="p-lg  font-500 black">7:00AM Lagos - Benin</h2>
										</div>
										<div className="tsrow mb-1">
											<PIcon className="mr-xs" />
											<p className="body-2-sm black">Ojota moto park, Lagos</p>
										</div>
										<div className="tsrow mb-1">
											<PIcon className="mr-xs" />
											<p className="body-2-sm black">Premium - ₦7,700 </p>
										</div>
										<div className="tsrow mt-xs mb-1">
											<div className="info--badge">4 seat left, book now!</div>
										</div>
									</div>
								</div>
							</View>

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
