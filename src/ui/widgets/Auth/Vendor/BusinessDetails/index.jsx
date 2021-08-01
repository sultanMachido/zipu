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

const options = [
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' }
];

const BusinessDetails = () => {
	const [values, setValues] = useState(initialValues);
	const history = useHistory();

	const onSubmit = () => {
		history.push('/vendor/auth/business');
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
							options={options}
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
							options={options}
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
						Policy
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
