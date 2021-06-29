import classnames from 'classnames/bind';
import React from 'react';

import style from './index.module.scss';

let styles = classnames.bind(style);

export const FormButton = ({ theme, children, ...props }) => {
	return (
		<button
			className={styles({
				[`button-theme-default`]: !theme,
				[`button-theme-${theme}`]: theme
			})}
			{...props}>
			{children}
		</button>
	);
};
