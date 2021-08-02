/* eslint-disable no-unused-vars */
import React from 'react';

export function CircleIcon({ width = '16', height = '16', color = '#FFBC00', className }) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="8" r="8" fill="#6FCF97" />
		</svg>
	);
}
