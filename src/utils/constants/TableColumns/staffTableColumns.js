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
		render: (created_at) => (
			<>
				<p>{created_at}</p>
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
		render: (status) => {
			return (
				<div>
					{status === 1 ? (
						<p
							style={{
								color: '#FF9633',
								background: 'rgba(255, 150, 51, 0.2)',
								padding: '8px 18px',
								borderRadius: '100px',
								textAlign: 'center'
							}}>
							Active{' '}
						</p>
					) : (
						<p
							style={{
								color: '#637A87',
								background: '#E3EAED',
								padding: '8px 18px',
								borderRadius: '100px',
								textAlign: 'center'
							}}>
							Disabled
						</p>
					)}
				</div>
			);
		}
	},
	{
		title: 'Action',
		dataIndex: 'actions',
		key: 'actions'
	}
];
