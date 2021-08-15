// import './styles.scss';
import 'react-datepicker/dist/react-datepicker.css';

import classnames from 'classnames/bind';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { SelectField } from 'ui/atoms/components/SelectField';
import { Text, View } from 'ui/atoms/components/Typography';
import { DateIcon } from 'ui/svgs';
import AdminLayout from 'ui/widgets/AdminLayout';

import style from './index.module.scss';
import { TripManagementData } from './MOCK_DATA';
import Trip from './Trip';

const styles = classnames.bind(style);

const options = [
	{ name: 'All' },
	{ name: 'All' },
	{ name: 'All' },
	{ name: 'All' },
	{ name: 'All' }
];
const initialValues = {
	CACDocument: 'upload Upload CAC documents',
	reservationWindow: '',
	uploadPermit: 'Upload permit',
	platformOptions: ''
};

// const today = {
// 	id: 0,
// 	startingPoint: 'new Date()',
// 	destination: '',
// 	terminal: '',
// 	percentageBooked: 0,
// 	departureTime: new Date().getHours().getMinutes(),
// 	tripStatus: '',
// 	vehiclePlateNumber: ''
// };

const TripManagement = (props) => {
	const [values, setValues] = useState(initialValues);
	const [startDate, setStartDate] = useState(null);
	const inputSize = 'meduim';

	const handleInputChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.type !== 'file' ? target.value : target.files[0];
		setValues({
			...values,
			[name]: value
		});
	};
	const onChange = () => {};

	const onOk = () => {};

	const handleClick = () => {
		props.history.push('/trip-management/add');
	};

	return (
		<AdminLayout>
			<View className={styles('tripManagementWrapper')}>
				<View className={styles('header')}>
					<View className={styles('title')}>
						<Text variant="h3">Current booking</Text>
					</View>
					<View className={styles('actions')}>
						<View className={styles('input-group')}>
							<View className={styles('input')}>
								<Text>Terminal:</Text>
								<SelectField
									options={options}
									value={values.reservationWindow}
									onChange={handleInputChange}
									name="reservationWindow"
									wrapperClass={styles('search')}
									isRequired
								/>
							</View>
						</View>
						<View className={styles('input-group')}>
							<View className={styles('input')}>
								<Text>Time:</Text>
								<SelectField
									options={options}
									value={values.reservationWindow}
									onChange={handleInputChange}
									name="reservationWindow"
									wrapperClass={styles('search')}
									isRequired
								/>
							</View>
						</View>
						<View className={styles('input-group')}>
							<View className={styles('input')}>
								<DateIcon />
								<DatePicker
									placeholderText="Today"
									selected={startDate}
									onChange={(date) => setStartDate(date)}
								/>
							</View>
						</View>
					</View>
				</View>

				<View className={styles('tripManagementContent')}>
					{TripManagementData.length === 0 ? null : (
						<View className={styles('tripDate')}>
							<View>
								<Text className={styles('tripTime')}>Today</Text>
							</View>
							<View className={styles('seperator')}>
								<View className={styles('circle')}></View>
								<View className={styles('dottedLine')}></View>
							</View>
							<View>
								<Text fontWeight="700">October 28 2020</Text>
							</View>
						</View>
					)}

					{TripManagementData.length === 0 ? (
						<View>hello</View>
					) : (
						// <EmptyScreen
						// 	icon={<GrFormLocation />}
						// 	title="No trips yet"
						// 	subText="When you have trips, they will appear here"
						// 	buttonText="ADD TRIPS"
						// 	handleClick={handleClick}
						// />
						TripManagementData.map((trip) => {
							return <Trip key={trip.id} record={trip} />;
						})
					)}
				</View>
			</View>
		</AdminLayout>
	);
};

export default TripManagement;
