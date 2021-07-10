import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerRegistration = () => {
	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Sign Up</Text>
			<Text variant="h6">Sign up on Zipu to start boking your trips</Text>

			<form className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput type="email" isRequired placeholder="Your email address" />
				</View>
				<View className={styles('input-group')}>
					<TextInput type="tel" isRequired placeholder="Phone number" />
				</View>
				<View className={styles('input-group')}>
					<TextInput type="password" isRequired placeholder="Enter password" />
				</View>
				<View className={styles('form-button-container')}>
					<FormButton>CREATE ACCOUNT</FormButton>
				</View>
			</form>
			<View className={styles('verification-text')}>
				<Text textAlign="center" fontWeight="500" color="grey-dark">
					A verification message will be sent to your email
				</Text>
			</View>
			<View className={styles('create-account-text')}>
				<Text textAlign="center" color="grey-dark">
					By signing in or creating an account, you agree with our{' '}
					<Text variant="a" fontWeight="normal" href="/">
						Terms & Conditions
					</Text>{' '}
					and{' '}
					<Text variant="a" fontWeight="normal" href="/">
						Privacy Statement
					</Text>{' '}
				</Text>
			</View>
		</AuthCard>
	);
};

export default CustomerRegistration;
