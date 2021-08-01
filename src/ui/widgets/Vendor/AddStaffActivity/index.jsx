import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Toggle from 'ui/components/Toggle';
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

const AddStaff = () => {
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
							<View className={styles('first-column')}>
								<View className={styles('input-group')}>
									<TextInput type="text" placeholder="Full name" wrapperClass={styles('field')} />
								</View>
								<View className={styles('input-group')}>
									<TextInput
										type="email"
										placeholder="Email Address"
										wrapperClass={styles('field')}
									/>
								</View>
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
										placeholder="Select Role"
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
										placeholder="Assign specific terminal"
										wrapperClass={styles('field')}
										isRequired
									/>
								</View>
								<View className={styles('button-container')}>
									<FormButton>ADD NEW STAFF</FormButton>
								</View>
							</View>
							<View className={styles('second-column')}>
								<View className={styles('input-group')}>
									<TextInput type="text" placeholder="Position" wrapperClass={styles('field')} />
								</View>
								<View className={styles('input-group')}>
									<TextInput
										type="text"
										placeholder="Phone Number"
										wrapperClass={styles('field')}
									/>
								</View>
								<View className={styles('terminal')}>
									<Text>Allocate terminal to this user</Text>
									<View className={styles('input-group')}>
										<TextInput
											type="text"
											placeholder="Search terminals"
											wrapperClass={styles('terminal-field')}
										/>
									</View>
									<View className={styles('terminals-group')}>
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
										{terminalOptions.map((option) => (
											<View key={option.name} className={styles('input-group')}>
												<input type="checkbox" name={option.name} id={option.name} />
												<label htmlFor={option.name}>{option.text}</label>
											</View>
										))}
									</View>
								</View>
							</View>
						</View>
					</form>
				</Container>
			</View>
		</ActivityLayout>
	);
};

export default AddStaff;
