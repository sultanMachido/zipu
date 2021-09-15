/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { ReactComponent as IconFacebook } from 'assets/svg/IconFacebook.svg';
import { ReactComponent as IconGoogle } from 'assets/svg/IconGoogle.svg';
import classnames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginCustomer } from 'redux/actions/login/login.actions';
import { setErrFlag } from 'redux/actions/verifyEmail/verifyEmail.actionsCreators';
import { Button } from 'ui/atoms/components/Button/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';
// import ZipuLogo from '../../../../../assets/img/zipu-logo.svg';

let styles = classnames.bind(style);

const CustomerLogin = ({ login: { loginLoading }, ...props }) => {
	let history = useHistory();
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const [authError, setError] = useState('');
	const [prevPath, setPrevPath] = useState('');

	useEffect(() => {
		if (history.location.state?.from) {
			setPrevPath(history.location.state?.from);
		}
		// eslint-disable-next-line
	}, []);

	const onChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onLogin = async (e) => {
		e.preventDefault();
		try {
			let userData = await props.loginCustomer(user);
			if (userData?.loginStatus === true) {
				setError('');
				if (prevPath.length > 0) {
					history.push(prevPath);
				} else {
					history.push('/customer/booking-history');
				}
			} else {
				setError(userData?.message || 'Error');
				toast.error(userData?.message || 'Error');
			}
		} catch (error) {
			message.error('Error occured');
		}
	};

	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Sign In</Text>
			<Text>Sign in to your Zipu account with your registred email and password</Text>
			<Text>{authError}</Text>
			<form onSubmit={onLogin} className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput
						name="email"
						onChange={onChange}
						type="email"
						isRequired
						placeholder="Your email address"
					/>
				</View>
				<View className={styles('input-group')}>
					<TextInput
						name="password"
						type="password"
						onChange={onChange}
						isRequired
						placeholder="Enter password"
					/>
				</View>
				<View className={styles('form-button-container')}>
					<Button type="submit" loading={loginLoading} loadingText="Authenticating....">
						LOGIN
					</Button>
				</View>
			</form>

			<View
				display="flex"
				alignitems="center"
				justifyContent="center"
				className={styles('social--cta')}>
				<button>
					<IconGoogle />
				</button>
				<button>
					<IconFacebook />
				</button>
			</View>
			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					<Text variant="a" fontWeight="bold" href="/customer/forgot-password">
						&nbsp;Forgot Password
					</Text>
				</Text>
			</View>
			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					By signing in or creating an account, you agree with our
					<Text variant="a" fontWeight="bold" href="/">
						&nbsp;Terms & Conditions&nbsp;
					</Text>
					&nbsp; and &nbsp;
					<Text variant="a" fontWeight="bold" href="/">
						&nbsp;Privacy Statement
					</Text>
				</Text>
			</View>
		</AuthCard>
	);
};

const mapStateToProps = (state) => ({
	login: state.login
});

const mapDispatchToProps = {
	loginCustomer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomerLogin)));
