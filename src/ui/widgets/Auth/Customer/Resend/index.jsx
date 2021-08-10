import classnames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendCustomerEmail } from 'redux/actions/verifyEmail/verifyEmail.actions';
import { Button } from 'ui/atoms/components/Button/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerResend = ({ verifyEmail: { otpErrFlag, otpDataLoading }, ...props }) => {
	const [email, setEmail] = useState('');

	useEffect(() => {
		console.log('Erro flag in componr', otpErrFlag);
	}, [otpErrFlag]);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await props.sendCustomerEmail(email);
			if (otpErrFlag === false) {
				props.history.push('/customer/verify');
			}
		} catch (error) {
			toast.error('Error occured 3');
		}
	};

	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Resend Verification Code</Text>
			<Text>Enter your details to get your verification code again</Text>
			<form onSubmit={onSubmit} className={styles('form-container')}>
				<View className={styles('input-group')}>
					<TextInput
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						isRequired
						placeholder="Your email address"
					/>
				</View>
				<View className={styles('form-button-container')}>
					<Button type="submit" loading={otpDataLoading} loadingText="Resending....">
						RESEND CODE
					</Button>
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
	verifyEmail: state.verifyEmail
});

const mapDispatchToProps = {
	sendCustomerEmail
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerResend));
