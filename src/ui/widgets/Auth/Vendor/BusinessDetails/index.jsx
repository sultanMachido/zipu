import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormButton } from 'ui/atoms/components/Button';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { UploadField } from 'ui/atoms/components/UploadField';
import { RingIcon4 } from 'ui/svgs';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const initialValues = {
	customerCarePolicy: 'upload customer care policy',
	numberOfEmployees: '',
	privacyPolicy: 'upload Upload privacy policy',
	bank: '',
	transportService: '',
	accountNumber: '',
	accountName: ''
};

const banks = [
	{ name: 'UBA' },
	{ name: 'GT Bank' },
	{ name: 'First Bank' },
	{ name: 'Zenith Bank' },
	{ name: 'Wema Bank' }
];

const noOfEmployees = [{ name: 10 }, { name: 20 }, { name: 30 }, { name: 50 }, { name: 100 }];

const BusinessDetails = () => {
	const [values, setValues] = useState(initialValues);
	const history = useHistory();

	const onSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append('bank', values.bank);
		formData.append('name', values.transportService);
		formData.append('account_name', values.accountName);
		formData.append('account_number', values.accountNumber);
		formData.append('number_of_staff', values.numberOfEmployees);
		formData.append('number_of_staff', values.numberOfEmployees);
		formData.append('privacy_policy', values.privacyPolicy);
		formData.append('customer_care_policy', values.customerCarePolicy);

		let token = localStorage.getItem('vendorToken');
		console.log(formData);
		// history.push('/vendor/auth/welcome');
	};

	const handleInputChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.type !== 'file' ? target.value : target.files[0];
		setValues({
			...values,
			[name]: value
		});
	};

	return (
		<AuthCard className={styles('card-container')}>
			<View className={styles('card-title')} display="flex" alignItems="center">
				<RingIcon4 />
				<View className={styles('col-2')}>
					<Text variant="h4">Business Details</Text>
					<Text>Completed!</Text>
				</View>
			</View>

			<form className={styles('form-container')} onSubmit={onSubmit}>
				<View className={styles('form-section')}>
					<Text color="grey-dark" fontWeight="bold">
						Company details
					</Text>
					<View className={styles('input-group')}>
						<TextInput
							placeholder="Name of Transport Service"
							name="transportService"
							value={values.transportService}
						/>
					</View>
					<View className={styles('input-group')}>
						<SelectField
							options={noOfEmployees}
							value={values.numberOfEmployees}
							onChange={handleInputChange}
							name="numberOfEmployees"
							placeholder="Number of employees"
							isRequired
						/>
					</View>
				</View>
				<View className={styles('form-section')}>
					<Text color="grey-dark" fontWeight="bold">
						Bank details
					</Text>
					<View className={styles('input-group')}>
						<SelectField
							options={banks}
							value={values.bank}
							onChange={handleInputChange}
							name="bank"
							placeholder="Select bank"
							isRequired
						/>
					</View>
					<View className={styles('input-group')}>
						<TextInput
							placeholder="Bank account number"
							name="accountNumber"
							value={values.accountNumber}
						/>
					</View>
					<View className={styles('input-group')}>
						<TextInput
							placeholder="Verify Account name "
							name="accountName"
							value={values.accountName}
						/>
					</View>
				</View>
				<View className={styles('form-section')}>
					<Text color="grey-dark" fontWeight="bold">
						Privacy Policy
					</Text>
					<View className={styles('input-group')}>
						<UploadField
							label={values.privacyPolicy}
							name="privacyPolicy"
							id="privacyPolicy"
							onChange={handleInputChange}
						/>
					</View>
					<View className={styles('input-group')}>
						<Text color="grey-dark" fontWeight="bold">
							Customer Care Policy
						</Text>
						<UploadField
							label={values.customerCarePolicy}
							name="customerCarePolicy"
							id="customerCarePolicy"
							onChange={handleInputChange}
						/>
					</View>
				</View>

				<View className={styles('form-button-container')}>
					<FormButton>SUBMIT</FormButton>
				</View>
			</form>
		</AuthCard>
	);
};

export default BusinessDetails;
