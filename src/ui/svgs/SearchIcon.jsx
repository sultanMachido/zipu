export const SearchIcon = ({ size = '24', color = '#19194A' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.19591 21.0768L11.5724 13.7002C12.7331 14.5966 14.1732 15.15 15.75 15.15C19.5535 15.15 22.65 12.0535 22.65 8.25C22.65 4.44645 19.5535 1.35 15.75 1.35C11.9465 1.35 8.85 4.44645 8.85 8.25C8.85 9.82681 9.40345 11.2669 10.2998 12.4276L2.92909 19.7982C2.87074 19.8566 2.87048 19.9511 2.92851 20.0098L3.98319 21.0762C4.01127 21.1046 4.0495 21.1206 4.08943 21.1207C4.12936 21.1208 4.16768 21.105 4.19591 21.0768ZM15.75 3.15C18.5734 3.15 20.85 5.42659 20.85 8.25C20.85 11.0734 18.5734 13.35 15.75 13.35C12.9266 13.35 10.65 11.0734 10.65 8.25C10.65 5.42659 12.9266 3.15 15.75 3.15Z"
				fill={color}
				stroke={color}
				strokeWidth="0.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
