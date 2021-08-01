import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Toggle from 'ui/components/Toggle';
import { SearchIcon } from 'ui/svgs';
import ActivityLayout from 'ui/widgets/ActivityLayout';

import style from './index.module.scss';

const options = [
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' },
	{ name: 'hello' }
];
const terminalOptions = [
	{
		name: 'YabaTerminal',
		text: 'Yaba terminal'
	},
	{
		name: 'AlimoshoTerminal',
		text: 'Alimosho terminal'
	},
	{
		name: 'AbujaTerminal',
		text: 'Abuja terminal'
	}
];
const initialValues = {
	CACDocument: 'upload Upload CAC documents',
	reservationWindow: '',
	uploadPermit: 'Upload permit',
	platformOptions: ''
};

const styles = classnames.bind(style);

const CreateTerminal = () => {
	const [active, setActive] = useState(false);
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
	const handleChange = () => {
		setActive(!active);
	};
	return (
		<ActivityLayout>
			<View className={styles('add-staff-wrapper')}>
				<Container className={styles('inner-wrapper')}>
					<View className={styles('header')}>
						<Text variant="h4">Account Creation</Text>
						<Toggle state={active} handleChange={handleChange} />
					</View>
					<form>
						<View className={styles('row')}>
							<View className={styles('second-column')}>
								<View className={styles('input-group')}>
									<TextInput
										type="text"
										placeholder="Name of termminal"
										wrapperClass={styles('field')}
									/>
								</View>
								<View className={styles('input-group')}>
									<TextInput
										type="text"
										placeholder="Address of terminal"
										wrapperClass={styles('field')}
									/>
								</View>
								<View className={styles('terminal')}>
									<Text>Select bus to add to terminal</Text>
									<View className={styles('input-row')}>
										<View className={styles('input-group', 'check')}>
											<input type="checkbox" name="select-all" id="select-all" />
											<label htmlFor="select-all">Select all (1 Selected)</label>
										</View>
										<View className={styles('input-group')}>
											<View className={styles('input')}>
												<SearchIcon />
												<TextInput
													type="text"
													placeholder="Search for staff"
													wrapperClass={styles('search')}
												/>
											</View>
										</View>
									</View>
									<View className={styles('terminals-group')}>
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group', 'check')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group', 'check')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group', 'check')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group', 'check')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
									</View>
								</View>
							</View>
							<View className={styles('first-column')}>
								<View className={styles('input-group')}>
									<SelectField
										options={options}
										value={values.reservationWindow}
										onChange={handleInputChange}
										name="reservationWindow"
										placeholder="State"
										wrapperClass={styles('field')}
										isRequired
									/>
								</View>
								<View className={styles('input-group')}>
									<SelectField
										options={options}
										value={values.reservationWindow}
										onChange={handleInputChange}
										name="reservationWindow"
										placeholder="City/Town"
										wrapperClass={styles('field')}
										isRequired
									/>
								</View>
								<View className={styles('button-container')}>
									<FormButton>CREATE TERMINAL</FormButton>
								</View>
							</View>
						</View>
					</form>
				</Container>
			</View>
		</ActivityLayout>
	);
};

export default CreateTerminal;
