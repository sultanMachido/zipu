import React from 'react';

export const staffColumns = () => [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (_, { name, email }) => (
			<>
				<p>{name}</p>
				<span>{email}</span>
			</>
		)
	},
	{
		title: 'Station',
		dataIndex: 'station',
		key: 'station',
		render: (_, { state, terminal }) => (
			<>
				<p>{state}</p>
				<span>{terminal}</span>
			</>
		)
	},
	{
		title: 'Position',
		dataIndex: 'position',
		key: 'position',
		render: (_, { position, access }) => (
			<>
				<p>{position}</p>
				<span>{access}</span>
			</>
		)
	},
	{
		title: 'Date created',
		dataIndex: 'created_at',
		key: 'created_at',
		render: created_at => (
			<>
				<p>{created_at}</p>
				<span>&nbsp;</span>
			</>
		)
	},
	{
		title: 'Login activity',
		dataIndex: 'loginActivity',
		key: 'loginActivity',
		render: (_, { loginActivity, logsCount }) => (
			<>
				<p>{loginActivity}</p>
				<span>
					{logsCount} log{logsCount !== 1 ? 's' : ''} this month
				</span>
			</>
		)
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		render: status => <div className="status">{status === 1 ? 'Active' : 'Disabled'}</div>
	},
	{
		title: 'Action',
		dataIndex: 'actions',
		key: 'actions'
	}
];
