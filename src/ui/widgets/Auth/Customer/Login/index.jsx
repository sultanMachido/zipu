import { ReactComponent as IconFacebook } from 'assets/svg/IconFacebook.svg';
import { ReactComponent as IconGoogle } from 'assets/svg/IconGoogle.svg';
import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerLogin = () => {
	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Sign In</Text>
			<Text>Sign in to your Zipu account with your registred email and password</Text>
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
				<Text textAlign="center">Or use any of the following services</Text>
			</View>
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
					By signing in or creating an account, you agree with our
					<Text variant="a" fontWeight="bold" href="/">
						&nbsp;Terms & Conditions&nbsp;
					</Text>
					and
					<Text variant="a" fontWeight="bold" href="/">
						&nbsp;Privacy Statement
					</Text>
				</Text>
			</View>
		</AuthCard>
	);
};

export default CustomerLogin;
