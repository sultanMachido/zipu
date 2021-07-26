import React from 'react';

export function StarIcon({ width = '22', height = '18', color = 'lightgray', className }) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 22 18"
			fill={color}
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0)">
				<path
					d="M9.99103 0.6258L7.69533 5.28049L2.559 6.02932C1.63791 6.16292 1.26877 7.29846 1.93674 7.94885L5.65275 11.57L4.77384 16.6852C4.61564 17.6098 5.58947 18.3024 6.4051 17.87L11 15.4547L15.5949 17.87C16.4106 18.2989 17.3844 17.6098 17.2262 16.6852L16.3473 11.57L20.0633 7.94885C20.7313 7.29846 20.3621 6.16292 19.441 6.02932L14.3047 5.28049L12.009 0.6258C11.5977 -0.203888 10.4059 -0.214435 9.99103 0.6258Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="20.25" height="18" fill="white" transform="translate(0.875)" />
				</clipPath>
			</defs>
		</svg>
	);
}
