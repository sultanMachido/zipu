export const StopwatchIcon = ({ size = '19', color = '#240555' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 17 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 3C3.589 3 0 6.589 0 11C0 15.411 3.589 19 8 19C12.411 19 16 15.411 16 11C16 6.589 12.411 3 8 3ZM8 17C4.691 17 2 14.309 2 11C2 7.691 4.691 5 8 5C11.309 5 14 7.691 14 11C14 14.309 11.309 17 8 17Z"
				fill={color}
			/>
			<path d="M7 7H9V12H7V7ZM5 0H11V2H5V0Z" fill={color} />
			<path
				d="M15.2927 5.70696L13.293 3.70723L14.7073 2.29304L16.7069 4.29277L15.2927 5.70696Z"
				fill={color}
			/>
		</svg>
	);
};
