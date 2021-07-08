import classnames from 'classnames/bind';
import React from 'react';

import style from './index.module.scss';

const styles = classnames.bind(style);

const Container = ({ children, className }) => {
	return <div className={styles('default-style', { [`${className}`]: className })}>{children}</div>;
};

export default Container;
