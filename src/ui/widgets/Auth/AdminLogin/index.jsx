import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Body, Text } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);

const AdminLogin = () => {
	return (
		<Body className={styles('admin-login-wrapper')}>
			<Body className={styles('card')}>
				<Body className={styles('inner-card')}>
					<Text variant="h1">Login</Text>
					<Text>Enter your details and continue</Text>
					<form className={styles('form-container')}>
						<Body className={styles('input-group')}>
							<TextInput type="email" isRequired placeholder="Your email address" />
						</Body>
						<Body className={styles('input-group')}>
							<TextInput type="password" isRequired placeholder="Enter password" />
						</Body>
						<Body className={styles('form-button-container')}>
							<FormButton>LOGIN</FormButton>
						</Body>
					</form>
					<Body className={styles('create-account-text')}>
						<Text align="center">
							Do not have an account?{' '}
							<Text variant="a" fontWeight="bold" href="/">
								Create account
							</Text>{' '}
						</Text>
					</Body>
				</Body>
			</Body>
		</Body>
	);
};

export default AdminLogin;
