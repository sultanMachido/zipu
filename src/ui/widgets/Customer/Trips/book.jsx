/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// import TripSearchItem from 'components/TripSearchItem';
import { Button, message, Modal, Spin, Tooltip } from 'antd';
import GIGM from 'assets/img/GIGMLogo.png';
import classnames from 'classnames/bind';
import { set } from 'date-fns/esm';
import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { getAuthenticatedCustomer } from 'redux/actions/login/login.actions';
import {
	bookTrip,
	bookTripWithPickup,
	getTrip,
	initiatePayment
} from 'redux/actions/trips/trips.actions';
import { View } from 'ui/atoms/components/Typography';
import Company from 'ui/components/Company';
import { ReturnLeftIcon } from 'ui/svgs';
import { CircleIcon, NextIcon, PreviousIcon, TimeIcon } from 'ui/svgs';
import { MapIcon } from 'ui/svgs/MapIcon';
import { PIcon } from 'ui/svgs/PIcon';
import * as Yup from 'yup';

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
const BookTrip = ({ trips: { trip, fetchTripLoading }, login: { userInfo }, ...props }) => {
	const [currentSeat, setSeat] = useState(0);
	const [extra, setExtra] = useState(0);
	const [pickup, setPickup] = useState({
		cost: 0,
		flag: false,
		location: 'berger'
	});
	const [customer, setCustomer] = useState({
		email: '',
		first_name: '',
		last_name: '',
		phone: '',
		round_trip: 0,
		trip_type: 'seat-booking',
		address: '',
		next_of_kin_name: '',
		no_of_adults: 1,
		next_of_kin_phone: ''
	});
	const [totalCost, setTotalCost] = useState(0);
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		loadTripDetails();
	}, []);

	useEffect(() => {
		props.getAuthenticatedCustomer();
	}, []);

	useEffect(() => {
		trip && setTotalCost(trip?.cost);
	}, [trip]);

	useEffect(() => {
		setCustomer({
			email: userInfo?.email || '',
			first_name: userInfo?.name || '',
			last_name: userInfo?.name || '',
			phone: userInfo?.phone || '',
			round_trip: 0,
			trip_type: 'seat-booking' || '',
			address: userInfo?.address || '',
			next_of_kin_name: userInfo?.next_of_kin_name || '',
			no_of_adults: 1 || '',
			next_of_kin_phone: userInfo?.next_of_kin_phone || ''
		});
	}, [userInfo]);

	const loadTripDetails = async () => {
		let tripId = props?.match?.params?.id;
		try {
			await props.getTrip(tripId);
		} catch (err) {
			message.error(err);
		}
	};

	const handlePickupService = () => {
		if (pickup?.flag === true) {
			setPickup({
				...pickup,
				cost: 0,
				flag: false
			});
			setTotalCost(totalCost - trip?.pickup_cost);
		} else {
			setPickup({
				...pickup,
				cost: trip?.pickup_cost,
				flag: true
			});
			setTotalCost(totalCost + trip?.pickup_cost);
		}
	};

	const handlePickupLocation = (e) => {
		setPickup({
			...pickup,
			location: e.target.value
		});
	};

	const handleExtraLuggage = (e) => {
		let newExtracost = trip?.extra_luggage_cost_per_kg * parseInt(e.target.value);
		setExtra(newExtracost);
		setTotalCost(totalCost + newExtracost);
	};

	const handleSeatSelection = (seatNum) => {
		setSeat(seatNum);
	};

	const handleSubmit = async (values, { setSubmitting }) => {
		if (pickup?.flag === true) {
			console.log('component response');

			let payload = {
				...values,
				seat_number: currentSeat,
				trip_id: props?.match?.params?.id,
				pick_up_service: 1,
				pick_up_location: pickup?.location
			};
			let response = await props.bookTripWithPickup(payload);
			if (response.status === true) {
				let initPayment = await props.initiatePayment(response.reference);
				if (initPayment.status === true) {
					console.log('component response', initPayment);
					window.open(initPayment.link);
				}
			} else {
				message.error(response.message);
			}
		} else {
			let payload = {
				...values,
				seat_number: currentSeat,
				trip_id: props?.match?.params?.id
			};
			let response = await props.bookTrip(payload);
			if (response.status === true) {
				let initPayment = await props.initiatePayment(response.reference);
				if (initPayment.status === true) {
					console.log('component response', initPayment);
					window.open(initPayment.link);
				}
			} else {
				message.error(response.message);
			}
		}
		setSubmitting(false);
	};

	const paymentCallback = () => {};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const location = `${trip?.origin_state} - ${trip?.destination_state}`;
	return (
		<Fragment>
			<View className={styles('hero')}>
				{fetchTripLoading ? (
					<View
						style={{
							paddingTop: '7rem',
							paddingLeft: '7rem'
						}}>
						<Spin />
					</View>
				) : trip && Object.keys(trip).length > 0 ? (
					<Fragment>
						<View className={`${styles('hero--header')} ${styles('search-tab')}`}>
							<button
								type="button"
								onClick={() => props.history.goBack()}
								className={`${styles('btn--return')}`}>
								<ReturnLeftIcon /> <span>Complete your booking </span>
							</button>
						</View>
						<Formik
							initialValues={customer}
							validationSchema={BookingSchema}
							onSubmit={handleSubmit}>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting
							}) => (
								<form onSubmit={handleSubmit}>
									<View className={styles('herotab--content')}>
										<View className={styles('booking--container')}>
											<View className={styles('booking--main')}>
												<View className={` ${styles('booking--trip')} d-flex mb-sm pb-sm`}>
													<div className="w-25 mr-lg hide-md">
														<Company className="w-100" companyInfo={companyInfo} />
													</div>
													<div className="tscol w-100">
														<div className="tsrow justify-between w-100 mb-xs trip-mobile-details ">
															<div className="tsrow company-details">
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
																	<span className="sub-md font-700 black">
																		₦{trip?.cost.toLocaleString()}
																	</span>
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
																	<span className="body-2-lg black">
																		{<Moment date={trip?.trip_date_time} format="hh:mm A" />}
																	</span>{' '}
																</p>
															</div>
															<div className="tsrow">
																<p className="tsrow">
																	<TimeIcon className="mr-xs" />
																	<span className="body-2-lg black">
																		+ {trip?.estimated_trip_time || 1} hrs
																	</span>
																</p>
															</div>
														</div>

														<div className="d-flex justify-between w-100 mb-xs">
															<div className="tsrow">
																<p className="tsrow">
																	<MapIcon className="mr-xs" />
																	<span className="p-md">{trip?.origin_terminal?.name}</span>{' '}
																</p>
															</div>
															<div className="tsrow">
																<p className="tsrow">
																	<MapIcon className="mr-xs" />
																	<span className="p-md">
																		{trip?.destination_terminal?.name}
																	</span>{' '}
																</p>
															</div>
														</div>
													</div>
												</View>

												<View
													className={`${styles('booking-form')} ${styles(
														'bordered--bottom'
													)} mb-sm pb-sm`}>
													<h4 className="body-2-lg black">Your Trip details</h4>
													<p className="body-2-lg mb-sm">
														Click
														<span className={`${styles('clickable')} black clickable brand-1`}>
															&nbsp;Here&nbsp;
														</span>
														to modify your trip selection
													</p>
												</View>

												<View
													className={`${styles('date--selector')} ${styles(
														'bordered--bottom'
													)} mb-sm pb-sm`}>
													<div className="tsrow">
														<p className="body-2-lg black">Selected travel date</p>
													</div>
													<div className="tsrow">
														<button type="button" className="action--btn pr-sm">
															<PreviousIcon />
														</button>
														<button type="button" className="action--btn">
															<NextIcon />
														</button>
													</div>
												</View>

												<View className={`tscol mb-sm pb-sm`}>
													<div className="d-flex booking-seat-row">
														<CircleIcon className="mt-y mr-md" />
														{/* Trip Details */}
														<div className="tscol">
															<div className="tsrow mb-1">
																<h2 className="p-lg font-500 black">
																	{<Moment date={trip?.trip_date_time} format="hh:mm A" />}
																	{location}
																</h2>
															</div>
															<div className="tsrow mb-1">
																<PIcon className="mr-xs" />
																<p className="body-2-sm black">{trip?.origin_terminal?.name}</p>
															</div>
															<div className="tsrow mb-1">
																<PIcon className="mr-xs" />
																<p className="body-2-sm black">
																	Premium - ₦{trip?.cost.toLocaleString()}
																</p>
															</div>
															<div className="tsrow mt-xs mb-1">
																{/* <div className="seat--badge">4 seat left, book now!</div> */}
																{trip?.available_seats > 0 ? (
																	trip?.available_seats > 5 ? (
																		<p className="body-sm-2 seat-badge seat-badge-success">
																			{trip?.available_seats} Seats Available
																		</p>
																	) : (
																		<p className="body-sm-2 seat-badge seat-badge-warning">
																			{trip?.available_seats} left, Book Now!
																		</p>
																	)
																) : (
																	<p className="body-sm-2 seat-badge seat-badge-danger">
																		Fully Booked
																	</p>
																)}
															</div>
														</div>
														{/* Trip Details */}
														{/* Seats Selection */}
														<div className={` tscol mb-sm ${styles('boooking-seat-container')}`}>
															<View className={`${styles('booking-bus')}`}>
																{trip?.seat_arrangement.length > 0 &&
																	trip?.seat_arrangement.map((triprow) => {
																		return (
																			<View className={`${styles('booking-row')}`}>
																				{triprow.map(({ seatNumber, available }, tripIndex) => {
																					return available === 1 ? (
																						<Tooltip
																							placement="topLeft"
																							title="This Seat is already booked">
																							<div
																								role="click"
																								key={tripIndex}
																								className={`${styles('booking-seat')} ${
																									available === 1 ? styles('reserved') : ''
																								}  ${
																									currentSeat === seatNumber
																										? styles('selected')
																										: ''
																								}  `}></div>
																						</Tooltip>
																					) : (
																						<div
																							role="click"
																							key={tripIndex}
																							onClick={handleSeatSelection.bind(this, seatNumber)}
																							className={`${styles('booking-seat')} ${
																								available === 1 ? styles('reserved') : ''
																							}  ${
																								currentSeat === seatNumber ? styles('selected') : ''
																							}  `}></div>
																					);
																				})}
																			</View>
																		);
																	})}
																<View className={`${styles('booking-row')}`}>
																	<div
																		className={`${styles('booking-seat')} ${styles(
																			'selected'
																		)}`}></div>
																	<div className={`${styles('booking-seat')}`}></div>
																</View>
															</View>

															<div className="d-flex mt-sm">
																<p className="d-flex align-center body-2-sm mr-xs">
																	<div
																		className={`${styles('booking-seat')}  ${styles(
																			'selected'
																		)} mr-xs`}></div>
																	Selected Seats
																</p>
																<p className="d-flex align-center body-2-sm mr-xs">
																	<div
																		className={`${styles('booking-seat')} 
															 mr-xs`}></div>
																	Available Seats
																</p>
																<p className="d-flex align-center body-2-sm mr-xs">
																	<div
																		className={`${styles('booking-seat')} 
															${styles('reserved')} mr-xs`}></div>
																	Reserved Seats
																</p>
															</div>
														</div>
														{/* Seats Selection */}
													</div>
												</View>

												<View
													className={`${styles('booking-form')} ${styles(
														'bordered--bottom'
													)} mb-sm pb-sm`}>
													<p className="body-2-lg black mb-1">Personal Details</p>
													<p className="mb-sm">
														You can also click here to sign in if you already have an account
													</p>

													<div className="tsrow  justify-between mb-sm booking-form-row">
														<div className="tscol-2 tscol">
															<input
																type="text"
																name="first_name"
																id="first_name"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.first_name}
																placeholder="First Name"
															/>
															<p className="error">
																{errors.first_name && touched.first_name && errors.first_name}
															</p>
														</div>
														<div className="tscol-2 tscol">
															<input
																type="text"
																name="last_name"
																id="last_name"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.last_name}
																placeholder="Last Name"
															/>
															<p className="error">
																{errors.last_name && touched.last_name && errors.last_name}
															</p>
														</div>
													</div>

													<div className="tsrow  justify-between mb-sm booking-form-row">
														<div className="tscol-2 tscol">
															<input
																type="email"
																name="email"
																id="email"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.email}
																placeholder="Email Address"
															/>
															<p className="error">
																{errors.email && touched.email && errors.email}
															</p>
														</div>
														<div className="tscol-2 tscol">
															<input
																type="number"
																name="phone"
																id="phone"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.phone}
																placeholder="Phone Number"
															/>
															<p className="error">
																{errors.phone && touched.phone && errors.phone}
															</p>
														</div>
													</div>

													<div className="tsrow align-items-center mb-xs">
														<input type="checkbox"></input>
														<p className="body-2-lg black ml-xs">
															I’m making this booking on behalf of someone else
														</p>
													</div>
												</View>

												<View
													className={`${styles('booking-form')} ${styles(
														'bordered--bottom'
													)} mb-sm pb-sm`}>
													<p className="body-2-lg black mb-1">Additional Details</p>

													<div className="tsrow  justify-between mb-sm booking-form-row">
														<div className="tscol-2 tscol">
															<input
																type="text"
																name="address"
																id="address"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.address}
																placeholder="Address"
															/>
															<p className="error">
																{errors.address && touched.address && errors.address}
															</p>
														</div>
														<div className="tscol-2 tscol">
															<input
																type="text"
																name="next_of_kin_name"
																id="next_of_kin_name"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.next_of_kin_name}
																placeholder="Next of Kin Name"
															/>
															<p className="error">
																{errors.next_of_kin_name &&
																	touched.next_of_kin_name &&
																	errors.next_of_kin_name}
															</p>
														</div>
													</div>

													<div className="tsrow  justify-between mb-sm booking-form-row">
														<div className="tscol-2 tscol">
															<input
																type="number"
																name="next_of_kin_phone"
																id="next_of_kin_phone"
																onChange={handleChange}
																onBlur={handleBlur}
																value={values.next_of_kin_phone}
																placeholder="Next of Kin Phone Number"
															/>
															<p className="error">
																{errors.next_of_kin_phone &&
																	touched.next_of_kin_phone &&
																	errors.next_of_kin_phone}
															</p>
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
													<div className="tsrow  justify-between mb-sm booking-form-row">
														<div className="tscol-2 tscol">
															<p className="mb-1 body-2-lg "> Adults</p>
															<select>
																<option>1</option>
															</select>
														</div>
														<div className="tscol-2 tscol">
															<p className="mb-1 body-2-lg mb-xs">Children</p>
															<select>
																<option>1</option>
															</select>
														</div>
													</div>

													<div className="tsrow  justify-between mb-sm booking-form-row">
														<div className="tscol-2 tscol">
															<p className="mb-1 body-2-lg ">Extra Luggage(kg)</p>
															<select onChange={handleExtraLuggage}>
																<option value="0">None</option>
																<option value="1">1</option>
																<option value="2">2</option>
																<option value="3">3</option>
															</select>
														</div>
														<div className="tscol-2 tscol">
															<p className="body-2-lg  brand-1 font-500 brand-2">
																+{extra.toLocaleString()}
															</p>
														</div>
													</div>

													{trip?.allows_pickup === 'yes' && (
														<div className="tsrow align-items-center mb-xs booking-form-row">
															<input onChange={handlePickupService} type="checkbox"></input>
															<p className="body-2-lg black ml-xs">Pickup Service</p>
														</div>
													)}

													<div className="tsrow  justify-between mb-sm booking-form-row">
														{/* <div className="tscol-2 tscol">
															<p className="mb-1 body-2-lg ">Preference</p>
															<select>
																<option>Departure only</option>
															</select>
														</div> */}

														{pickup?.flag === true && (
															<div className="tscol-2 tscol">
																<p className="mb-1 body-2-lg mb-xs">
																	Select your prefered pickup location
																</p>
																<select onChange={handlePickupLocation}>
																	<option value="berger">Berger Bustop</option>
																	<option value="lekki">Lekki</option>
																</select>
															</div>
														)}
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
															<p className="body-2-lg"> Single Ticket </p>
															<p className="body-2-lg">₦{trip?.cost.toLocaleString()}</p>
														</div>

														{pickup?.flag && (
															<div className="tsrow justify-between mb-xs">
																<p className="body-2-lg"> Pickup Service</p>
																<p className="body-2-lg">₦{pickup?.cost?.toLocaleString()}</p>
															</div>
														)}

														{extra > 0 && (
															<div className="tsrow justify-between mb-xs">
																<p className="body-2-lg"> Extra Luggage </p>
																<p className="body-2-lg">₦{extra?.toLocaleString()}</p>
															</div>
														)}
													</div>

													<div className="tsrow justify-between mt-sm mb-xs">
														<p className="sub-md"> Total Cost </p>
														<p className="sub-md">₦ {totalCost?.toLocaleString()}</p>
														{/* <p className="sub-md">₦ {totalCost.toLocaleString()}</p> */}
													</div>
													<div className="tsrow justify-end mb-xs">
														<p className="body-2-sm grey-dark">(Includes taxes and fees)</p>
													</div>

													<div className="tsrow justify-start mb-xs">
														<p className="body-2-sm grey-dark">
															In some cases, additional local taxes and fees may be due at the
															counter. Please see the reservation terms and conditions for more
															information.
														</p>
													</div>

													<div className="tsrow justify-start  mb-xs">
														{currentSeat === 0 ? (
															<Tooltip placement="topLeft" title="Please Select a seat">
																<button type="button" className="link link-brand-2 w-100 black">
																	PROCEED TO PAYMENT
																</button>
															</Tooltip>
														) : (
															<button type="submit" className="link link-brand-2 w-100 black">
																{isSubmitting ? <Spin /> : 'PROCEED TO PAYMENT'}
															</button>
														)}
													</div>
												</View>
												<View
													className={`tsCol mt-lg ${styles('booking-aside-item')} ${styles(
														'booking--refund'
													)}`}>
													<p className="body-2-sm black font-600 mb-xs">Refund Policy</p>
													<p className="body-2-sm black">
														We use your personal data to process services that you have applied for,
														to contact you with newsletters and deal offers, and for personalised
														content and ads. You consent to our Data Policy if you click the above.
														You can withdraw consent and contact our Data Protection Officer at any
														time.
													</p>
												</View>
											</View>
										</View>
									</View>
								</form>
							)}
						</Formik>
					</Fragment>
				) : (
					<View
						style={{
							paddingTop: '7rem',
							paddingLeft: '14rem'
						}}>
						<h2>No Details for this Trip</h2>
					</View>
				)}
			</View>

			<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	trips: state.trips,
	login: state.login
});

const mapDispatchToProps = {
	getTrip,
	bookTrip,
	bookTripWithPickup,
	initiatePayment,
	getAuthenticatedCustomer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookTrip));

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const BookingSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	first_name: Yup.string().required('Required'),
	last_name: Yup.string().required('Required'),
	phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
	address: Yup.string().required('Required'),
	next_of_kin_name: Yup.string().required('Required'),
	next_of_kin_phone: Yup.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Required')
});
