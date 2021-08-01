export const SettingKeyIcon = ({ size = '32', color = '#FFBC00' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="16" cy="16" r="16" fill="#F6F8F9" />
			<g clipPath="url(#clip0)">
				<path
					opacity="0.4"
					d="M13.8594 15.6875H11.8281V13.8594C11.8281 11.7316 13.5598 10 15.6875 10C17.8152 10 19.5469 11.7316 19.5469 13.8594V15.6875H17.5156V13.8594C17.5156 13.3745 17.323 12.9095 16.9802 12.5667C16.6373 12.2239 16.1723 12.0312 15.6875 12.0312C15.2027 12.0312 14.7377 12.2239 14.3948 12.5667C14.052 12.9095 13.8594 13.3745 13.8594 13.8594V15.6875Z"
					fill={color}
				/>
				<path
					d="M21.375 16.9062V21.7812C21.375 22.1045 21.2466 22.4145 21.018 22.643C20.7895 22.8716 20.4795 23 20.1562 23H11.2188C10.8955 23 10.5855 22.8716 10.357 22.643C10.1284 22.4145 10 22.1045 10 21.7812V16.9062C10 16.583 10.1284 16.273 10.357 16.0445C10.5855 15.8159 10.8955 15.6875 11.2188 15.6875H20.1562C20.4795 15.6875 20.7895 15.8159 21.018 16.0445C21.2466 16.273 21.375 16.583 21.375 16.9062Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="11.375" height="13" fill="white" transform="translate(10 10)" />
				</clipPath>
			</defs>
		</svg>
	);
};
