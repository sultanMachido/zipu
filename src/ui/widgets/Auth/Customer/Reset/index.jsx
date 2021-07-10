import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerReset = () => {
	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Reset Password</Text>
			<Text>Enter your new password and continue</Text>
			<form className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput type="password" isRequired placeholder="Enter new password" />
				</View>
				<View className={styles('input-group')}>
					<TextInput type="password" isRequired placeholder="Confirm password" />
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

export default CustomerReset;
