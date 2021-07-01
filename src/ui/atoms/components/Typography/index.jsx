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
	a: 'a'
};

export const bodyVariants = {
	div: 'div',
	label: 'label',
	section: 'section',
	button: 'button'
};

export const Text = ({
	textAlign,
	color,
	fontWeight,
	variant,
	className,
	children,
	fontsize,
	...props
}) => {
	const Component = variant ? variants[variant] : 'p';

	return (
		<Component
			className={styles({
				[`font-weight-${fontWeight}`]: fontWeight,
				[`font-color-${color}`]: color,
				[`font-align-${textAlign}`]: textAlign,
				[`font-color-black`]: !color,
				[`font-color-yellow`]: variant === 'a',
				[`${className}`]: className
			})}
			style={{ fontSize: fontsize ? fontsize : '1.2rem' }}
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
