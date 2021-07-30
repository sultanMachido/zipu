/* eslint-disable no-unused-vars */
// import StarRating from '../StarRating';
import './styles.scss';

import React from 'react';

// eslint-disable-next-line prettier/prettier
export default function Company({ companyInfo, className }) {
	// const { imgUrl, tripsCompleted, rating, reviewCount } = companyInfo;
	return (
		<div className={'company-wrapper ' + className}>
			{/* <div className="image-container">
				<img src={imgUrl} alt="companyLogo" />
			</div>
			<p>{tripsCompleted}</p>
			<div className="rating-review">
				<span>{rating}.0</span> <small>Based on {reviewCount} reviews</small>
			</div> */}
			{/* <StarRating rating={rating} className="star" /> */}
		</div>
	);
}
