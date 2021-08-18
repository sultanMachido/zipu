import './styles.scss';

import { message, Spin } from 'antd';
import { Slider } from 'antd';
// import Gigm from 'assets/img/gigm.png';
// import Trip from 'assets/img/trip.png';
import { ReactComponent as AC } from 'assets/svg/AC.svg';
import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';
import { ReactComponent as Bag } from 'assets/svg/bags.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';
import { ReactComponent as Like } from 'assets/svg/Like.svg';
import { ReactComponent as Park } from 'assets/svg/park.svg';
import { ReactComponent as Star } from 'assets/svg/star.svg';
import React, { useState } from 'react';
import { Fragment } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { saveTrip } from 'redux/actions/trips/trips.actions';

import trips from '../../trips';

const VehicleSearchItem = ({ trip, bordered, login: { isAuthenticated }, ...props }) => {
	const [loading, setLoading] = useState(false);

	const saveTrip = async () => {
		if (isAuthenticated) {
			setLoading(true);
			let request = await props.saveTrip(trip?.id);
			if (request.status === true) {
				message.success('Trip Saved Successfully');
			} else {
				message.error(request.message);
			}
			setLoading(false);
		} else {
			props.history.push('/customer/login', { from: props.history.location.pathname });
		}
	};

	const handleBooking = () => {
		props.history.push(`/customer/trips/book/${trip?.id}`);
	};

	return (
		<section className={`VehicleSearchItemWrapper tscol ${bordered === true ? 'vsbordered' : ''}`}>
			<div className="d-flex justify-between align-center vsPad">
				<div className="vehicleSearchFirm phone-hide">
					<figure>
						<img src={trip?.transco?.picture} alt="car" />
					</figure>
					<p className="body-2-sm black mb-xs">
						5.0 <span className="brand-2 cursor">Based on 2000 reviews</span>
					</p>
					<div className="tsrow">
						<Star />
						<Star />
						<Star />
						<Star />
					</div>
				</div>
				<div className="vehicleSearchInfo tscol">
					<div className="d-flex justify-between align-center parkDetails mb-sm">
						<div className="tscol">
							<h6 className="p-md">{<Moment date={trip?.trip_date_time} format="hh:mm A" />}</h6>

							<p className="body-2-sm">
								<Park className="pr-xs" />
								{trip?.origin_terminal?.name}
							</p>
						</div>
						<Arrow className="trip-arrow" />
						<div className="tscol">
							<h6 className="p-md d-flex justify-between">
								{<Moment date={trip?.trip_date_time} format="hh:mm A" />}{' '}
								<span className="body-2-sm greyDark">
									{trip?.estimated_trip_time && trip?.estimated_trip_time + ' Hours'}
								</span>
							</h6>
							<p className="body-2-sm">
								<Park className="pr-xs" />
								{trip?.destination_terminal?.name}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex justify-between vsPad">
				<ul className=" tscol vehicleSearchFirm phone-hide">
					<li className="body-sm-2 greyDark mb-sm">
						<Bag /> 40 Seater
					</li>
					<li className="body-sm-2 greyDark mb-sm">
						<AC /> AC Available
					</li>
					<li className="body-sm-2 greyDark mb-sm">
						<Check /> Theft Insurance
					</li>
				</ul>
				<div className="d-flex vehicleSearchInfo">
					<ul className="tscol phone-hide">
						<li className="body-sm-2 greyDark mb-sm">
							<Check /> Cancellation Refund
						</li>

						<li className="body-sm-2 greyDark mb-sm">
							<Check /> VIP
						</li>
						<li className="body-sm-2 greyDark mb-sm">
							<Check /> Return Trip available
						</li>
					</ul>
					<div className="d-flex vehicleSearchCta">
						<div className="tscol align-end vehicleSearchCta--Pricing">
							<h2 className="sub-lg black">₦ {trip?.cost}</h2>
							<p className="body-sm-2 greyDark">{trip?.vehicle?.vehicle_make}</p>
							{trips?.available_seats > 0 ? (
								trips?.available_seats > 5 ? (
									<p className="body-sm-2 danger badgeItem badgeGreen">
										{trips?.available_seats} Seats Available
									</p>
								) : (
									<p className="body-sm-2 danger badgeItem badgeYellow">
										{trips?.available_seats} left, Book Now!
									</p>
								)
							) : (
								<p className="body-sm-2 danger badgeItem">Fully Booked</p>
							)}
						</div>
						<div className="vsBtnContainer">
							<button onClick={handleBooking} className="btn btn-brand-2 mb-xs">
								BOOK TRIP
							</button>
							<button onClick={saveTrip} className="btn btn-white mb-xs">
								{loading ? (
									<Spin size="small" />
								) : (
									<Fragment>
										<Like className="mr-xs" /> SAVE{' '}
									</Fragment>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	login: state.login
});

const mapDispatchToProps = {
	saveTrip
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VehicleSearchItem));
