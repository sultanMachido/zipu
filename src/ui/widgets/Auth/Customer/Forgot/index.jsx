import { message } from 'antd';
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestPasswordReset } from 'redux/actions/registration/register.actions';
import { Button } from 'ui/atoms/components/Button/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerForgot = ({ register: { registerLoading }, ...props }) => {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const onSubmit = async (e) => {
		setLoading(true);
		e.preventDefault();
		await props.requestPasswordReset(email);
		props.history.push('/customer/reset-password');
	};

	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Forgot Password</Text>
			<Text>Enter your details to create password reset link</Text>
			<form onSubmit={onSubmit} className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						isRequired
						placeholder="Your email address"
					/>
				</View>
				<View className={styles('form-button-container')}>
					<Button type="submit" loading={registerLoading} loadingText="Sending....">
						SEND CODE
					</Button>
				</View>
			</form>
			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					<Text variant="a" fontWeight="bold" href="/customer/resend">
						&nbsp;Resend code
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
	requestPasswordReset
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerForgot));
