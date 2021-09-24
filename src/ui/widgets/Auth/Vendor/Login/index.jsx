import axios from 'axios';
import classnames from 'classnames/bind';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import { APIService } from '../../../../../config/apiConfig';
import { getAPIError } from '../../../../../utils/errorHandler/apiErrors';
import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const AdminLogin = () => {
	const history = useHistory();

	const [authMessage, setAuthMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const onSubmit = () => {
		history.push('/vendor/company');
	};
	return (
		<AuthCard className={styles('admin-wrapper')}>
			<div>
				<svg
					width="80"
					height="32"
					viewBox="0 0 80 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0)">
						<path
							d="M57.2046 5.51295C55.9739 4.28225 55.9739 2.11693 57.2046 0.92427C58.437 -0.30809 60.6007 -0.30809 61.8363 0.92427C63.0687 2.11693 63.0687 4.28225 61.8363 5.51295C60.604 6.74366 58.432 6.73704 57.2046 5.51295Z"
							fill="#FFBC00"
						/>
						<path
							d="M77.1506 0.794345L76.6759 0.824119C75.6249 0.89375 74.6031 1.19965 73.6868 1.71903C72.8503 2.19314 72.1553 2.88178 71.6737 3.71396C71.5592 3.86328 71.4929 4.04384 71.4834 4.23172C71.5678 4.17713 71.6207 4.14901 71.667 4.11096C71.9979 3.83968 72.3287 3.5502 72.6678 3.29546C73.3233 2.79688 74.0745 2.43875 74.8745 2.2434C76.3318 1.90429 77.6469 2.2219 78.8329 3.11846C78.897 3.17757 78.9561 3.24174 79.0099 3.31034C78.8445 3.2756 78.7585 3.25906 78.6691 3.2359C76.2326 2.60235 74.0623 3.14823 72.1385 4.73624C71.8226 5.00825 71.5243 5.29997 71.2452 5.60964C71.1088 5.75919 70.9288 5.86217 70.7308 5.90409C70.6857 5.92124 70.6371 5.92687 70.5893 5.92045C70.5415 5.91404 70.4961 5.89579 70.4571 5.86736C70.4182 5.83893 70.387 5.80122 70.3663 5.75766C70.3456 5.7141 70.3361 5.66607 70.3388 5.61792C70.3227 5.29601 70.3349 4.97331 70.3751 4.65353C70.4611 3.9119 70.7339 3.20422 71.1678 2.59669C71.6018 1.98916 72.1827 1.50164 72.8564 1.17977C73.9818 0.617061 75.2433 0.383684 76.4956 0.506515C76.6186 0.507537 76.7401 0.533583 76.8527 0.583065C76.9653 0.632548 77.0667 0.704435 77.1506 0.794345Z"
							fill="#FFBC00"
						/>
						<path
							d="M27.6164 5.93873C27.6164 4.48615 26.4389 3.30859 24.9863 3.30859C23.5337 3.30859 22.3561 4.48615 22.3561 5.93873V21.0132C22.3561 22.4658 23.5337 23.6434 24.9863 23.6434C26.4389 23.6434 27.6164 22.4658 27.6164 21.0132V5.93873Z"
							fill="#240555"
						/>
						<path
							d="M43.346 2.78787C41.1714 2.78481 39.0483 3.4494 37.2636 4.69182C36.9859 4.1761 36.5441 3.76781 36.0081 3.53168C35.472 3.29555 34.8726 3.2451 34.3046 3.38831C33.7367 3.53153 33.2328 3.86023 32.8729 4.3223C32.5129 4.78436 32.3175 5.35336 32.3176 5.93907V29.3705C32.3176 30.068 32.5947 30.737 33.0879 31.2302C33.5812 31.7235 34.2502 32.0006 34.9477 32.0006C35.6453 32.0006 36.3143 31.7235 36.8075 31.2302C37.3008 30.737 37.5779 30.068 37.5779 29.3705V22.4229C38.9724 23.3193 40.5567 23.8783 42.2049 24.0556C43.8532 24.2329 45.5201 24.0236 47.0734 23.4444C48.6267 22.8651 50.0236 21.9319 51.1533 20.7186C52.283 19.5053 53.1144 18.0455 53.5815 16.4549C54.0486 14.8643 54.1386 13.1867 53.8443 11.5552C53.55 9.92379 52.8795 8.38338 51.8861 7.05624C50.8926 5.7291 49.6035 4.65176 48.1211 3.90969C46.6387 3.16762 45.0037 2.78126 43.346 2.78125V2.78787ZM43.346 18.8681C42.2801 18.8681 41.2381 18.552 40.3518 17.9598C39.4656 17.3677 38.7748 16.526 38.3669 15.5412C37.959 14.5564 37.8523 13.4728 38.0602 12.4274C38.2682 11.382 38.7815 10.4217 39.5352 9.66799C40.2889 8.91428 41.2492 8.401 42.2946 8.19305C43.34 7.98511 44.4236 8.09183 45.4084 8.49973C46.3931 8.90764 47.2348 9.5984 47.827 10.4847C48.4192 11.3709 48.7353 12.4129 48.7353 13.4788C48.7353 14.9081 48.1675 16.2789 47.1568 17.2896C46.1461 18.3003 44.7753 18.8681 43.346 18.8681Z"
							fill="#240555"
						/>
						<path
							d="M74.3453 10.9316C75.0415 10.9316 75.7092 11.2082 76.2015 11.7005C76.6939 12.1929 76.9704 12.8606 76.9704 13.5568V15.2408C76.8907 17.689 75.8513 20.0076 74.0766 21.6961C72.302 23.3845 69.9345 24.3073 67.4854 24.2651C65.0362 24.223 62.7019 23.2194 60.9864 21.4709C59.2708 19.7224 58.3118 17.3694 58.3163 14.9199V13.5568C58.3167 12.8604 58.5937 12.1927 59.0863 11.7004C59.5789 11.2082 60.2467 10.9316 60.9431 10.9316C61.6392 10.9321 62.3067 11.2088 62.7989 11.701C63.2911 12.1932 63.5679 12.8607 63.5683 13.5568V14.9711C63.5898 16.0346 64.0273 17.0473 64.787 17.7919C65.5467 18.5364 66.5681 18.9534 67.6318 18.9534C68.6955 18.9534 69.7168 18.5364 70.4766 17.7919C71.2363 17.0473 71.6738 16.0346 71.6953 14.9711V14.9199V13.5568C71.6957 12.8607 71.9724 12.1932 72.4647 11.701C72.9569 11.2088 73.6243 10.9321 74.3204 10.9316H74.3453Z"
							fill="#240555"
						/>
						<path
							d="M15.0398 18.4994H8.03102L16.7568 7.55043C16.7882 7.51239 16.818 7.47269 16.8494 7.43299L16.8825 7.39163C17.2953 6.87029 17.485 6.20683 17.4103 5.54609C17.3356 4.88535 17.0026 4.28099 16.4839 3.86493C16.426 3.81531 16.3664 3.76733 16.3052 3.72267L16.2738 3.69786C15.67 3.2165 14.9058 3.21484 14.2011 3.21484H3.19422C1.88576 3.21484 0.712955 4.13621 0.516108 5.42812C0.456935 5.80381 0.479735 6.18785 0.58294 6.5539C0.686146 6.91995 0.867315 7.25934 1.11402 7.54878C1.36072 7.83823 1.66712 8.07088 2.01219 8.23077C2.35727 8.39067 2.73285 8.47402 3.11316 8.47512H9.28323L0.600472 19.3712C0.143306 19.9482 -0.0668614 20.6827 0.0158979 21.4142C0.0986572 22.1457 0.467615 22.8147 1.04214 23.275C1.57975 23.7034 2.16532 23.7713 2.88323 23.7977L3.76821 23.7597H15.1357C15.5146 23.7589 15.8889 23.6765 16.233 23.518C16.5771 23.3595 16.8831 23.1286 17.1299 22.8411C17.3767 22.5536 17.5586 22.2163 17.6632 21.8521C17.7678 21.488 17.7927 21.1055 17.7361 20.7309C17.5442 19.4258 16.3581 18.4994 15.0398 18.4994Z"
							fill="#240555"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="79.01" height="32" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</div>
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
				}}
				onSubmit={async (values, { setSubmitting }) => {
					// console.log(values);
					setIsLoading(true);

					try {
						const result = await APIService.post('/login-transco', values);
						// const result = await axios.post('https://backend.zipu.ng/api/v1/login-transco', values);
						// console.log(result.data.data.token.plainTextToken, 'result');
						console.log(result);
						if (result.data.status === 'Success') {
							// console.log('result!!')
							localStorage.setItem('zipuJWTToken', result.data.data.token.plainTextToken);
							localStorage.setItem('zipuUser', JSON.stringify(result.data.data.user));
							setIsLoading(false);
							history.push('/vendor/company');
						}
					} catch (error) {
						if (error.response) {
							setIsLoading(false);
							let errorMessage = getAPIError(error.response.data.message);

							setAuthMessage(errorMessage);
						} else if (error.request) {
							setIsLoading(false);
							setAuthMessage(error.request);
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
						{authMessage ? <Text className={styles('error-text')}>{authMessage}</Text> : ''}
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
							<FormButton loading={isLoading}>LOGIN</FormButton>
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
