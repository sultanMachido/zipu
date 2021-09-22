import axios from 'axios';
import classnames from 'classnames/bind';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Facebook } from 'react-spinners-css';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { RingIcon1 } from 'ui/svgs';

import { APIService } from '../../../../../config/apiConfig';
import { getAPIError } from '../../../../../utils/errorHandler/apiErrors';
import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const Registration = () => {
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

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

			<Formik
				initialValues={{
					email: '',
					password: '',
					phone: '',
					confirm_password: ''
				}}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = 'Invalid email address';
					}
					if (!values.password) {
						errors.password = 'Required';
					}
					if (!values.confirm_password) {
						errors.confirm_password = 'Required';
					}
					if (!values.phone) {
						errors.phone = 'Required';
					}
				}}
				onSubmit={async (values, { setSubmitting }) => {
					console.log(values);

					if (values.password !== values.confirm_password) {
						setErrorMessage('Password and Confirm Password do not match');
						return;
					}

					setIsLoading(true);
					try {
						const result = await APIService.post('/register-transco', values);

						console.log(result, 'result');
						if (result.data.status === 'Success') {
							// console.log('result!!')
							localStorage.setItem('zipuJWTToken', ` ${result.data.data.token.plainTextToken}`);
							setIsLoading(false);
							history.push('/vendor/auth/otp');
						} else {
							console.log('failed');
						}
					} catch (error) {
						console.log(error);
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
				}}>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
					/* and other goodies */
				}) => (
					<form className={styles('form-container')} onSubmit={handleSubmit}>
						{errorMessage ? <Text>{errorMessage}</Text> : ''}
						<View className={styles('input-group')}>
							<TextInput
								type="email"
								isRequired
								name="email"
								placeholder="Your email address"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
						</View>
						<View className={styles('input-group')}>
							<TextInput
								type="tel"
								isRequired
								name="phone"
								placeholder="Phone number"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone}
							/>
						</View>
						<View className={styles('input-group')}>
							<TextInput
								type="password"
								isRequired
								name="password"
								placeholder="Enter password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
						</View>
						<View className={styles('input-group')}>
							<TextInput
								type="password"
								isRequired
								name="confirm_password"
								placeholder="Confirm password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.confirm_password}
							/>
						</View>
						<View className={styles('form-button-container')}>
							<FormButton loading={isLoading}>CREATE ACCOUNT</FormButton>
						</View>
					</form>
				)}
			</Formik>

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
