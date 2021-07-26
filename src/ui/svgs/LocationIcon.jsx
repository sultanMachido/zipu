import React from 'react';

export function LocationIcon({ width = '14', height = '18', color = '#FFBC00', className }) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 14 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.4"
				d="M6.75 0C3.02344 0 0 3.02344 0 6.75C0 9.47145 0.949219 10.2305 6.05637 17.6368C6.13401 17.7489 6.23768 17.8406 6.35848 17.9038C6.47928 17.9671 6.61363 18.0002 6.75 18.0002C6.88637 18.0002 7.02072 17.9671 7.14152 17.9038C7.26232 17.8406 7.36599 17.7489 7.44363 17.6368C12.5508 10.2305 13.5 9.47145 13.5 6.75C13.5 3.02344 10.4766 0 6.75 0ZM6.75 10.125C6.08249 10.125 5.42997 9.92706 4.87495 9.55621C4.31993 9.18536 3.88735 8.65826 3.63191 8.04156C3.37646 7.42486 3.30962 6.74626 3.43985 6.09157C3.57007 5.43688 3.89151 4.83552 4.36351 4.36351C4.83552 3.89151 5.43688 3.57007 6.09157 3.43985C6.74626 3.30962 7.42486 3.37646 8.04156 3.63191C8.65826 3.88735 9.18536 4.31993 9.55621 4.87495C9.92706 5.42997 10.125 6.08249 10.125 6.75C10.125 7.64511 9.76942 8.50355 9.13649 9.13649C8.50355 9.76942 7.64511 10.125 6.75 10.125Z"
				fill={color}
			/>
			<path
				d="M6.75 9C6.30499 9 5.86998 8.86804 5.49997 8.62081C5.12996 8.37357 4.84157 8.02217 4.67127 7.61104C4.50097 7.19991 4.45642 6.74751 4.54323 6.31105C4.63005 5.87459 4.84434 5.47368 5.15901 5.15901C5.47368 4.84434 5.87459 4.63005 6.31105 4.54323C6.74751 4.45642 7.19991 4.50097 7.61104 4.67127C8.02217 4.84157 8.37357 5.12996 8.62081 5.49997C8.86804 5.86998 9 6.30499 9 6.75C9 7.34674 8.76295 7.91903 8.34099 8.34099C7.91903 8.76295 7.34674 9 6.75 9Z"
				fill={color}
			/>
		</svg>
	);
}
