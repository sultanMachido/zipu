import './styles.scss';

import Gigm from 'assets/img/gigm.png';
import Trip from 'assets/img/trip.png';
import { ReactComponent as AC } from 'assets/svg/AC.svg';
import { ReactComponent as Arrow } from 'assets/svg/arrow.svg';
import { ReactComponent as Bag } from 'assets/svg/bags.svg';
import { ReactComponent as Car } from 'assets/svg/car.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';
import { ReactComponent as Like } from 'assets/svg/Like.svg';
import { ReactComponent as Park } from 'assets/svg/park.svg';
import { ReactComponent as Star } from 'assets/svg/star.svg';
import React from 'react';

const VehicleSearchItem = () => {
	return (
		<section className="VehicleSearchItemWrapper tscol">
			<div className="d-flex justify-between align-center vsPad">
				<div className="vehicleSearchFirm phone-hide">
					<figure>
						<img src={Gigm} alt="car" />
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
							<h6 className="p-md">09:40 AM</h6>
							<p className="body-2-sm">
								<Park className="pr-xs" />
								Ojota moto park, Lagos
							</p>
						</div>
						<Arrow className="trip-arrow" />
						<div className="tscol">
							<h6 className="p-md d-flex justify-between">
								12:40 PM <span className="body-2-sm greyDark">4 Hours</span>
							</h6>
							<p className="body-2-sm">
								<Park className="pr-xs" />
								New Garage Park, Akure
							</p>
						</div>
					</div>
					<div className="d-flex justify-between align-center parkDetails">
						<div className="tscol">
							<h6 className="p-md">09:40 AM</h6>
							<p className="body-2-sm">
								<Park className="pr-xs" />
								Ojota moto park, Lagos
							</p>
						</div>
						<Arrow className="trip-arrow" />

						<div className="tscol">
							<h6 className="p-md d-flex justify-between">
								12:40 PM <span className="body-2-sm greyDark">4 Hours</span>
							</h6>
							<p className="body-2-sm">
								<Park className="pr-xs" />
								New Garage Park, Akure
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
							<h2 className="sub-lg black mb-xs">₦ 5,500</h2>
							<p className="body-sm-2 greyDark">Gig Jet Plus</p>
							<p className="body-sm-2 danger badgeItem">Fully Booked</p>
						</div>
						<div className="vsBtnContainer">
							<button className="btn btn-brand-2 mb-xs">BOOK TRIP</button>
							<button className="btn btn-white mb-xs">
								<Like className="mr-xs" /> SAVE
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VehicleSearchItem;
