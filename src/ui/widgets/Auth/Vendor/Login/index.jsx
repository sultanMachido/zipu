import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const AdminLogin = () => {
	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h1" fontsize="2rem">
				Login
			</Text>
			<Text>Enter your details and continue</Text>
			<form className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput type="email" isRequired placeholder="Your email address" />
				</View>
				<View className={styles('input-group')}>
					<TextInput type="password" isRequired placeholder="Enter password" />
				</View>
				<View className={styles('form-button-container')}>
					<FormButton>LOGIN</FormButton>
				</View>
			</form>
			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					Do not have an account?{' '}
					<Text variant="a" fontWeight="bold" href="/">
						Create account
					</Text>{' '}
				</Text>
			</View>
		</AuthCard>
	);
};

export default AdminLogin;
