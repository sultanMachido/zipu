import React from 'react';

export function DoorIcon({ width = '20', height = '16', color = '#FFBC00', className }) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 20 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0)">
				<path
					opacity="0.4"
					d="M0 14.5V15.5C0 15.6326 0.0526784 15.7598 0.146447 15.8535C0.240215 15.9473 0.367392 16 0.5 16H11V14H0.5C0.367392 14 0.240215 14.0527 0.146447 14.1464C0.0526784 14.2402 0 14.3674 0 14.5H0ZM19.5 14H17V3.54531C17 2.69344 16.3272 2 15.5 2H12V4H15V16H19.5C19.6326 16 19.7598 15.9473 19.8536 15.8535C19.9473 15.7598 20 15.6326 20 15.5V14.5C20 14.3674 19.9473 14.2402 19.8536 14.1464C19.7598 14.0527 19.6326 14 19.5 14Z"
					fill={color}
				/>
				<path
					d="M9.7575 0.031303L3.7575 1.58568C3.3125 1.7013 3 2.11568 3 2.5913V14.0001H11V1.03693C11 0.362553 10.3887 -0.132135 9.7575 0.031303ZM8.25 9.00005C7.83594 9.00005 7.5 8.55224 7.5 8.00005C7.5 7.44787 7.83594 7.00005 8.25 7.00005C8.66406 7.00005 9 7.44787 9 8.00005C9 8.55224 8.66406 9.00005 8.25 9.00005Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="20" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
