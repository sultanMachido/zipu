import classNames from 'classnames/bind';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';
import TitleNav from 'ui/components/TitleNav';

import Header from '../Header';
import style from './index.module.scss';

let styles = classNames.bind(style);

const ActivityLayout = ({ children }) => {
	return (
		<View className={styles('activity-layout-wrapper')}>
			<View variant="header" className={styles('header')}>
				<Header />
				<TitleNav text="Go Back" />
			</View>
			<View variant="main" className={styles('main')}>
				{children}
			</View>
		</View>
	);
};

export default ActivityLayout;
