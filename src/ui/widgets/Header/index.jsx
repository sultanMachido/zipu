import classnames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { withRouter } from 'react-router-dom';
import { loginCustomer, logUserOut } from 'redux/actions/login/login.actions';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import Navigation from 'ui/components/Navigation';
import { NotificationIcon } from 'ui/svgs';
import { LogoIcon } from 'ui/svgs';

import CustomerHeader from './Customer';
import style from './index.module.scss';
import VendorHeader from './Vendor';

const styles = classnames.bind(style);

const navLinks = [
	{
		text: 'Top Destinations',
		type: 'dropdown',
		dropList: [
			{ action: '', text: 'Abuja', url: '/search/trips' },
			{ action: '', text: 'Lagos', url: '/search/trips' },
			{ action: '', text: 'Enugu', url: '/search/trips' }
		]
	},
	{
		text: 'Partners',
		type: 'dropdown',
		dropList: [
			{ action: '', text: 'CAF', url: '/' },
			{ action: '', text: 'NIFES', url: '/' },
			{ action: '', text: 'UNESCO', url: '/' }
		]
	},
	{ text: 'Check your booking', url: '/customer/booking-history' },
	{ text: 'FAQ', url: '/help-support' },
	{ text: 'Sign In', url: '/customer/login' },
	{ text: 'Sign Up', btnLink: '/customer/register', isBtn: true }
];

const Header = ({ login: { userInfo, isAuthenticated }, ...props }) => {
	let history = useHistory();
	const [open, setOpen] = useState(false);
	const admin = false;

	useEffect(() => {
		let userInfo = JSON.parse(localStorage.zipuUser);
	}, []);

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
				<View onClick={() => history.push('/')} className={styles('logo-column')}>
					<LogoIcon color="#240555" />
				</View>
				<View className={styles('nav-column')}>
					{isAuthenticated ? (
						userInfo.user_type === 'transco' ? (
							<VendorHeader />
						) : (
							<CustomerHeader logout={logUserOut} className={styles({ ['open']: open })} />
						)
					) : (
						<Navigation
							logout={logUserOut}
							navLinks={navLinks}
							className={styles({ ['open']: open })}
						/>
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

const mapStateToProps = (state) => ({
	login: state.login
});

const mapDispatchToProps = {
	loginCustomer,
	logUserOut
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withRouter(Header)));
