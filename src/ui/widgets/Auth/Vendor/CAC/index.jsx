import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { SelectField } from 'ui/atoms/components/SelectField';
import { Text, View } from 'ui/atoms/components/Typography';
import { UploadField } from 'ui/atoms/components/UploadField';
import { RingIcon3 } from 'ui/svgs';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const initialValues = {
	CACDocument: 'upload Upload CAC documents',
	reservationWindow: '',
	uploadPermit: 'Upload permit',
	platformOptions: ''
};

const options = [
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' }
];

const CAC = () => {
	const [values, setValues] = useState(initialValues);

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
				<RingIcon3 />
				<View className={styles('col-2')}>
					<Text variant="h4">CAC and Permit submission</Text>
					<Text>Next: Business details</Text>
				</View>
			</View>

			<form className={styles('form-container')}>
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
						<UploadField
							label={values.CACDocument}
							name="CACDocument"
							id="CACDocument"
							onChange={handleInputChange}
						/>
					</View>
					<View className={styles('input-group')}>
						<UploadField
							label={values.uploadPermit}
							name="uploadPermit"
							id="uploadPermit"
							onChange={handleInputChange}
						/>
					</View>
					<View className={styles('input-group')}>
						<SelectField
							options={options}
							value={values.platformOptions}
							onChange={handleInputChange}
							name="platformOptions"
							placeholder="Platform options"
							isRequired
						/>
					</View>
				</View>

				<View className={styles('form-button-container')}>
					<FormButton>NEXT</FormButton>
				</View>
			</form>
		</AuthCard>
	);
};

export default CAC;
