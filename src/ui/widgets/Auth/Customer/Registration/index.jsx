/* eslint-disable no-unused-vars */
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerCustomer } from 'redux/actions/registration/register.actions';
import { Button } from 'ui/atoms/components/Button/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerRegistration = ({ register: { registerLoading }, ...props }) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
		phone: ''
	});

	const onChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onRegister = async (e) => {
		e.preventDefault();
		try {
			let registerRequest = await props.registerCustomer(user);
			if (registerRequest?.status === true) {
				props.history.push('/customer/verify');
			} else {
				toast.error('An error occured accepting your details, please check an check again');
			}
		} catch (error) {
			toast.error('Error occured');
		}
	};

	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Sign Up</Text>
			<Text className={styles('auth-h6')} variant="h6">
				Sign up on Zipu to start boking your trips
			</Text>

			<form onSubmit={onRegister} className={styles('form-container')}>
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
						name="phone"
						type="number"
						isRequired
						onChange={onChange}
						placeholder="Phone number"
					/>
				</View>
				<View className={styles('input-group')}>
					<TextInput
						onChange={onChange}
						name="password"
						type="password"
						isRequired
						placeholder="Enter password"
					/>
				</View>
				<View className={styles('form-button-container')}>
					{/* <FormButton type="submit">CREATE ACCOUNT</FormButton> */}
					<Button type="submit" loading={registerLoading} loadingText="Registering User....">
						CREATE ACCOUNT
					</Button>
				</View>
			</form>
			<View className={styles('verification-text')}>
				<Text textAlign="center" fontWeight="500" color="grey-dark">
					A verification message will be sent to your email
				</Text>
			</View>
			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					<Text variant="a" fontWeight="bold" href="/customer/login">
						&nbsp;Have an account, Login to your account
					</Text>
				</Text>
			</View>
			<View className={styles('create-account-text')}>
				<Text textAlign="center" color="grey-dark">
					By signing in or creating an account, you agree with our{' '}
					<Text variant="a" fontWeight="normal" href="/">
						Terms & Conditions
					</Text>
					&nbsp; and &nbsp;
					<Text variant="a" fontWeight="normal" href="/">
						Privacy Statement
					</Text>
				</Text>
			</View>
		</AuthCard>
	);
};

const mapStateToProps = (state) => ({
	register: state.register
});

const mapDispatchToProps = {
	registerCustomer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerRegistration));
