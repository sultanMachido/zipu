import classnames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import Dropdown from 'ui/components/Dropdown';
import Empty from 'ui/components/Empty';
import { FilterIcon, WarningIcon } from 'ui/svgs';
import AdminLayout from 'ui/widgets/AdminLayout';

import { APIService } from '../../../../config/apiConfig';
import { getAPIError } from '../../../../utils/errorHandler/apiErrors';
import style from './index.module.scss';
import { mockData_TerminalManagement } from './MOCK_DATA';
const dropList = [
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' }
];
const btnInfo = {
	title: 'There are no terminals',
	description: 'When you create a staff profile, they will appear here',
	btnText: 'CREATE TERMINAL',
	btnLink: '/',
	component: WarningIcon
};
const styles = classnames.bind(style);

const TerminalManagement = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [terminals, setTerminals] = useState([]);
	const [transco, setTransco] = useState({});
	const [paginationLinks, setPaginationLinks] = useState([]);

	const history = useHistory();

	useEffect(() => {
		getActiveTerminals();
	}, []);

	const getActiveTerminals = async () => {
		const { transco_id } = JSON.parse(localStorage.zipuUser);
		console.log(transco_id);
		try {
			let result = await APIService.get(`/terminals/transco/${transco_id}`);
			if (result.data.status === 'Success') {
				const { terminals, transco } = result.data.data;
				console.log(terminals.links, transco);
				if (terminals.total > 15) {
					setPaginationLinks([...terminals.links]);
				}
				setTerminals([...terminals.data]);
				setTransco({ ...transco });
				setIsLoading(false);
			}
		} catch (error) {
			if (error.response) {
				setIsLoading(false);
				let errorMessage = getAPIError(error.response.data.message);

				setErrorMessage(errorMessage);
			} else if (error.request) {
				setIsLoading(false);
				setErrorMessage(error.request);
				// console.log(error.request);
			} else {
				setIsLoading(false);
				console.log('Error', error.message);
			}
		}
	};

	const paginate = async (e, url) => {
		e.preventDefault();
		console.log(url);
		if (url) {
			try {
				let result = await APIService.get(url);
				if (result.data.status === 'Success') {
					const { terminals, transco } = result.data.data;
					console.log(terminals.links, transco);
					// if (terminals.total > 15) {
					// 	setPaginationLinks([...terminals.links]);
					// }
					setPaginationLinks([...terminals.links]);
					setTerminals([...terminals.data]);
				}
			} catch (error) {
				if (error.response) {
					setIsLoading(false);
					let errorMessage = getAPIError(error.response.data.message);

					setErrorMessage(errorMessage);
				} else if (error.request) {
					setIsLoading(false);
					setErrorMessage(error.request);
					// console.log(error.request);
				} else {
					setIsLoading(false);
					console.log('Error', error.message);
				}
			}
		}
	};

	return (
		<AdminLayout>
			<View className={styles('terminal-management-wrapper')}>
				<View className={styles('header')}>
					<View className={styles('title')}>
						<Text variant="h3">
							Terminal <span>All</span>
						</Text>
					</View>
					{terminals.length && (
						<View className={styles('actions')}>
							<View className={styles('dropdown')}>
								<Text>Terminal: </Text> <Dropdown dropList={dropList} text="All terminals" />
							</View>
							<View className={styles('dropdown')}>
								<Text>Terminal: </Text> <Dropdown dropList={dropList} text="All terminals" />
							</View>
							<View className={styles('button-container', 'red')}>
								<button onClick={() => setShowFilter(!showFilter)}>
									<FilterIcon />
									<span>Filter</span>
								</button>
							</View>
							<View className={styles('button-container')}>
								<button onClick={() => history.push('/vendor/create-terminal')}>ADD NEW</button>
							</View>
						</View>
					)}
				</View>
				{terminals.length ? (
					<View>
						<View className={styles('row')}>
							<View className={styles('filter', { ['active']: showFilter })}>
								<View className={styles('group-1')}>
									<Text> Terminals</Text>
									<View className={styles('inputs')}>
										<ul>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">All</label>
											</li>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">Ikorodu</label>
											</li>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">Uselu</label>
											</li>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">Aba</label>
											</li>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">Iyana Ipaja</label>
											</li>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">Abule Egba</label>
											</li>
										</ul>
									</View>
								</View>
								<View className={styles('group-2')}>
									<Text>Status</Text>
									<View className={styles('inputs')}>
										<ul>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">All</label>
											</li>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">Active</label>
											</li>
											<li>
												<input type="checkbox" name="" id="input" />
												<label htmlFor="input">Deactivated</label>
											</li>
										</ul>
									</View>
								</View>
							</View>
							<View className={styles('cards')}>
								{isLoading ? 'loading...' : ''}
								{terminals.map((terminal, index) => (
									<View className={styles('card')} key={index}>
										<View className={styles('first-column')}>
											<Text>{terminal.name}</Text>
											<Text variant="small">{`${transco.number_of_buses || 0} Buses`}</Text>
											<Text variant="small">{`${transco.number_of_staff || 0}  Staffs`}</Text>
											<Text
												className={styles('badge')}
												onClick={() => history.push('/vendor/view-terminal')}>
												View terminal
											</Text>
										</View>
										<View className={styles('second-column')}>
											<Text className={styles('status-badge')}>
												{terminal.status ? 'active' : 'deactivated'}
											</Text>
										</View>
									</View>
								))}
							</View>
						</View>
						<View className={styles('pagination-style')}>
							{paginationLinks.map(({ url, label, active }, index) => (
								<a
									href={url}
									key={label}
									onClick={(e) => paginate(e, url)}
									className={active ? styles('pagination-link-active') : ''}>
									{index === 0 ? 'prev' : index === paginationLinks.length - 1 ? 'next' : label}
								</a>
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

export default TerminalManagement;
