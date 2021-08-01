export const SettingPersonIcon = ({ size = '33', color = '#FFBC00' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="16.5" cy="16" r="16" fill="#F6F8F9" />
			<g clipPath="url(#clip0)">
				<path
					opacity="0.4"
					d="M19.6433 12.5731C19.6433 13.2512 19.4422 13.9141 19.0655 14.4779C18.6887 15.0417 18.1533 15.4812 17.5268 15.7407C16.9003 16.0002 16.2109 16.0681 15.5458 15.9358C14.8807 15.8035 14.2698 15.477 13.7903 14.9975C13.3108 14.518 12.9843 13.9071 12.852 13.242C12.7197 12.5769 12.7876 11.8875 13.0471 11.261C13.3066 10.6346 13.7461 10.0991 14.3099 9.72235C14.8737 9.34561 15.5366 9.14453 16.2147 9.14453C17.124 9.14453 17.9961 9.50575 18.6391 10.1487C19.2821 10.7917 19.6433 11.6638 19.6433 12.5731Z"
					fill={color}
				/>
				<path
					d="M18.6148 16.8594H18.1675C17.5553 17.1417 16.8891 17.2879 16.2148 17.2879C15.5406 17.2879 14.8744 17.1417 14.2622 16.8594H13.8148C12.8601 16.8596 11.9446 17.2389 11.2695 17.914C10.5944 18.5891 10.2151 19.5047 10.2148 20.4594V21.5737C10.2148 21.9147 10.3503 22.2417 10.5914 22.4828C10.8325 22.7239 11.1596 22.8594 11.5006 22.8594H20.9291C21.2701 22.8594 21.5971 22.7239 21.8383 22.4828C22.0794 22.2417 22.2148 21.9147 22.2148 21.5737V20.4594C22.2146 19.5047 21.8353 18.5891 21.1602 17.914C20.4851 17.2389 19.5696 16.8596 18.6148 16.8594Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="12" height="13.7143" fill="white" transform="translate(10.2148 9.14453)" />
				</clipPath>
			</defs>
		</svg>
	);
};
