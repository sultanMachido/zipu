import axios from 'axios';
import classnames from 'classnames/bind';
import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { RingIcon1 } from 'ui/svgs';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const Registration = () => {
	const history = useHistory();

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
					phone_number: '',
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
					// if (!values.newpassword) {
					// 	errors.newpassword = 'Required';
					// }
					// return errors;
				}}
				onSubmit={async (values, { setSubmitting }) => {
					console.log(values);
					try {
						const result = await axios.post(
							`http://backend.zipu.ng/api/v1/register-transco`,
							values
						);
						if (result.status === 'Success') {
							// console.log('result!!')
							history.push('/login');
						} else {
							console.log('failed');
						}
					} catch (error) {
						//   notify.show(error.response.data.message, 'error');
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
								name="phone_number"
								placeholder="Phone number"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone_number}
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
							<FormButton>CREATE ACCOUNT</FormButton>
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
