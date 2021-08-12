import './styles.scss';

import React from 'react';
import StarRating from 'ui/components/StarRating';

function TranscoHeader({ transcoInfo, rating, imgUrl, companyName, reviewNumber }) {
	return (
		<div className="header-wrapper">
			<div className="first-column">
				<div className="image-wrapper">
					<img src={transcoInfo?.picture ? transcoInfo?.picture : imgUrl} alt="companyLogo" />
				</div>
				<h2 className="mt-4 h3-lg black">{transcoInfo?.name}</h2>
			</div>
			<div className="second-column">
				<div className="rate-wrapper">
					<h2>{rating}.0</h2>
					<StarRating containerClassName="star-container" className="star" rating={rating} />
				</div>
				<small>
					<span>Based on</span> {reviewNumber} reviews
				</small>
			</div>
		</div>
	);
}

export default TranscoHeader;
