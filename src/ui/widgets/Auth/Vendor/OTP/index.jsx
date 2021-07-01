import classnames from 'classnames/bind';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { FormButton } from 'ui/atoms/components/Button';
import { Text, View } from 'ui/atoms/components/Typography';
import { EmailIcon } from 'ui/svgs';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const Registration = () => {
	const [value, setValue] = useState('');

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
				<form>
					<OtpInput
						value={value}
						onChange={(otp) => setValue(otp)}
						containerStyle={styles('input-container')}
						inputStyle={styles('input')}
						numInputs={4}
						separator={<span className={styles('separator')}></span>}
					/>
					<View className={styles('form-button-container')}>
						<FormButton>CONFIRM OTP</FormButton>
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

export default Registration;
