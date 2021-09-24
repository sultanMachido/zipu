import './index.scss';

import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';

import Header from '../Header';
import style from './index.module.scss';
import { mockData_AdminHeader } from './MOCK_DATA';

let styles = classNames.bind(style);

const AdminLayout = ({ children }) => {
	const { links } = mockData_AdminHeader;
	const initialState = {
		userInfo: '',
		isAuthenticated: ''
	};
	const [login, setLogin] = useState(initialState);
	useEffect(() => {
		localStorage.userType ? setLogin({ userInfo: '', isAuthenticated: true }) : '';
		console.log(localStorage.userType);
	}, []);
	return (
		<View className={styles('admin-layout-wrapper')}>
			<Header login={{ userInfo: '', isAuthenticated: true }} />
			<View className={styles('admin-header')}>
				<ul className="header-linkss">
					{links.length &&
						links.map((link) => (
							<li key={link.title}>
								<NavLink to={link.url}>
									<Text variant="p">{link.title}</Text>
									<Text variant="small">{link.text}</Text>
								</NavLink>
							</li>
						))}
				</ul>
			</View>
			<View className={styles('body')}>
				<Container>{children}</Container>
			</View>
		</View>
	);
};

export default AdminLayout;
