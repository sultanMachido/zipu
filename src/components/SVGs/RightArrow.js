import React from 'react';

export function RightArrow({width = '110', height = '13', color = '#323D44', className}) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 110 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 6H109M109 6L101 1M109 6L101 12" stroke={color} />
		</svg>
	);
}
