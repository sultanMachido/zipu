import classnames from 'classnames/bind';
import React from 'react';

import style from './index.module.scss';

let styles = classnames.bind(style);

const variants = {
	p: 'p',
	span: 'span',
	small: 'small',
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	a: 'a'
};

export const bodyVariants = {
	div: 'div',
	section: 'section'
};

export const Text = ({ align, color, fontWeight, variant, className, children, ...props }) => {
	const Component = variant ? variants[variant] : 'p';

	return (
		<Component
			className={styles({
				[`font-weight-${fontWeight}`]: fontWeight,
				[`font-color-${color}`]: color,
				[`font-align-${align}`]: align,
				[`font-color-black`]: !color,
				[`font-color-yellow`]: variant === 'a',
				[`${className}`]: className
			})}
			{...props}>
			{children}
		</Component>
	);
};

export const Body = ({ variant, children, display, className, ...props }) => {
	const Component = variant ? bodyVariants[variant] : 'div';
	return (
		<Component
			className={styles({
				[`display-${display}`]: display,
				[`${className}`]: className
			})}
			{...props}>
			{children}
		</Component>
	);
};
