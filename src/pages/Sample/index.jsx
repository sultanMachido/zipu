import classnames from 'classnames/bind';
import React from 'react';

import style from './sample.module.scss';

let styles = classnames.bind(style);

function Sample() {
	return <div className={styles('sample-container', { 'conditional-class': false })}>Hello</div>;
}

export default Sample;
