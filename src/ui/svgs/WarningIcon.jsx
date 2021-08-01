export const WarningIcon = ({ size = '82', color = '#19194A', outerColor = '#E3EAED' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 82 81"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<ellipse cx="41" cy="40.5" rx="41" ry="40.5" fill={outerColor} />
			<path d="M39.0832 36.714H42.9165V46.1805H39.0832V36.714Z" fill={color} />
			<path
				d="M40.9998 48.0738C39.9413 48.0738 39.0832 48.9214 39.0832 49.9671C39.0832 51.0127 39.9413 51.8604 40.9998 51.8604C42.0584 51.8604 42.9165 51.0127 42.9165 49.9671C42.9165 48.9214 42.0584 48.0738 40.9998 48.0738Z"
				fill={color}
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M23.2408 57.5441C21.7644 57.5441 20.8423 55.9644 21.5821 54.7022L39.3411 24.4017C40.0793 23.1421 41.9203 23.1421 42.6585 24.4017L60.4175 54.7022C61.1573 55.9644 60.2352 57.5441 58.7588 57.5441H23.2408ZM55.4344 53.7575L40.9998 29.1291L26.5652 53.7575H55.4344Z"
				fill={color}
			/>
			<path d="M39.0832 48.0738H42.9165V51.8604H39.0832V48.0738Z" fill={color} />
		</svg>
	);
};