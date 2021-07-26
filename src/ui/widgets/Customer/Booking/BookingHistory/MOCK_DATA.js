/* eslint-disable react/display-name */
import { ReactComponent as RightArrow } from 'assets/svg/RightArrow.svg';
import React from 'react';

export const mockData = {
	columns: [
		{
			title: 'Origin',
			dataIndex: 'origin',
			key: 'origin',
			render: (_, { originState, originPark }) => (
				<>
					<p>{originState}</p>
					<span>{originPark}</span>
				</>
			)
		},
		{
			title: 'Origin Date',
			dataIndex: 'originDate',
			key: 'originDate',
			render: (_, { originDay, originDate }) => (
				<>
					<p>{originDay}</p>
					<span>{originDate}</span>
				</>
			)
		},
		{
			title: '',
			dataIndex: '',
			key: '',
			render: () => (
				<>
					<RightArrow width="50" />
				</>
			)
		},
		{
			title: 'Arrival',
			dataIndex: 'arrival',
			key: 'arrival',
			render: (_, { arrivalState, arrivalPark }) => (
				<>
					<p>{arrivalState}</p>
					<span>{arrivalPark}</span>
				</>
			)
		},
		{
			title: 'Arrival Date',
			dataIndex: 'arrivalDate',
			key: 'arrivalDate',
			render: (_, { arrivalDay, arrivalDate }) => (
				<>
					<p>{arrivalDay}</p>
					<span>{arrivalDate}</span>
				</>
			)
		},
		{
			title: 'Cost',
			dataIndex: 'cost',
			key: 'cost',
			// eslint-disable-next-line react/display-name
			render: (_, { cost }) => (
				<>
					<p>{cost}</p>
				</>
			)
		},

		{
			title: '',
			dataIndex: 'actions',
			key: 'actions',
			// eslint-disable-next-line react/display-name
			render: () => <button className="view">View Receipt</button>
		}
	],

	dataSource: [
		{
			key: '1',
			originPark: 'Ojota motor park',
			originState: 'Lagos',
			originDay: 'Sunday',
			originDate: '25th Dec 2020',
			arrivalState: 'Ile-Ife',
			arrivalPark: 'OAU school gate motor park',
			arrivalDay: 'Sunday',
			arrivalDate: '25th Dec 2020',
			cost: '500,000'
		},
		{
			key: '1',
			originPark: 'Ojota motor park',
			originState: 'Lagos',
			originDay: 'Sunday',
			originDate: '25th Dec 2020',
			arrivalState: 'Ile-Ife',
			arrivalPark: 'OAU school gate motor park',
			arrivalDay: 'Sunday',
			arrivalDate: '25th Dec 2020',
			cost: '500,000'
		},
		{
			key: '1',
			originPark: 'Ojota motor park',
			originState: 'Lagos',
			originDay: 'Sunday',
			originDate: '25th Dec 2020',
			arrivalState: 'Ile-Ife',
			arrivalPark: 'OAU school gate motor park',
			arrivalDay: 'Sunday',
			arrivalDate: '25th Dec 2020',
			cost: '500,000'
		},
		{
			key: '1',
			originPark: 'Ojota motor park',
			originState: 'Lagos',
			originDay: 'Sunday',
			originDate: '25th Dec 2020',
			arrivalState: 'Ile-Ife',
			arrivalPark: 'OAU school gate motor park',
			arrivalDay: 'Sunday',
			arrivalDate: '25th Dec 2020',
			cost: '500,000'
		}
	]
};
