/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';

export function NextIcon({ width = '21', height = '24', color = 'black', className }) {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox="0 0 21 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0)">
				<path
					opacity="0.4"
					d="M0.567383 10.125H14.7189V13.875H0.567383C0.418199 13.875 0.275124 13.8157 0.169635 13.7102C0.064146 13.6048 0.00488281 13.4617 0.00488281 13.3125V10.6875C0.00488281 10.5383 0.064146 10.3952 0.169635 10.2898C0.275124 10.1843 0.418199 10.125 0.567383 10.125Z"
					fill="#240555"
				/>
				<path
					d="M16.6406 7.17187L20.6747 11.2073C20.8856 11.4183 21.0042 11.7045 21.0042 12.0028C21.0042 12.3012 20.8856 12.5873 20.6747 12.7983L16.6406 16.8305C15.9319 17.5392 14.7188 17.0372 14.7188 16.0336V7.96875C14.7188 6.96468 15.9323 6.46265 16.6406 7.17187Z"
					fill="#240555"
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="21" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
