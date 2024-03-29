import React from 'react';

export function LocationIcon({ size = '18', color = '#19194A' }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 14 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7Z"
				fill={color}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 7C0 12.25 7 18 7 18C7 18 14 12.25 14 7C14 3.13 10.87 0 7 0C3.13 0 0 3.13 0 7ZM2 7C2 4.23457 4.23457 2 7 2C9.76543 2 12 4.23457 12 7C12 8.8607 10.6843 11.1296 8.96544 13.1861C8.27139 14.0165 7.57324 14.7402 7 15.2974C6.42676 14.7402 5.72861 14.0165 5.03456 13.1861C3.31569 11.1296 2 8.8607 2 7Z"
				fill={color}
			/>
		</svg>
	);
}
