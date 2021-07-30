import classNames from 'classnames/bind';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';
import Footer from 'ui/widgets/Footer';

import Header from '../Header';
import style from './index.module.scss';

let styles = classNames.bind(style);

const Layout = ({ children }) => {
	return (
		<View className={styles('layout-wrapper')}>
			<View variant="header" className={styles('header')}>
				<Header />
			</View>
			<View variant="main" className={`${styles('main')} ${styles('full-main')}`}>
				{children}
			</View>
			<View className={styles('footer')}>
				<Footer />
			</View>
		</View>
	);
};

export default Layout;
