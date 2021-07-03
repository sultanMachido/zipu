import classNames from 'classnames/bind';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';
import Footer from 'ui/components/Footer';

import style from './index.module.scss';

let styles = classNames.bind(style);

const Layout = ({ children }) => {
	return (
		<View className={styles('layout-wrapper')}>
			<View variant="header">header</View>
			<View variant="main" className={styles('main')}>
				{children}
			</View>
			<View>
				<Footer />
			</View>
		</View>
	);
};

export default Layout;
