import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import OtpInput from 'react-otp-input';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { verifyCustomerEmail } from 'redux/actions/verifyEmail/verifyEmail.actions';
import { FormButton } from 'ui/atoms/components/Button';
import { Text, View } from 'ui/atoms/components/Typography';
import { EmailIcon } from 'ui/svgs';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const CustomerOTP = (props) => {
	const [value, setValue] = useState('');
	const history = useHistory();

	const { otpVerified } = props.verifyEmail;

	// useEffect(() => {
	// 	console.log(props.verifyEmail);
	// }, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await props.verifyCustomerEmail(value);
			if (otpVerified === true) {
				history.push('/customer/login');
			}
		} catch (error) {
			toast.error('Error occured');
		}
	};

	return (
		<AuthCard className={styles('container')}>
			<View className={styles('email-icon-container')}>
				<EmailIcon />
			</View>
			<View className={styles('text-container')}>
				<Text variant="h3">Email Verification</Text>
				<Text>
					An OTP code has been sent to your email for verification, enter code here to verify
					account
				</Text>
			</View>
			<View className={styles('form-container')}>
				<form onSubmit={onSubmit}>
					<OtpInput
						value={value}
						onChange={(otp) => setValue(otp)}
						containerStyle={styles('input-container')}
						inputStyle={styles('input')}
						numInputs={4}
						separator={<span className={styles('separator')}></span>}
					/>
					<View className={styles('form-button-container')}>
						<FormButton disabled={value.length < 4 ? true : false}>CONFIRM OTP</FormButton>
					</View>
				</form>
			</View>
			<View className={styles('resend-text')}>
				<Text textAlign="center">
					Didnt get OTP?
					<Text
						variant="button"
						fontWeight="bold"
						color="yellow"
						style={{
							paddingLeft: '16px'
						}}
						onClick={() => history.push('/customer/resend')}>
						Resend
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
	verifyCustomerEmail
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerOTP));
