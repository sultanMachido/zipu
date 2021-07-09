import classnames from 'classnames/bind';
import React, { useState } from 'react';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import Navigation from 'ui/components/Navigation';
import { NotificationIcon } from 'ui/svgs';
import { LogoIcon } from 'ui/svgs';

import style from './index.module.scss';
import VendorHeader from './Vendor';

const styles = classnames.bind(style);

const navLinks = [
	{
		text: 'Top Destinations',
		type: 'dropdown',
		dropList: [
			{ text: 'link', url: '/' },
			{ text: 'link', url: '/' },
			{ text: 'link', url: '/' }
		]
	},
	{
		text: 'Partners',
		type: 'dropdown',
		dropList: [
			{ text: 'link', url: '/' },
			{ text: 'link', url: '/' },
			{ text: 'link', url: '/' }
		]
	},
	{ text: 'Check your booking', url: '/hello' },
	{ text: 'FAQ', url: '/' },
	{ text: 'Blog', url: '/' },
	{ text: 'Sign in', action: 'login' },
	{ text: 'Sign up', action: 'sign-up' }
];

const Header = () => {
	const [open, setOpen] = useState(false);
	const admin = true;
	return (
		<View className={styles('header-wrapper')}>
			<Container className={styles('header-container')}>
				<View className={styles('mobile')}>
					<View
						variant="button"
						className={styles('hamburger', { ['open']: open })}
						onClick={() => setOpen(!open)}
						open={open}>
						<span></span>
						<span></span>
						<span></span>
					</View>
					<View className={styles('profile-info')}>
						<View className={styles('image-container')}>
							<img
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt=""
							/>
						</View>
						<Text color="white">Hello, Taiwo</Text>
					</View>
				</View>
				<View className={styles('logo-column')}>
					<LogoIcon color="#240555" />
				</View>
				<View className={styles('nav-column')}>
					{admin ? (
						<VendorHeader className={styles({ ['open']: open })} />
					) : (
						<Navigation navLinks={navLinks} className={styles({ ['open']: open })} />
					)}
				</View>
				<View className={styles('notification')}>
					<NotificationIcon />
				</View>
			</Container>
			<Text
				variant="h5"
				fontWeight="400"
				color="white"
				textAlign="center"
				className={styles('path-name')}>
				Booking
			</Text>
		</View>
	);
};

export default Header;
