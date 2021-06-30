import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { RingIcon1 } from 'ui/svgs/RingIcon1';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const Registration = () => {
	return (
		<AuthCard>
			<View className={styles('card-title')} display="flex" alignItems="center">
				<RingIcon1 />
				<View className={styles('col-2')}>
					<Text variant="h1" fontsize="2rem">
						Company registration
					</Text>
					<Text>Next: Transport type</Text>
				</View>
			</View>

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
				<Text textAlign="center" fontWeight="500">
					A verification message will be sent to your email
				</Text>
			</View>
			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					By signing in or creating an account, you agree with our{' '}
					<Text variant="a" fontWeight="normal" href="/">
						Terms & Conditions
					</Text>{' '}
					and{' '}
					<Text variant="a" fontWeight="normal" href="/">
						Privacy Statement
					</Text>{' '}
					Do not have an account?{' '}
				</Text>
			</View>
		</AuthCard>
	);
};

export default Registration;
