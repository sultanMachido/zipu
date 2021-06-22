import React from 'react'

export function PIcon({width = '14', height = '14', color = '#FFBC00', className}) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity="0.4"
				d="M8.5 6C8.49926 6.26499 8.39366 6.51891 8.20629 6.70629C8.01891 6.89366 7.76499 6.99926 7.5 7H6V5H7.5C7.76499 5.00074 8.01891 5.10634 8.20629 5.29371C8.39366 5.48109 8.49926 5.73501 8.5 6ZM14 1.5V12.5C14 12.8978 13.842 13.2794 13.5607 13.5607C13.2794 13.842 12.8978 14 12.5 14H1.5C1.10218 14 0.720644 13.842 0.43934 13.5607C0.158035 13.2794 0 12.8978 0 12.5L0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H12.5C12.8978 0 13.2794 0.158035 13.5607 0.43934C13.842 0.720644 14 1.10218 14 1.5ZM10.5 6C10.4988 5.20473 10.1823 4.44239 9.61995 3.88005C9.05761 3.31771 8.29527 3.00124 7.5 3H4.5C4.36739 3 4.24021 3.05268 4.14645 3.14645C4.05268 3.24021 4 3.36739 4 3.5V10.5C4 10.6326 4.05268 10.7598 4.14645 10.8536C4.24021 10.9473 4.36739 11 4.5 11H5.5C5.63261 11 5.75979 10.9473 5.85355 10.8536C5.94732 10.7598 6 10.6326 6 10.5V9H7.5C8.29527 8.99876 9.05761 8.68229 9.61995 8.11995C10.1823 7.55761 10.4988 6.79527 10.5 6Z"
				fill={color}
			/>
			<path
				d="M7.5 3H4.5C4.36739 3 4.24021 3.05268 4.14645 3.14645C4.05268 3.24021 4 3.36739 4 3.5V10.5C4 10.6326 4.05268 10.7598 4.14645 10.8536C4.24021 10.9473 4.36739 11 4.5 11H5.5C5.63261 11 5.75979 10.9473 5.85355 10.8536C5.94732 10.7598 6 10.6326 6 10.5V9H7.5C8.29565 9 9.05871 8.68393 9.62132 8.12132C10.1839 7.55871 10.5 6.79565 10.5 6C10.5 5.20435 10.1839 4.44129 9.62132 3.87868C9.05871 3.31607 8.29565 3 7.5 3ZM7.5 7H6V5H7.5C7.76522 5 8.01957 5.10536 8.20711 5.29289C8.39464 5.48043 8.5 5.73478 8.5 6C8.5 6.26522 8.39464 6.51957 8.20711 6.70711C8.01957 6.89464 7.76522 7 7.5 7Z"
				fill={color}
			/>
		</svg>
	);
}