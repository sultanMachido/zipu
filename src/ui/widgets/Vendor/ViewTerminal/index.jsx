import ProgressBar from '@ramonak/react-progress-bar';
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Link } from 'react-router-dom';
import Container from 'ui/atoms/components/Container';
import { SelectField } from 'ui/atoms/components/SelectField';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import StarRating from 'ui/components/StarRating';
import { ArrowRightIcon, ChevRightIcon, SearchIcon } from 'ui/svgs';
import ActivityLayout from 'ui/widgets/ActivityLayout';
import AdminLayout from 'ui/widgets/AdminLayout';

import style from './index.module.scss';
import { mockData_ViewTerminal } from './MOCK_DATA';

const styles = classnames.bind(style);

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

const ViewTerminal = ({ buses = mockData_ViewTerminal.buses }) => {
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
		<ActivityLayout>
			<View className={styles('view-terminal-wrapper')}>
				<Container className={styles('inner-wrapper')}>
					<View className={styles('header')}>
						<Text variant="h4">Alimosho Terminal</Text>
						<View className={styles('actions')}>
							<View className={styles('input-group')}>
								<View className={styles('input')}>
									<Text>Order:</Text>
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
									<Text>Routes:</Text>
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
										placeholder="Search for bus"
										wrapperClass={styles('search')}
									/>
								</View>
							</View>
						</View>
					</View>
					<View className={styles('row')}>
						<View className={styles('first-column')}>
							<View className={styles('table-container')}>
								<View className={styles('heading')}>
									<Text variant="h4">Buses</Text>
									<Text variant="h2">234 total buses</Text>
								</View>
								<View className={styles('table')}>
									{buses.map((each, index) => (
										<View className={styles('table-row')} key={index}>
											<ul>
												<li>
													<Text>#{each.number}</Text>
												</li>
												<li>
													<Text>{each.name}</Text>
												</li>
												<li>
													<Text>{each.travel}</Text>
												</li>
												<li>
													<Text>{each.plate}</Text>
												</li>
												<li>
													<StarRating rating={each.rating} />
												</li>
												<li>
													<Text className={styles('status')}>{each.status}</Text>
												</li>
												<li>
													{/* <button>Edit roles</button> */}
													<ChevRightIcon />
												</li>
											</ul>
										</View>
									))}
								</View>
							</View>
						</View>
						<View className={styles('second-column')}>
							<View className={styles('vehicles')}>
								<Text variant="h4">Vehicles</Text>
								<View className={styles('progress-row')}>
									<View className={styles('pie')}>
										<View className={styles('pie-label')}>
											<Text variant="h4">235</Text>
											<Text>Total</Text>
										</View>
										<PieChart
											className="chart"
											style={{ position: 'relative' }}
											lineWidth={15}
											data={[
												{ title: 'One', value: 75, color: '#27AE60' },
												{ title: 'Two', value: 25, color: 'rgba(39, 174, 96, 0.2)' }
											]}
											radius={40}
										/>
									</View>
									<View className={styles('progress-bars')}>
										<View className={styles('bar')}>
											<View className={styles('texts')}>
												<Text variant="h4">Active</Text>
												<Text>
													902 <span>/ 75%</span>{' '}
												</Text>
											</View>
											<ProgressBar
												isLabelVisible={false}
												height="7px"
												bgColor="#27AE60"
												completed={75}
											/>
										</View>
										<View className={styles('bar')}>
											<View className={styles('texts')}>
												<Text variant="h4">Inactive</Text>
												<Text>
													71 <span>/ 25%</span>{' '}
												</Text>
											</View>
											<ProgressBar
												isLabelVisible={false}
												height="7px"
												bgColor="rgba(39, 174, 96, 0.2)"
												completed={25}
											/>
										</View>
									</View>
								</View>
								<Link className={styles('link')} to="/">
									Modify terminal
								</Link>
							</View>
							<View className={styles('vehicles', 'odd')}>
								<Text>Average number of passengers</Text>
								<View className={styles('number-group')}>
									<View className={styles('numbers')}>
										<Text variant="h4">17,050</Text>
										<Text>Total this month</Text>
									</View>
									<View className={styles('numbers')}>
										<Text variant="h4">17,050</Text>
										<Text>Vs last month</Text>
									</View>
									<View className={styles('numbers')}>
										<Text variant="h4">65,901</Text>
										<Text>All time passengers</Text>
									</View>
								</View>
							</View>
							<View className={styles('vehicles')}>
								<Text variant="h4">Staff management</Text>
								<View className={styles('progress-row')}>
									<View className={styles('pie')}>
										<View className={styles('pie-label')}>
											<Text variant="h4">17</Text>
											<Text>Total</Text>
										</View>
										<PieChart
											lineWidth={15}
											data={[
												{ title: 'One', value: 10, color: '#E38627' },
												{ title: 'Two', value: 15, color: '#C13C37' }
											]}
											radius={40}
										/>
									</View>
									<View className={styles('progress-bars')}>
										<View className={styles('bar')}>
											<View className={styles('texts')}>
												<Text variant="h4">Active access</Text>
												<Text>
													71 <span>/ 25%</span>{' '}
												</Text>
											</View>
											<ProgressBar
												isLabelVisible={false}
												height="7px"
												bgColor="#0077CE"
												completed={25}
											/>
										</View>
										<View className={styles('bar')}>
											<View className={styles('texts')}>
												<Text variant="h4">Disabled access</Text>
												<Text>
													71 <span>/ 25%</span>{' '}
												</Text>
											</View>
											<ProgressBar
												isLabelVisible={false}
												height="7px"
												bgColor="#FFBC00"
												completed={25}
											/>
										</View>
									</View>
								</View>
								<Link className={styles('link')} to="/">
									View terminal staff
								</Link>
							</View>
						</View>
					</View>
				</Container>
			</View>
		</ActivityLayout>
	);
};

export default ViewTerminal;
