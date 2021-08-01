import classnames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Dropdown from 'ui/components/Dropdown';
import Empty from 'ui/components/Empty';
import { PersonIcon, SearchIcon } from 'ui/svgs';
import AdminLayout from 'ui/widgets/AdminLayout';

import style from './index.module.scss';

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

const TerminalStaff = ({ staff = [] }) => {
	return (
		<AdminLayout>
			<View className={styles('staff-management-wrapper')}>
				<View className={styles('header')}>
					<View className={styles('title')}>
						<Text variant="h3">Alimosho Terminal staff</Text>
					</View>
					<View className={styles('actions')}>
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
					<View className={styles('table-container')}>
						<View className={styles('heading')}>
							<Text variant="h4">Staff</Text>
							<Text variant="h2">234 total staff</Text>
						</View>
						<View className={styles('table')}>
							<View className={styles('table-header')}>
								<ul>
									<li>
										<Text>Name</Text>
									</li>
									<li>
										<Text>Station</Text>
									</li>
									<li>
										<Text>Position/Access</Text>
									</li>
									<li>
										<Text>Date Created</Text>
									</li>
									<li>
										<Text>Login activity</Text>
									</li>
									<li>
										<Text>Status</Text>
									</li>
									<li>
										<Text>Action</Text>
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
											<Text>{each.state}</Text>
											<Text>{each.terminal}</Text>
										</li>
										<li>
											<Text>{each.position}</Text>
											<Text>{each.access}</Text>
										</li>
										<li>
											<Text>{each.access}</Text>
										</li>
										<li>
											<Text>{each.loginStatus}</Text>
											<Link to="/">View staff activity</Link>
										</li>
										<li>
											<Text className={styles('status')}>{each.status}</Text>
										</li>
										<li>
											<button>Edit roles</button>
										</li>
									</ul>
								</View>
							))}
						</View>
					</View>
				) : (
					<Empty {...btnInfo} />
				)}
			</View>
		</AdminLayout>
	);
};

export default TerminalStaff;
