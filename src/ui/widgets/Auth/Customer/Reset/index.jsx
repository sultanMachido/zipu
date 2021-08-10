/* eslint-disable no-undef */
import { message } from 'antd';
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { completePasswordReset } from 'redux/actions/registration/register.actions';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerReset = (props) => {
	const [user, setUser] = useState({
		otp_code: '',
		password: '',
		confirm_password: ''
	});

	const onChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await props.completePasswordReset(user);
	};

	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Reset Password</Text>
			<Text>Enter your new password and continue</Text>
			<form onSubmit={onSubmit} className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput
						name="otp_code"
						type="number"
						onChange={onChange}
						isRequired
						placeholder="Enter OTP Code"
					/>
				</View>
				<View className={styles('input-group')}>
					<TextInput
						name="password"
						type="password"
						onChange={onChange}
						isRequired
						placeholder="Enter new password"
					/>
				</View>
				<View className={styles('input-group')}>
					<TextInput
						name="confirm_password"
						onChange={onChange}
						type="password"
						isRequired
						placeholder="Confirm password"
					/>
				</View>
				<View className={styles('form-button-container')}>
					<FormButton>UPDATE PASSWORD</FormButton>
				</View>
			</form>
			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					Back to Login
					<Text variant="a" fontWeight="bold" href="/customer/login">
						&nbsp;Create account
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
	completePasswordReset
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerReset));
