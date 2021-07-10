import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerForgot = () => {
	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Forgot Password</Text>
			<Text>Enter your details to create password reset link</Text>
			<form className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput type="email" isRequired placeholder="Your email address" />
				</View>
				<View className={styles('form-button-container')}>
					<FormButton>FORGOT PASSWORD</FormButton>
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

export default CustomerForgot;
