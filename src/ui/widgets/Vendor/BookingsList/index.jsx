import 'react-datepicker/dist/react-datepicker.css';

import classnames from 'classnames/bind';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link, useHistory } from 'react-router-dom';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Dropdown from 'ui/components/Dropdown';
import Empty from 'ui/components/Empty';
import { DateIcon, PersonIcon, SearchIcon } from 'ui/svgs';
import AdminLayout from 'ui/widgets/AdminLayout';

import style from './index.module.scss';
import { mockData_BookingsList } from './MOCK_DATA';

const styles = classnames.bind(style);

const dropList = [
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' }
];

const btnInfo = {
	title: 'List is empty',
	description: 'When you create a staff profile, they will appear here',
	btnText: 'CREATE STAFF PROFILE',
	btnLink: '/',
	component: PersonIcon
};
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

const BookingsList = ({ staff = mockData_BookingsList.staff }) => {
	const history = useHistory();
	const [values, setValues] = useState(initialValues);
	const [startDate, setStartDate] = useState(null);
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
		<AdminLayout>
			<View className={styles('staff-management-wrapper')}>
				<View className={styles('header')}>
					<View className={styles('title')}>
						<Text variant="h3">Current booking</Text>
					</View>
					<View className={styles('actions')}>
						<View className={styles('input-group')}>
							<View className={styles('input')}>
								<Text>Status:</Text>
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
								<Text>Types:</Text>
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
						<View className={styles('input-group')}>
							<View className={styles('input')}>
								<SearchIcon />
								<TextInput
									type="text"
									placeholder="Search booking"
									wrapperClass={styles('search')}
								/>
							</View>
						</View>
					</View>
				</View>
				{staff.length ? (
					<View className={styles('table')}>
						<View className={styles('table-header')}>
							<ul>
								<li>
									<Text>Book</Text>
								</li>
								<li>
									<Text>Status</Text>
								</li>
								<li>
									<Text>Type</Text>
								</li>
								<li>
									<Text>Vehicle</Text>
								</li>
								<li>
									<Text>Depature/Arrival</Text>
								</li>
								<li>
									<Text>Start/End date</Text>
								</li>
								<li>
									<Text></Text>
								</li>
							</ul>
						</View>
						{staff.map((each, index) => (
							<View className={styles('table-row')} key={index}>
								<ul>
									<li>
										<Text>{each.name}</Text>
										<Text>{each.email}</Text>
									</li>
									<li>
										<Text className={styles('status')}>{each.status}</Text>
									</li>
									<li>
										<Text>{each.access}</Text>
									</li>
									<li>
										<Text>{each.vehicleName}</Text>
										<Text>{each.vehiclePlate}</Text>
									</li>
									<li>
										<Text>{each.state}</Text>
										<Text>{each.travelType}</Text>
									</li>
									<li>
										<Text>{each.startDate}</Text>
										<Text>{each.endDate}</Text>
									</li>
									<li>
										<button onClick={() => history.push('/vendor/staff')}>View</button>
									</li>
								</ul>
							</View>
						))}
					</View>
				) : (
					<Empty {...btnInfo} />
				)}
			</View>
		</AdminLayout>
	);
};

export default BookingsList;
