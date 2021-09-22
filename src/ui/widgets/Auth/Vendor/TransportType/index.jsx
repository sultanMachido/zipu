import axios from 'axios';
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Facebook } from 'react-spinners-css';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { BusIcon, CarIcon, RingIcon2, SeatIcon } from 'ui/svgs';

import { APIService } from '../../../../../config/apiConfig';
import { getAPIError } from '../../../../../utils/errorHandler/apiErrors';
import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classnames.bind(style);

const initialValues = {
	seatBooking: true,
	companySize: '',
	vehicleHire: false,
	vehicleRenting: false
};

const options = [
	{
		name: 'seatBooking',
		icon: SeatIcon,
		text: 'Seat Booking'
	},
	{
		name: 'vehicleHire',
		icon: BusIcon,
		text: 'Vehicle Hire'
	},
	{
		name: 'vehicleRenting',
		icon: CarIcon,
		text: 'Vehicle Renting'
	}
];

const TransportType = () => {
	const [values, setValues] = useState(initialValues);
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		let payload = {
			operations: [],
			company_size: ''
		};

		const { seatBooking, companySize, vehicleHire, vehicleRenting } = values;

		if (seatBooking) {
			payload.operations.push('seat booking');
		}

		if (vehicleHire) {
			payload.operations.push('vehicle hire');
		}

		if (vehicleRenting) {
			payload.operations.push('vehicle renting');
		}

		if (companySize) {
			payload.company_size = companySize;
		}

		console.log(payload, 'payload');

		try {
			let result = await APIService.post('/update-transport-type', values);

			if (result.data.status === 'Success') {
				setIsLoading(false);
				history.push('/vendor/auth/cac');
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

		// history.push('/vendor/auth/cac');
	};
	const handleInputChange = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		setValues({
			...values,
			[name]: value
		});
	};

	const OptionCard = ({ icon: Component, text }) => {
		return (
			<>
				<Component />
				<Text>{text}</Text>
			</>
		);
	};

	return (
		<AuthCard>
			<View className={styles('card-title')} display="flex" alignItems="center">
				<RingIcon2 />
				<View className={styles('col-2')}>
					<Text variant="h3">Transport type</Text>
					<Text>Next: CAC and permit submission</Text>
				</View>
			</View>

			<form className={styles('form-container')} onSubmit={(e) => onSubmit(e)}>
				{errorMessage ? <Text>{errorMessage}</Text> : ''}
				<View>
					<View className={styles('input-group')}>
						<Text fontWeight="bold" className={styles('label')}>
							What type of operation?
						</Text>
						<View
							className={styles('operation-options')}
							display="flex"
							justifyContent="space-between"
							alignItems="center">
							{options.map((option) => (
								<View key={option.name} className={styles('input')}>
									<TextInput
										type="checkbox"
										label={OptionCard(option)}
										labelClass={styles('option-card-label', { ['active']: values[option.name] })}
										name={option.name}
										id={option.name}
										checked={values[option.name]}
										onChange={handleInputChange}
									/>
								</View>
							))}
						</View>
					</View>

					<View className={styles('input-group')}>
						<TextInput
							label="Number of Buses"
							type="text"
							labelClass={styles('label')}
							placeholder="0"
							name="companySize"
							id="companySize"
							isRequired
							value={values.companySize}
							onChange={handleInputChange}
						/>
					</View>
				</View>

				<View className={styles('form-button-container')}>
					<FormButton loading={isLoading}>NEXT</FormButton>
				</View>
			</form>
		</AuthCard>
	);
};

export default TransportType;
