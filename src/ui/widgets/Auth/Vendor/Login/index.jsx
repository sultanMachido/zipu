import axios from 'axios';
import classnames from 'classnames/bind';
import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const AdminLogin = () => {
	const history = useHistory();

	const onSubmit = () => {
		history.push('/vendor/company');
	};
	return (
		<AuthCard className={styles('admin-wrapper')}>
			<Text variant="h3">Login</Text>
			<Text>Enter your details and continue</Text>
			<Formik
				initialValues={{
					email: '',
					password: ''
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
						const result = await axios.post(`http://backend.zipu.ng/api/v1/login-transco`, values);
						if (result.status === "Success") {
							// console.log('result!!')
							history.push('/vendor/company');
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
								type="password"
								isRequired
								name="password"
								placeholder="Enter password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
						</View>
						<View className={styles('form-button-container')}>
							<FormButton>LOGIN</FormButton>
						</View>
					</form>
				)}
			</Formik>

			<View className={styles('create-account-text')}>
				<Text textAlign="center">
					Do not have an account?{' '}
					<Text variant="a" fontWeight="bold" href="/">
						Create account
					</Text>
				</Text>
			</View>
		</AuthCard>
	);
};

export default AdminLogin;
