import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import Dropdown from 'ui/components/Dropdown';
import Empty from 'ui/components/Empty';
import { FilterIcon, WarningIcon } from 'ui/svgs';
import AdminLayout from 'ui/widgets/AdminLayout';

import style from './index.module.scss';
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

const TerminalManagement = ({ terminals = [] }) => {
	const [showFilter, setShowFilter] = useState(false);

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
								<button>ADD NEW</button>
							</View>
						</View>
					)}
				</View>
				{terminals.length ? (
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
							{terminals.map((terminal, index) => (
								<View className={styles('card')} key={index}>
									<View className={styles('first-column')}>
										<Text>{terminal.name}</Text>
										<Text variant="small">{terminal.bus}</Text>
										<Text variant="small">{terminal.staff}</Text>
										<Text className={styles('badge')}>View terminal</Text>
									</View>
									<View className={styles('second-column')}>
										<Text className={styles('status-badge')}>{terminal.status}</Text>
									</View>
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

export default TerminalManagement;
