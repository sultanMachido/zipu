import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Dropdown from 'ui/components/Dropdown';
import Empty from 'ui/components/Empty';
import { ExportIcon, PersonIcon, SearchIcon } from 'ui/svgs';
import AdminLayout from 'ui/widgets/AdminLayout';

import { mockData_StaffManagement } from '../StaffManagement/MOCK_DATA';
import style from './index.module.scss';

const styles = classnames.bind(style);

const dropList = [
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' }
];
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
const btnInfo = {
	title: 'List is empty',
	description: 'When you create a staff profile, they will appear here',
	btnText: 'CREATE STAFF PROFILE',
	btnLink: '/vendor/add-staff',
	component: PersonIcon
};

const PassengerManagement = ({ staff = mockData_StaffManagement.staff }) => {
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
		<AdminLayout>
			<View className={styles('passenger-management-wrapper')}>
				<View className={styles('header')}>
					<View className={styles('title')}>
						<Text variant="h3">Passenger management</Text>
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
								<SearchIcon />
								<TextInput
									type="text"
									placeholder="Search for staff"
									wrapperClass={styles('search')}
								/>
							</View>
						</View>
					</View>
				</View>
				{staff.length ? (
					<>
						<View className={styles('table')}>
							<View className={styles('table-header')}>
								<ul>
									<li>
										<Text>Persenger name</Text>
									</li>
									<li>
										<Text>Email</Text>
									</li>
									<li>
										<Text>Phone Number</Text>
									</li>
									<li>
										<Text>Resident State </Text>
									</li>
									<li>
										<Text>Completed Trips</Text>
									</li>
									<li>
										<Text></Text>
									</li>
								</ul>
							</View>
							<View className={styles('table-container')}>
								{staff.map((each, index) => (
									<View className={styles('table-row')} key={index}>
										<ul>
											<li>
												<Text>{each.name}</Text>
											</li>
											<li>
												<Text>{each.email}</Text>
											</li>
											<li>
												<Text>08130688738</Text>
											</li>
											<li>
												<Text>{each.state}</Text>
											</li>
											<li>
												<Text>2 Upcoming, 1 Completed</Text>
											</li>
											<li>
												<button>View passenger</button>
											</li>
										</ul>
									</View>
								))}
							</View>
						</View>
						<View className={styles('button-container')}>
							<button>
								<ExportIcon />
								<span>Export List csv</span>
							</button>
						</View>
					</>
				) : (
					<Empty {...btnInfo} />
				)}
			</View>
		</AdminLayout>
	);
};

export default PassengerManagement;
