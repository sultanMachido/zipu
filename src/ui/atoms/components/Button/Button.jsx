import classnames from 'classnames/bind';
import React from 'react';

import style from './index.module.scss';

let styles = classnames.bind(style);

const Button = ({ theme, children, loading, className, ...props }) => {
	return (
		<button
			className={styles({
				[`button-theme-default`]: !theme,
				[`button-theme-${theme}`]: theme,
				[`${className}`]: className
			})}
			{...props}>
			{loading ? <h6>Loading ..</h6> : children}
		</button>
	);
};

export default Button;

// import './button.scss';

// import React from 'react';

// function CustomButton({
// 	text,
// 	type,
// 	disabled,
// 	onClick,
// 	variant,
// 	loading,
// 	loadingText,
// 	className,
// 	...props
// }) {
// 	return (
// 		<button
// 			onClick={onClick}
// 			type={type}
// 			disabled={disabled}
// 			className={`button ${variant === 'outlined' ? 'button__outlined' : ''}`}
// 			{...props}>
// 			{loading ? loadingText : text}
// 			{loading && (
// 				<span className="button__loader-wrapper">
// 					<h6>Loading</h6>
// 				</span>
// 			)}
// 		</button>
// 	);
// }

// export default CustomButton;
