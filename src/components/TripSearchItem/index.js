import React,{Fragment,useState} from 'react';
import './styles.scss';
import Trip from 'assets/img/trip.png';
import Gigm from 'assets/img/gigm.png';
import {ReactComponent as Car} from 'assets/svg/car.svg';
import {ReactComponent as Star} from 'assets/svg/star.svg';
import { ReactComponent as Check } from 'assets/svg/check.svg';
import {ReactComponent as Like} from 'assets/svg/Like.svg';
import {ReactComponent as AC} from 'assets/svg/AC.svg';
import {ReactComponent as Bags} from 'assets/svg/bags.svg';
import {ReactComponent as Virus} from 'assets/svg/virus.svg';

import ViewReviewsModal from 'components/Modals/ViewReviewsModal';


const TripSearchItem = () => {
	const [showReview,setShowReview] = useState(false);

	const handleShow = () => {
		setShowReview(!showReview);
	}

	return (
		<Fragment>

		<div className="TripSearchItemWrapper tscol">
			<div className="d-flex tripSearchCar justify-between">
				<div className="tripSearchCarWrapper d-flex justify-between">
					<figure>
						<img src={Trip} alt="car" />
					</figure>
					<div className="tscol tripSearchDetails">
						<h3 className="mb-xs">Ford Focus </h3>
						<p className="body-sm-2 mb-xs greyDark">Economy</p>
						<ul className="d-flex justify-between">
							<li className="body-sm-2 greyDark">
								<Car /> 5 Seater Car
							</li>
							<li className="body-sm-2 greyDark">
								<Virus /> Automatic
							</li>
							<li className="body-sm-2 greyDark">
								<Bags /> 2 Suitcases
							</li>
							<li className="body-sm-2 greyDark">
								<AC /> AC Available
							</li>
						</ul>
					</div>
				</div>
				<div className="tsrow-sm tscol tripSearchPrice">
					<p className="body-sm-2 greyDark font-500">Price</p>
					<h2 className="sub-lg dark mb-xs">₦ 100,000 / day</h2>
					<p className="body-sm-2 greyDark font-500">Cancel up to 2 days to trip</p>
					<p className="body-sm-2 danger badgeItem font-500">Not Available</p>
				</div>
			</div>
			<div className="d-flex tripSearchFirm">
				<div className="d-flex tripSearchFirm__details">
					<div className="tscol tripSearchFirm__details-info">
						<figure>
							<img src={Gigm} alt="car" />
						</figure>
						<h6 className="p-sm black cursor" onClick={handleShow} >
							5.0 <span className="brand-2">Based on 2000 reviews</span>
						</h6>
						<div className="tsrow">
							<Star />
							<Star />
							<Star />
							<Star />
						</div>
					</div>

					<ul className="tscol  tripSearchFirm__details-info-2">
						<li className="body-sm-2 greyDark">
							<Check /> Theft Insurance
						</li>
						<li className="body-sm-2 greyDark">
							<Check /> Accident Insurance
						</li>
						<li className="body-sm-2 greyDark">
							<Check /> Cancellation Insurance
						</li>
					</ul>
				</div>
				<div className="tscol tripSearchFirm__cta">
					<button className="btn btn-brand-2 mb-xs">CHOOSE CAR</button>
					<button className="btn btn-white mb-xs"> <Like className="pr-xs" /> SAVE</button>
				</div>
			</div>
		</div>

		<ViewReviewsModal isModalVisible={showReview} handleCancel={handleShow} />
		</Fragment>
	);
};

export default TripSearchItem;
