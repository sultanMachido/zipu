import React from 'react';

export function AirConditionIcon({ width = '18', height = '16', color = '#FFBC00', className }) {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			fill="none"
			viewBox="0 0 18 16"
			xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.4"
				d="M6.75 13.25C6.75 13.5815 6.6183 13.8995 6.38388 14.1339C6.14946 14.3683 5.83152 14.5 5.5 14.5H5.30562C4.68062 14.5 4.11219 14.0663 4.01562 13.4497C3.92562 12.8744 4.23187 12.3803 4.69812 12.1538C4.87719 12.0669 5 11.8959 5 11.6966V11.1459C4.99987 11.0656 4.98053 10.9866 4.94359 10.9153C4.90665 10.844 4.85318 10.7826 4.78766 10.7362C4.72213 10.6897 4.64646 10.6597 4.56695 10.6485C4.48744 10.6373 4.40641 10.6453 4.33063 10.6719C3.73925 10.8792 3.23695 11.2832 2.90773 11.8164C2.5785 12.3496 2.44229 12.9797 2.52187 13.6012C2.69562 14.9944 3.95469 16 5.35875 16H5.5C6.22935 16 6.92882 15.7103 7.44454 15.1945C7.96027 14.6788 8.25 13.9793 8.25 13.25V8H6.75V13.25ZM13.6694 9.67188C13.5936 9.64534 13.5126 9.63733 13.4331 9.64852C13.3535 9.6597 13.2779 9.68975 13.2123 9.73615C13.1468 9.78256 13.0934 9.84397 13.0564 9.91526C13.0195 9.98655 13.0001 10.0656 13 10.1459V10.6966C13 10.8959 13.1228 11.0669 13.3019 11.1538C13.7681 11.3803 14.0744 11.8744 13.9844 12.4497C13.8878 13.0663 13.3188 13.5 12.6947 13.5H12.5C12.1685 13.5 11.8505 13.3683 11.6161 13.1339C11.3817 12.8995 11.25 12.5815 11.25 12.25V8H9.75V12.25C9.75 12.9793 10.0397 13.6788 10.5555 14.1945C11.0712 14.7103 11.7707 15 12.5 15H12.6416C14.0453 15 15.3044 13.9944 15.4781 12.6012C15.5577 11.9797 15.4215 11.3496 15.0923 10.8164C14.763 10.2832 14.2608 9.87917 13.6694 9.67188ZM2 4V5H16V4H2Z"
				fill={color}
			/>
			<path
				d="M17 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H17C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0V0ZM16 5H2V4H16V5Z"
				fill={color}
			/>
		</svg>
	);
}