import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import Dropdown from 'ui/components/Dropdown';
import Empty from 'ui/components/Empty';
import { FilterIcon, LuggageIcon, StopwatchIcon, WarningIcon } from 'ui/svgs';
import { LocationIcon } from 'ui/svgs/LocationIcon';
import AdminLayout from 'ui/widgets/AdminLayout';

import car from '../../../../assets/img/trip.png';
import style from './index.module.scss';
const dropList = [
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' },
	{ text: 'link', url: '/' }
];
const btnInfo = {
	title: 'List is empty',
	description: 'When you add a vehicle, they will appear here',
	btnText: 'ADD VEHICLE',
	btnLink: '/',
	component: WarningIcon
};
const styles = classnames.bind(style);

const VehicleListing = ({ terminals = [] }) => {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<AdminLayout>
			<View className={styles('terminal-management-wrapper')}>
				<View className={styles('header')}>
					<View className={styles('title')}>
						<Text variant="h3">Trip and car list</Text>
					</View>
					<View className={styles('actions')}>
						<View className={styles('button-container', 'red')}>
							<button onClick={() => setShowFilter(!showFilter)}>
								<FilterIcon />
								<span>Filter</span>
							</button>
						</View>
						<View className={styles('button-container')}>
							<button>Add Vehicle</button>
						</View>
					</View>
				</View>
				{terminals.length ? (
					<View className={styles('row')}>
						<View className={styles('filter', { ['active']: showFilter })}>
							<View className={styles('group-1')}>
								<Text> Vehicle type</Text>
								<View className={styles('inputs')}>
									<ul>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">Sedan</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">Medium</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">SUV</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">BUS</label>
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
											<label htmlFor="input">Available</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">Not Available</label>
										</li>
									</ul>
								</View>
							</View>
							<View className={styles('group-2')}>
								<Text>Usage</Text>
								<View className={styles('inputs')}>
									<ul>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">intra-state</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">inter-state</label>
										</li>
									</ul>
								</View>
							</View>
							<View className={styles('group-2')}>
								<Text>Usage</Text>
								<View className={styles('inputs')}>
									<ul>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">Within State</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">Inter State</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">SUV</label>
										</li>
										<li>
											<input type="checkbox" name="" id="input" />
											<label htmlFor="input">BUS</label>
										</li>
									</ul>
								</View>
							</View>
							<View className={styles('group-2')}>
								<Text>Primary State</Text>
								<View className={styles('inputs')}>
									<ul>
										<li>
											<select name="" id="">
												<option value="">All states</option>
											</select>
										</li>
									</ul>
								</View>
							</View>
						</View>
						<View className={styles('cards')}>
							<View className={styles('card')}>
								<View className={styles('top-row')}>
									<View className={styles('img-container')}>
										<img src={car} alt="" />
									</View>
									<View className={styles('info')}>
										<View className={styles('inner')}>
											<Text>Primary Terminal</Text>
											<Text variant="h4">Ojoto Motor Park</Text>
											<View className={styles('specs')}>
												<ul>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
												</ul>
											</View>
										</View>
									</View>
									<View className={styles('price')}>
										<Text>Price</Text>
										<Text variant="h2">₦ 100,0000</Text>
										<Text variant="h4">₦ 80,000 Discount price</Text>
										<Text className={styles('badge')}>Not available</Text>
									</View>
								</View>
								<View className={styles('bottom-row')}>
									<View className={styles('distance-info')}>
										<LocationIcon />
										<Text className={styles('travel-icon')}>
											<span>Distance traveled</span>
											<Text>
												10.7 <small>km</small>{' '}
											</Text>
										</Text>
									</View>
									<View className={styles('distance-info')}>
										<StopwatchIcon />
										<Text className={styles('travel-icon')}>
											<span>Travel time</span>
											<Text>
												5 <small>hr</small> 30 <small>min</small>
											</Text>
										</Text>
									</View>
									<View className={styles('distance-info')}>
										<StopwatchIcon />
										<Text className={styles('travel-icon')}>
											<span>Total bookings</span>
											<Text>51</Text>
										</Text>
									</View>
									<View className={styles('action-wrapper')}>
										<button>Edit vehicle</button>
										<Link to="/">Click to switch status</Link>
									</View>
								</View>
							</View>
							<View className={styles('card')}>
								<View className={styles('top-row')}>
									<View className={styles('img-container')}>
										<img src={car} alt="" />
									</View>
									<View className={styles('info')}>
										<View className={styles('inner')}>
											<Text>Primary Terminal</Text>
											<Text variant="h4">Ojoto Motor Park</Text>
											<View className={styles('specs')}>
												<ul>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
												</ul>
											</View>
										</View>
									</View>
									<View className={styles('price')}>
										<Text>Price</Text>
										<Text variant="h2">₦ 100,0000</Text>
										<Text variant="h4">₦ 80,000 Discount price</Text>
										<Text className={styles('badge')}>Not available</Text>
									</View>
								</View>
								<View className={styles('bottom-row')}>
									<View className={styles('distance-info')}>
										<LocationIcon />
										<Text className={styles('travel-icon')}>
											<span>Distance traveled</span>
											<Text>
												10.7 <small>km</small>{' '}
											</Text>
										</Text>
									</View>
									<View className={styles('distance-info')}>
										<StopwatchIcon />
										<Text className={styles('travel-icon')}>
											<span>Travel time</span>
											<Text>
												5 <small>hr</small> 30 <small>min</small>
											</Text>
										</Text>
									</View>
									<View className={styles('distance-info')}>
										<StopwatchIcon />
										<Text className={styles('travel-icon')}>
											<span>Total bookings</span>
											<Text>51</Text>
										</Text>
									</View>
									<View className={styles('action-wrapper')}>
										<button>Edit vehicle</button>
										<Link to="/">Click to switch status</Link>
									</View>
								</View>
							</View>
							<View className={styles('card')}>
								<View className={styles('top-row')}>
									<View className={styles('img-container')}>
										<img src={car} alt="" />
									</View>
									<View className={styles('info')}>
										<View className={styles('inner')}>
											<Text>Primary Terminal</Text>
											<Text variant="h4">Ojoto Motor Park</Text>
											<View className={styles('specs')}>
												<ul>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
													<li>
														<LuggageIcon />
														<span>5 Seater car</span>
													</li>
												</ul>
											</View>
										</View>
									</View>
									<View className={styles('price')}>
										<Text>Price</Text>
										<Text variant="h2">₦ 100,0000</Text>
										<Text variant="h4">₦ 80,000 Discount price</Text>
										<Text className={styles('badge')}>Not available</Text>
									</View>
								</View>
								<View className={styles('bottom-row')}>
									<View className={styles('distance-info')}>
										<LocationIcon />
										<Text className={styles('travel-icon')}>
											<span>Distance traveled</span>
											<Text>
												10.7 <small>km</small>{' '}
											</Text>
										</Text>
									</View>
									<View className={styles('distance-info')}>
										<StopwatchIcon />
										<Text className={styles('travel-icon')}>
											<span>Travel time</span>
											<Text>
												5 <small>hr</small> 30 <small>min</small>
											</Text>
										</Text>
									</View>
									<View className={styles('distance-info')}>
										<StopwatchIcon />
										<Text className={styles('travel-icon')}>
											<span>Total bookings</span>
											<Text>51</Text>
										</Text>
									</View>
									<View className={styles('action-wrapper')}>
										<button>Edit vehicle</button>
										<Link to="/">Click to switch status</Link>
									</View>
								</View>
							</View>
						</View>
					</View>
				) : (
					<Empty {...btnInfo} />
				)}
			</View>
		</AdminLayout>
	);
};

export default VehicleListing;
