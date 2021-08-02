/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

export function PreviousIcon({ width = '21', height = '24', color = 'black', className }) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 21 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0)">
				<path
					opacity="0.4"
					d="M20.4326 10.125H6.28106V13.875H20.4326C20.5818 13.875 20.7249 13.8157 20.8304 13.7102C20.9359 13.6048 20.9951 13.4617 20.9951 13.3125V10.6875C20.9951 10.5383 20.9359 10.3952 20.8304 10.2898C20.7249 10.1843 20.5818 10.125 20.4326 10.125Z"
					fill="#240555"
				/>
				<path
					d="M4.35938 7.17187L0.325313 11.2073C0.11435 11.4183 -0.00416565 11.7045 -0.00416565 12.0028C-0.00416565 12.3012 0.11435 12.5873 0.325313 12.7983L4.35938 16.8305C5.06813 17.5392 6.28125 17.0372 6.28125 16.0336V7.96875C6.28125 6.96468 5.06766 6.46265 4.35938 7.17187Z"
					fill="#240555"
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="21" height="24" fill="white" transform="matrix(-1 0 0 1 21 0)" />
				</clipPath>
			</defs>
		</svg>
	);
}
