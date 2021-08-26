import classnames from 'classnames/bind';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';
import Navigation from 'ui/components/Navigation';

import style from './index.module.scss';

const styles = classnames.bind(style);

const navLinks = [
	{ text: 'Notification', url: '/help-support' },
	{ text: 'FAQ', url: '/help-support' },
	{ text: 'Support', url: '/help-support' },
	{ text: 'Saved Trips', url: '/customer/trips/saved' },
	{
		text: 'GIG Admin',
		type: 'dropdown',
		imgUrl:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
		dropList: [
			{ action: '', text: 'Profile', url: '/customer' },
			{ action: 'logout', text: 'Logout', url: '/' }
		]
	}
];

const CustomerHeader = ({ className, logout }) => {
	return (
		<View className={styles('admin-header-wrapper')}>
			<Navigation
				logout={logout && logout}
				navLinks={navLinks}
				className={styles({ [`${className}`]: className })}
			/>
		</View>
	);
};

export default CustomerHeader;
