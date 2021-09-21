import axios from 'axios';
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useHistory } from 'react-router-dom';
import { Facebook } from 'react-spinners-css';
import { FormButton } from 'ui/atoms/components/Button';
import { Text, View } from 'ui/atoms/components/Typography';
import { EmailIcon } from 'ui/svgs';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const OTP = () => {
	const [value, setValue] = useState('');
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		let payload = {
			otp_code: value
		};
		let token = localStorage.getItem('vendorToken');
		console.log(token);
		let options = {
			headers: {
				'content-type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				Authorization: `Bearer ${token}`
			}
		};

		let result = await axios.post(
			'https://backend.zipu.ng/api/v1/verify-transco-email',
			payload,
			options
		);

		if (result.data.status === 'Success') {
			setIsLoading(false);
			history.push('/vendor/auth/transport-type');
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
				<form onSubmit={(e) => onSubmit(e)}>
					<OtpInput
						value={value}
						onChange={(otp) => setValue(otp)}
						containerStyle={styles('input-container')}
						inputStyle={styles('input')}
						numInputs={4}
						separator={<span className={styles('separator')}></span>}
					/>
					<View className={styles('form-button-container')}>
						<FormButton loading={isLoading}>CONFIRM OTP</FormButton>
					</View>
				</form>
			</View>
			<View className={styles('resend-text')}>
				<Text textAlign="center">
					Didnt get OTP?
					<Text variant="button" fontWeight="bold" color="yellow" onClick={() => ''}>
						Resend
					</Text>
				</Text>
			</View>
		</AuthCard>
	);
};

export default OTP;
