import classnames from 'classnames/bind';
import React, { useState } from 'react';
import Container from 'ui/atoms/components/Container';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Toggle from 'ui/components/Toggle';

import style from './index.module.scss';

const styles = classnames.bind(style);

const options = [
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' }
];
const initialValues = {
	serviceType: '',
	vehicleType: '',
	privacyPolicy: '',
	bank: '',
	transportService: '',
	accountNumber: '',
	accountName: ''
};

const AddVehicleRental = () => {
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
		<View className={styles('view-terminal-wrapper')}>
			<Container className={styles('inner-wrapper')}>
				<View className={styles('toggle-wrapper')}>
					<Toggle />
				</View>
				<View className={styles('row-container')}>
					<View className={styles('first-column')}>
						<View className={styles('input-group')}>
							<TextInput label="Upload image" />
						</View>
						<View className={styles('input-group')}>
							<SelectField
								label="Service Type"
								options={options}
								value={values.serviceType}
								onChange={handleInputChange}
								name="serviceType"
								placeholder="Service Type"
								isRequired
							/>
						</View>
						<View className={styles('input-group')}>
							<TextInput label="Vehicle make" />
						</View>
						<View className={styles('input-group')}>
							<SelectField
								label="Vehicle type"
								options={options}
								value={values.vehicleType}
								onChange={handleInputChange}
								name="vehicleType"
								placeholder="Vehicle Type"
								isRequired
							/>
						</View>
						<View className={styles('input-group')}>
							<TextInput label="Plates number" />
						</View>
						<View className={styles('input-group')}>
							<TextInput label="Seats available" />
						</View>
						<View className={styles('input-group')}>
							<SelectField
								label="Transmission type"
								options={options}
								value={values.vehicleType}
								onChange={handleInputChange}
								name="vehicleType"
								placeholder="Transmission Type"
								isRequired
							/>
						</View>
						<View className={styles('input-group')}>
							<SelectField
								label="Vehicle class"
								options={options}
								value={values.vehicleClass}
								onChange={handleInputChange}
								name="vehicleClass"
								placeholder="Transmission Type"
								isRequired
							/>
						</View>
						<View className={styles('input-group')}>
							<SelectField
								label="Luggage space"
								options={options}
								value={values.luggageSpace}
								onChange={handleInputChange}
								name="luggageSpace"
								placeholder="Luggage space"
								isRequired
							/>
						</View>
						<View className={styles('input-group')}>
							<TextInput label="Luggage capacity (kg)" />
						</View>
						<View className={styles('input-group')}>
							<TextInput label="Doors" />
						</View>
						<View className={styles('input-group')}>
							<TextInput label="Doors" type="radio" />
						</View>
					</View>
					<View className={styles('second-column')}></View>
				</View>
				<View className={styles('button-container')}>
					<button>SAVE VEHICLE</button>
				</View>
			</Container>
		</View>
	);
};

export default AddVehicleRental;
