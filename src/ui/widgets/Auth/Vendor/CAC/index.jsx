import axios from 'axios';
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Facebook } from 'react-spinners-css';
import { FormButton } from 'ui/atoms/components/Button';
import { SelectField } from 'ui/atoms/components/SelectField';
import { Text, View } from 'ui/atoms/components/Typography';
import { UploadField } from 'ui/atoms/components/UploadField';
import { RingIcon3 } from 'ui/svgs';

import { APIService } from '../../../../../config/apiConfig';
import { getAPIError } from '../../../../../utils/errorHandler/apiErrors';
import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const initialValues = {
	CACDocument: { title: 'Upload CAC documents', files: [], fileBlob: {} },
	reservationWindow: '',
	uploadPermit: { title: 'Upload permit', files: [], fileBlob: {} },
	platformOptions: ''
};

const options = [
	{ name: 'same day' },
	{ name: '24 hours' },
	{ name: '48 hours' },
	{ name: '1 week' }
];

const formatReservationWindow = (time) => {
	if (time === 'same day') {
		return 1;
	}

	if (time === '24 hours') {
		return 24;
	}

	if (time === '48 hours') {
		return 48;
	}

	if (time === '1 week') {
		return 168;
	}
};

const CAC = () => {
	const [values, setValues] = useState(initialValues);
	const history = useHistory();
	const [inputError, setInputError] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();

		if (
			!values.uploadPermit.files.length ||
			!values.CACDocument.files.length ||
			!values.reservationWindow
		) {
			setErrorMessage('All Fields are required');
			return;
		}
		setIsLoading(true);
		const formData = new FormData();

		let reservationWindow = formatReservationWindow(values.reservationWindow);

		formData.append('reservation_window', reservationWindow);
		// values.uploadPermit.files.map((file) => formData.append('permit', file));
		// values.CACDocument.files.map((file) => formData.append('cac', file));
		// formData.append('cac', values.fileBlob, 'cac');
		formData.append('permit', [...values.uploadPermit.files]);
		formData.append('cac', [...values.CACDocument.files]);

		console.log(formData);

		try {
			let result = await APIService.postMultiPart('/cac-permit-update', formData);
			console.log(result);
			if (result.data.status === 'Success') {
				setIsLoading(false);
				history.push('/vendor/auth/business');
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

	const handleInputChange = (e) => {
		const target = e.target;
		const name = target.name;
		// const value = target.type !== 'file' ? target.value : target.files[0];
		const value = target.type !== 'file' ? target.value : target.files;
		console.log(value, 'value', name);

		value.length > 5 && target.type === 'file'
			? setInputError({ [name]: 'Files should not be more than 5' })
			: '';

		if (value.length <= 5 && target.type === 'file') {
			const { length, ...rest } = value;
			let uploadedFiles = Object.values(rest);
			// console.log(uploadedFiles, 'uploads');
			setValues({
				...values,
				[name]: { title: value, files: [...uploadedFiles] }
			});
		}

		if (target.type !== 'file') {
			setValues({
				...values,
				[name]: value
			});
		}
	};

	return (
		<AuthCard className={styles('card-container')}>
			<View className={styles('card-title')} display="flex" alignItems="center">
				<RingIcon3 />
				<View className={styles('col-2')}>
					<Text variant="h4">CAC and Permit submission</Text>
					<Text>Next: Business details</Text>
				</View>
			</View>

			<form className={styles('form-container')} onSubmit={onSubmit}>
				{errorMessage ? <Text className={styles('error-text')}>{errorMessage}</Text> : ''}
				<View>
					<View className={styles('input-group')}>
						<SelectField
							options={options}
							value={values.reservationWindow}
							onChange={handleInputChange}
							name="reservationWindow"
							placeholder="Select reservation window"
							isRequired
						/>
					</View>
					<View className={styles('input-group')}>
						{inputError.CACDocument ? (
							<h3 style={{ color: 'red' }}>{inputError.CACDocument}</h3>
						) : (
							''
						)}
						{/* <UploadField
							label={values.CACDocument.title}
							name="CACDocument"
							id="CACDocument"
							onChange={handleInputChange}
							multiple
						/> */}

						<input
							type="file"
							className={styles('label')}
							name="CACDocument"
							onChange={handleInputChange}
							multiple
						/>
						<View>
							{values.CACDocument.files
								? values.CACDocument.files.map((file, index) => (
										<span style={{ color: 'grey', margin: '0.5em' }} key={index}>
											{file.name}
										</span>
								  ))
								: ''}
						</View>
					</View>
					<View className={styles('input-group')}>
						{inputError.uploadPermit ? (
							<h3 style={{ color: 'red' }}>{inputError.uploadPermit}</h3>
						) : (
							''
						)}
						{}
						{/* <UploadField
							label={values.uploadPermit.title}
							name="uploadPermit"
							id="uploadPermit"
							onChange={handleInputChange}
							multiple
						/> */}

						<input
							type="file"
							className={styles('label')}
							name="uploadPermit"
							onChange={handleInputChange}
							multiple
						/>
						<View>
							{values.uploadPermit.files
								? values.uploadPermit.files.map((file, index) => (
										<span style={{ color: 'grey', margin: '0.5em' }} key={index}>
											{file.name}
										</span>
								  ))
								: ''}
						</View>
					</View>
					{/* <View className={styles('input-group')}>
						<SelectField
							options={options}
							value={values.platformOptions}
							onChange={handleInputChange}
							name="platformOptions"
							placeholder="Platform options"
							isRequired
						/>
					</View> */}
				</View>

				<View className={styles('form-button-container')}>
					<FormButton loading={isLoading}>NEXT</FormButton>
				</View>
			</form>
		</AuthCard>
	);
};

export default CAC;
