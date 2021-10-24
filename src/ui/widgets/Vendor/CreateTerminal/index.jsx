import classnames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Facebook } from 'react-spinners-css';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Toggle from 'ui/components/Toggle';
import { SearchIcon } from 'ui/svgs';
import ActivityLayout from 'ui/widgets/ActivityLayout';

import { APIService } from '../../../../config/apiConfig';
import { addTerminal } from '../../../../redux/actions/terminals/terminals.action';
import { fetchAllVehicles } from '../../../../redux/actions/vehicles/vehicles.actions';
import { getAPIError } from '../../../../utils/errorHandler/apiErrors';
import style from './index.module.scss';

const states = require('../../../../utils/generateCities');

const options = [...states.generatedStates];
const terminalOptions = [
	{
		name: 'YabaTerminal',
		text: 'Yaba terminal',
		id: 1
	},
	{
		name: 'AlimoshoTerminal',
		text: 'Alimosho terminal',
		id: 2
	},
	{
		name: 'AbujaTerminal',
		text: 'Abuja terminal',
		id: 3
	}
];
const initialValues = {
	name: '',
	address: '',
	vehicles: [],
	city: '',
	state: ''
};

const styles = classnames.bind(style);

const DisplayBuses = ({ id, name, text, change }) => (
	<View key={id} className={styles('input-group', 'check')}>
		<input type="checkbox" name={name} id={id} onChange={change} className="check" />
		<label htmlFor={name}>{text}</label>
	</View>
);

const CreateTerminal = (props) => {
	const [active, setActive] = useState(false);
	const [values, setValues] = useState(initialValues);
	const [cities, setCities] = useState([]);
	const [busesSelected, setBusesSelected] = useState(0);
	const [selectAll, setSelectAll] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');
	const [buses, setBuses] = useState([]);

	let history = useHistory();

	useEffect(() => {
		getTranscoVehicles();
	}, []);

	const getTranscoVehicles = async () => {
		console.log(localStorage.zipuUser, 'user');
		const { vehicles, fetchAllVehiclesLoading } = props.vehicles;
		try {
			let response = await props.fetchAllVehicles(JSON.parse(localStorage.zipuUser).transco_id);
			console.log(response);
			if (response.fetchVehiclesStatus) {
				console.log(props.vehicles);
			}
		} catch (error) {
			if (error.response) {
				setIsLoading(false);
				let errorMessage = getAPIError(error.response.data.message);
				console.log(errorMessage);
				setErrorMessage(errorMessage);
			} else if (error.request) {
				setIsLoading(false);
				setErrorMessage(error.request);
				console.log(error.request);
			} else {
				setIsLoading(false);
				console.log('Error', error.message);
			}
		}
	};

	const handleInputChange = (e) => {
		console.log(e.nativeEvent.target);
		const target = e.target;

		if (target.type === 'text') {
			setValues({ ...values, [target.name]: target.value });
		}

		if (target.name === 'state') {
			console.log(target.value);
			let cities = states.getCities(target.value);
			setCities([...cities]);
			setValues({ ...values, [target.name]: target.value });
		}

		if (target.name === 'city') {
			setValues({ ...values, [target.name]: target.value });
		}
	};
	const handleChange = () => {
		setActive(!active);
	};
	const handleCheckboxChange = (e) => {
		console.log();
		if (e.nativeEvent.target.checked) {
			setBusesSelected((prev) => prev + 1);
		} else {
			setBusesSelected((prev) => prev - 1);
		}
	};

	const handleSelectAll = (e) => {
		let checkBoxes = document.getElementsByClassName('check');
		let checkBoxesArray = [...checkBoxes];
		let numberOfCheckboxes = checkBoxesArray.length;
		if (e.nativeEvent.target.checked) {
			setBusesSelected(0);
			checkBoxesArray.map((checkBox) => (checkBox.checked = true));
			setBusesSelected((prev) => prev + numberOfCheckboxes);
		} else {
			checkBoxesArray.map((checkBox) => (checkBox.checked = false));
			setBusesSelected(0);
		}
	};

	const onSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		let id = [];
		let checkBoxes = document.getElementsByClassName('check');
		// console.log(checkBoxes);
		let checkedBoxes = [...checkBoxes].filter((checkbox) => checkbox.checked);
		console.log(checkedBoxes);
		checkedBoxes.map((checkbox) => {
			// console.log(checkbox.id);
			id.push(Number(checkbox.id));
		});
		setValues({ ...values, vehicles: [...id] });
		console.log(values, 'values');
		try {
			let result = await props.addTerminal(values);
			console.log(result);
			console.log(result.addTerminalStatus);
			if (result.addTerminalStatus) {
				setIsLoading(false);
				setSuccessMessage(result.message);
				history.goBack();
			} else {
				setIsLoading(false);
				toast.error(result.message);
			}
		} catch (error) {
			if (error.response) {
				setIsLoading(false);
				let errorMessage = getAPIError(error.response.data.message);
				console.log(errorMessage);
				setErrorMessage(errorMessage);
			} else if (error.request) {
				setIsLoading(false);
				setErrorMessage(error.request);
				console.log(error.request);
			} else {
				setIsLoading(false);
				console.log('Error', error.message);
			}
		}
	};
	return (
		<ActivityLayout>
			<View className={styles('add-staff-wrapper')}>
				<Container className={styles('inner-wrapper')}>
					<View className={styles('header')}>
						<Text variant="h4">Terminal Creation</Text>
					</View>
					<View>
						<p style={{ paddingLeft: '3px' }}>Add Terminals</p>
					</View>
					<form onSubmit={onSubmit}>
						{errorMessage || ''}
						<View className={styles('row')}>
							<View className={styles('second-column')}>
								<View className={styles('input-group')}>
									<TextInput
										type="text"
										placeholder="Name of termminal"
										wrapperClass={styles('field')}
										onChange={handleInputChange}
										name="name"
									/>
								</View>
								<View className={styles('input-group')}>
									<TextInput
										type="text"
										placeholder="Address of terminal"
										wrapperClass={styles('field')}
										onChange={handleInputChange}
										name="address"
									/>
								</View>
								<View className={styles('terminal')}>
									<Text>Select bus to add to terminal</Text>
									<View className={styles('input-row')}>
										<View className={styles('input-group', 'check')}>
											<input
												type="checkbox"
												name="select-all"
												id="select-all"
												onChange={handleSelectAll}
											/>
											<label htmlFor="select-all">{`Select all (${busesSelected} Selected)`}</label>
										</View>
										<View className={styles('input-group')}>
											<View className={styles('input')}>
												<SearchIcon />
												<TextInput
													type="text"
													placeholder="Search for buses"
													wrapperClass={styles('search')}
												/>
											</View>
										</View>
									</View>
									<View className={styles('terminals-group')}>
										{props.vehicles.data
											? props.vehicles.data.map((option) => <DisplayBuses key={option.id} />)
											: ''}
									</View>
								</View>
							</View>
							<View className={styles('first-column')}>
								<View className={styles('input-group')}>
									<SelectField
										options={options}
										onChange={handleInputChange}
										name="state"
										placeholder="State"
										wrapperClass={styles('field')}
										isRequired
									/>
								</View>
								<View className={styles('input-group')}>
									<SelectField
										options={cities}
										onChange={handleInputChange}
										name="city"
										placeholder="City/Town"
										wrapperClass={styles('field')}
										isRequired
									/>
								</View>
								<View className={styles('button-container')}>
									<FormButton loading={isLoading} className={styles('btn')}>
										CREATE TERMINAL
									</FormButton>
									<p className={styles('success-message')}>{successMessage}</p>
								</View>
							</View>
						</View>
					</form>
				</Container>
			</View>
		</ActivityLayout>
	);
};

const mapStateToProps = (state) => ({
	terminals: state.terminals,
	vehicles: state.vehicles
});

const mapDispatchToProps = {
	addTerminal,
	fetchAllVehicles
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTerminal);
