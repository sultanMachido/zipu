/* eslint-disable no-unused-vars */
import './button.scss';

import React from 'react';

function CustomButton({
	text,
	type,
	disabled,
	onClick,
	variant,
	loading,
	loadingText,
	className,
	...props
}) {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={`button ${variant === 'outlined' ? 'button__outlined' : ''}`}
			{...props}>
			{loading ? loadingText : text}
			{loading && (
				<span className="button__loader-wrapper">
					<h6>Loading</h6>
				</span>
			)}
		</button>
	);
}

export default CustomButton;
