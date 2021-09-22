import axios from 'axios';
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useHistory } from 'react-router-dom';
import { Facebook } from 'react-spinners-css';
import { FormButton } from 'ui/atoms/components/Button';
import { Text, View } from 'ui/atoms/components/Typography';
import { EmailIcon } from 'ui/svgs';

import { APIService } from '../../../../../config/apiConfig';
import { getAPIError } from '../../../../../utils/errorHandler/apiErrors';
import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const OTP = () => {
	const [value, setValue] = useState('');
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		let payload = {
			otp_code: value
		};

		try {
			let result = await APIService.post('/verify-transco-email', payload);

			if (result.data.status === 'Success') {
				setIsLoading(false);
				history.push('/vendor/auth/transport-type');
			}
		} catch (error) {
			if (error.response) {
				setIsLoading(false);

				let errorMessage = getAPIError(error.response.data.message);
				setErrorMessage(errorMessage);
			} else if (error.request) {
				setIsLoading(false);
				setErrorMessage(error.request);
				// console.log(error.request);
			} else {
				console.log('Error', error.message);
			}
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
			{errorMessage ? <Text>{errorMessage}</Text> : ''}
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
