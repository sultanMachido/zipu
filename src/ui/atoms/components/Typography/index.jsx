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
	label: 'label',
	a: 'a',
	button: 'button'
};

export const bodyVariants = {
	div: 'div',
	label: 'label',
	section: 'section',
	header: 'header',
	main: 'main',
	button: 'button',
	ul: 'ul'
};

const fonts = {
	h1: '40px',
	h2: '30px',
	h3: '25px',
	h4: '20px',
	h5: '20px',
	p: '14px',
	a: '14px'
};

export const Text = ({ textAlign, color, fontWeight, variant, className, children, ...props }) => {
	const Component = variant ? variants[variant] : 'p';
	return (
		<Component
			className={styles({
				[`font-weight-${fontWeight}`]: fontWeight,
				[`font-align-${textAlign}`]: textAlign,
				[`text-color-yellow`]: variant === 'a',
				[`text-color-black`]: !color,
				[`text-color-${color}`]: color,
				[`${className}`]: className
			})}
			style={{ fontSize: fonts[variant ? variants[variant] : 'p'] }}
			{...props}>
			{children}
		</Component>
	);
};

export const View = ({
	variant,
	children,
	display,
	alignItems,
	justifyContent,
	className,
	...props
}) => {
	const Component = variant ? bodyVariants[variant] : 'div';
	return (
		<Component
			className={styles({
				[`display-${display}`]: display,
				[`align-${alignItems}`]: alignItems,
				[`justify-${justifyContent}`]: justifyContent,
				[`${className}`]: className
			})}
			{...props}>
			{children}
		</Component>
	);
};
