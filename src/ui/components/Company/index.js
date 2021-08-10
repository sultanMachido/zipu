/* eslint-disable no-unused-vars */
import './styles.scss';

import React from 'react';

import StarRating from '../StarRating';

export default function Company({ companyInfo, className }) {
	const { imgUrl, tripsCompleted, rating, reviewCount } = companyInfo;
	return (
		<div className={'company-wrapper ' + className}>
			<div className="image-container">
				<img src={imgUrl} alt="companyLogo" />
			</div>
			{/* <p>{tripsCompleted}</p> */}
			<p className="rating">{rating}.0</p>
			<div className="rating-review">
				<small>Based on {reviewCount} reviews</small>
			</div>
			<StarRating rating={rating} className="star" />
		</div>
	);
}
