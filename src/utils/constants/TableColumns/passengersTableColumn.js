/* eslint-disable react/display-name */
import React from 'react';

export const passengersColumns = () => [
	{
		title: 'Passenger Name',
		dataIndex: 'name',
		key: 'name',
		render: (_, { name }) => (
			<>
				<p>{name}</p>
			</>
		)
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
		render: (_, { email }) => (
			<>
				<p>{email}</p>
			</>
		)
	},
	{
		title: 'Phone Number',
		dataIndex: 'phone number',
		key: 'phone number',
		render: (_, { phoneNumber }) => (
			<>
				<p>{phoneNumber}</p>
			</>
		)
	},
	{
		title: 'Resident State',
		dataIndex: 'Resident State',
		key: 'Resident State',
		render: (_, { residentState }) => (
			<>
				<p>{residentState}</p>
			</>
		)
	},
	{
		title: 'Completed Trips',
		dataIndex: 'completedTrips',
		key: 'completedTrips',
		render: (_, { completedTrips }) => (
			<>
				<p>{completedTrips}</p>
			</>
		)
	},
	{
		title: '',
		dataIndex: 'action',
		key: 'action',
		width: 100
	}
];
