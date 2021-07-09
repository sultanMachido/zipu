import classnames from 'classnames/bind';
import React from 'react';

import style from './index.module.scss';

let styles = classnames.bind(style);

export const FormButton = ({ theme, children, className, ...props }) => {
	return (
		<button
			className={styles({
				[`button-theme-default`]: !theme,
				[`button-theme-${theme}`]: theme,
				[`${className}`]: className
			})}
			{...props}>
			{children}
		</button>
	);
};
