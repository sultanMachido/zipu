import classnames from 'classnames/bind';
import React from 'react';
import { Facebook } from 'react-spinners-css';

import style from './index.module.scss';

let styles = classnames.bind(style);

export const FormButton = ({ theme, children, className, loading, ...props }) => {
	return (
		<button
			className={styles({
				[`button-theme-default`]: !theme,
				[`button-theme-${theme}`]: theme,
				[`${className}`]: className
			})}
			{...props}>
			{loading ? <Facebook style={{ width: '45px', height: '45px' }} /> : ''}
			{/* {children} */}
		</button>
	);
};
