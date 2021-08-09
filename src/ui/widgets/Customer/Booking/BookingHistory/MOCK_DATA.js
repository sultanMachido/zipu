/* eslint-disable react/display-name */
import { ReactComponent as RightArrow } from 'assets/svg/RightArrow.svg';
import React from 'react';
import { formatDate, formatDayString } from 'utils/dateParser';

export const mockData = {
	columns: [
		{
			title: 'Origin',
			dataIndex: 'origin',
			key: 'origin',
			render: (_, { trip: { origin_terminal } }) => (
				<>
					<p>{origin_terminal?.state}</p>
					<span>{origin_terminal?.name}</span>
				</>
			)
		},
		{
			title: 'Origin Date',
			dataIndex: 'originDate',
			key: 'originDate',
			render: (_, { trip: { origin_terminal } }) => (
				<>
					<p>{formatDayString(origin_terminal?.created_at)}</p>
					<span>{formatDate(origin_terminal?.created_at)}</span>
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
			render: (_, { trip: { destination_terminal } }) => (
				<>
					<p>{destination_terminal?.state}</p>
					<span>{destination_terminal?.name}</span>
				</>
			)
		},
		{
			title: 'Arrival Date',
			dataIndex: 'arrivalDate',
			key: 'arrivalDate',
			render: (_, { trip: { destination_terminal } }) => (
				<>
					<p>{formatDayString(destination_terminal?.created_at)}</p>
					<span>{formatDate(destination_terminal?.created_at)}</span>
				</>
			)
		},
		{
			title: 'Cost',
			dataIndex: 'cost',
			key: 'cost',
			// eslint-disable-next-line react/display-name
			render: (_, { trip: { cost } }) => (
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
		}
	]
};
