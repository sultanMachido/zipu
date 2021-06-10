import React from 'react';
import {StarIcon} from '../SVGs';

export default function StarRating({
	rating = 0,
	height,
	width,
	rateColor = '#FFBC00',
	emptyColor = 'lightgray',
	className = 'star',
	containerClassName = 'star-container'
}) {
	return (
		<div className={containerClassName}>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<StarIcon
						className={className}
						height={height}
						width={width}
						color={ratingValue <= rating ? rateColor : emptyColor}
					/>
				);
			})}
		</div>
	);
}
