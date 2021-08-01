import classnames from 'classnames/bind';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { RingIcon1 } from 'ui/svgs';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const Registration = () => {
	const history = useHistory();

	const onSubmit = () => {
		history.push('/vendor/auth/otp');
	};
	return (
		<AuthCard>
			<View className={styles('card-title')} display="flex" alignItems="center">
				<RingIcon1 />
				<View className={styles('col-2')}>
					<Text variant="h4">Company registration</Text>
					<Text>Next: Transport type</Text>
				</View>
			</View>

			<form className={styles('form-container')} onSubmit={onSubmit}>
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

export default Registration;
