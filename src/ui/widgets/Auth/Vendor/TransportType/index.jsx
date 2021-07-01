import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { BusIcon, CarIcon, RingIcon2, SeatIcon } from 'ui/svgs';

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

			<form className={styles('form-container')}>
				<View>
					<Text fontWeight="bold" className={styles('label')}>
						What type of operation?
					</Text>
					<View
						className={styles('operation-options')}
						display="flex"
						justifyContent="space-between"
						alignItems="center">
						{options.map((option) => (
							<View key={option.name} className={styles('input-group')}>
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
					<View className={styles('input-group')}>
						<TextInput
							label="Company size"
							type="tel"
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
					<FormButton>NEXT</FormButton>
				</View>
			</form>
		</AuthCard>
	);
};

export default TransportType;
