import classnames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-spinners-css';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import { ArrowRightIcon, DoorIcon, DownIcon, LuggageIcon, UpIcon, UploadIcon } from 'ui/svgs';
import { LocationIcon } from 'ui/svgs/LocationIcon';
import { SeatIcon } from 'ui/svgs/SeatIcon';
import AdminLayout from 'ui/widgets/AdminLayout';

import cars from '../../../../assets/img/cars.jpg';
import car from '../../../../assets/img/GIGMLogo.png';
import { APIService } from '../../../../config/apiConfig';
import { getAPIError } from '../../../../utils/errorHandler/apiErrors';
import style from './index.module.scss';

const styles = classnames.bind(style);

const Company = () => {
	const [icon, setIcon] = useState(car);
	const [image, setImage] = useState(cars);
	const [imageLoading, setImageLoading] = useState(false);
	const [transcoDetails, setTranscoDetails] = useState({});
	const [errorMessage, setErrorMessage] = useState('');
	const history = useHistory();

	useEffect(() => {
		getTranscoDetails();
	}, []);

	const getTranscoDetails = async () => {
		try {
			let result = await APIService.get('/get-user-transco');

			if (result.data.status === 'Success') {
				let { picture, ...rest } = result.data.data.transco;
				console.log(rest);
				setTranscoDetails({ ...rest });
				setImage(picture);
			}
		} catch (error) {
			if (error.response) {
				setImageLoading(false);
				let errorMessage = getAPIError(error.response.data.message);

				setErrorMessage(errorMessage);
			} else if (error.request) {
				setImageLoading(false);
				setErrorMessage(error.request);
				// console.log(error.request);
			} else {
				console.log('Error', error.message);
			}
		}
	};

	const changeImage = async (e) => {
		setImageLoading(true);
		const [file] = e.target.files;
		const name = e.target.name;
		const formData = new FormData();
		formData.append('picture', file);
		console.log(name);
		if (file) {
			if (name === 'image') {
				console.log(file);
				try {
					let result = await APIService.postMultiPart('/update-company-pic', formData);
					console.log(result);
					if (result.data.status === 'Success') {
						let { picture } = result.data.data.transco;
						setImage(picture);
						setImageLoading(false);
					}
				} catch (error) {
					if (error.response) {
						setImageLoading(false);
						let errorMessage = getAPIError(error.response.data.message);

						setErrorMessage(errorMessage);
					} else if (error.request) {
						setImageLoading(false);
						setErrorMessage(error.request);
						// console.log(error.request);
					} else {
						console.log('Error', error.message);
					}
				}
			} else {
				setIcon(URL.createObjectURL(file));
			}
		}
	};

	return (
		<AdminLayout>
			<View className={styles('company-wrapper')}>
				<Text className={styles('header')} variant="h2">
					Good is Good Motors
				</Text>
				<View className={styles('row')}>
					<View className={styles('first-column')}>
						<View className={styles('input-group')}>
							<View className={styles('icon')}>
								<img src={icon} alt="" />
							</View>
							<label htmlFor="companyIcon">Edit Icon</label>
							<input type="file" name="icon" id="companyIcon" onChange={changeImage} />
						</View>
						<View className={styles('input-group', 'company-image')}>
							<View className={styles('image')}>
								{!imageLoading ? (
									<img src={image} alt="" />
								) : (
									<Spinner className={styles('loader')} />
								)}
							</View>
							<label htmlFor="companyImage">Edit cover image</label>
							<input type="file" name="image" id="companyImage" onChange={changeImage} />
							<View className={styles('action')}>
								<button onClick={() => history.push('/vendor/profile')}>edit information</button>
							</View>
						</View>
					</View>
					<View className={styles('second-column')}>
						<View className={styles('group')}>
							<Text variant="h3">All time data</Text>
							<View className={styles('grid')}>
								<View className={styles('card')}>
									<Text variant="h4">102</Text>
									<Text variant="p">upcoming trips</Text>
									<Text variant="a" href="/">
										see all
									</Text>
								</View>
								<View className={styles('card')}>
									<Text variant="h4">102</Text>
									<Text variant="p">upcoming trips</Text>
									<Text variant="a" href="/">
										see all
									</Text>
								</View>
								<View className={styles('card')}>
									<Text variant="h4">102</Text>
									<Text variant="p">upcoming trips</Text>
									<Text variant="a" href="/">
										see all
									</Text>
								</View>
							</View>
						</View>
						<View className={styles('group', 'stats')}>
							<Text variant="h3">All time revenue stats</Text>
							<View className={styles('grid')}>
								<View className={styles('card')}>
									<Text variant="p">Monthly revenue</Text>
									<Text variant="h4">NGN 20,000</Text>
								</View>
								<View className={styles('card', 'icon-card')}>
									<View>
										<Text variant="p">vs Last month</Text>
										<Text variant="h4">NGN 18,500</Text>
									</View>
									<UpIcon />
								</View>
								<View className={styles('card')}>
									<Text variant="p">Monthly users</Text>
									<Text variant="h4">3,060</Text>
								</View>
								<View className={styles('card', 'icon-card')}>
									<View>
										<Text variant="p">vs Last month</Text>
										<Text variant="h4">2,500</Text>
									</View>
									<DownIcon />
								</View>
							</View>
						</View>
						<View className={styles('company-info')}>
							<View className={styles('first-column')}>
								<Text variant="h3">Company Information</Text>
								<View className={styles('text-container')}>
									<Text variant="h4">Rental or bus information</Text>
									<Text>
										This rental includes Collision Damage Waiver with zero excess: if the car&#34;s
										bodywork, glass, wheels, interior, roof or undercarriage get damaged, you
										won&#34;t pay anything at all towards repairs covered by the policy. This cover
										is only valid if you stick to the terms of the rental agreement. It doesn&#34;t
										cover charges (e.g. for towing or off-road time), or anything in the car (e.g.
										child seats, GPS devices or personal belongings), or damage caused by any
										authorised driver&#39;s negligence.
									</Text>
									<ul>
										<li>
											<SeatIcon />
											<span>{transcoDetails.number_of_buses || 0} Busses/Car</span>
										</li>
										<li>
											<LuggageIcon />
											<span>{transcoDetails.number_of_staff || 0} Staff</span>
										</li>
										<li>
											<DoorIcon />
											<span>{transcoDetails.number_of_terminals || 0} Terminals</span>
										</li>
									</ul>
								</View>
							</View>
							<View className={styles('second-column')}>
								<View className={styles('grouping')}>
									<Text variant="h4">Contact information</Text>
									<ul>
										<li>Email: {transcoDetails.email || ''}</li>
										<li>Phone number: {transcoDetails.phone || ''}</li>
										<li>Address: {transcoDetails.address || ''}</li>
									</ul>
								</View>

								<View className={styles('grouping')}>
									<Text variant="h4">Contact information</Text>
									<ul className={styles('download')}>
										<li>
											<Text variant="h4">CAC Documents</Text>
											<button>
												<UploadIcon />
												<span>
													<a href={transcoDetails.cac || '#'} download>
														Download
													</a>
												</span>
											</button>
										</li>
										<li>
											<Text variant="h4">Permit Documents</Text>
											<button>
												<UploadIcon />
												<span>
													<a href={transcoDetails.permit || '#'} download>
														Download
													</a>
												</span>
											</button>
										</li>
										<li>
											<Text variant="h4">Privacy Documents</Text>
											<button>
												<UploadIcon />
												<span>
													<a href={transcoDetails.privacy_policy || '#'} download>
														Download
													</a>
												</span>
											</button>
										</li>
										<li>
											<Text variant="h4">Customer care Documents</Text>
											<button>
												<UploadIcon />
												<span>
													<a href={transcoDetails.customer_care_policy || '#'} download>
														Download
													</a>
												</span>
											</button>
										</li>
									</ul>
								</View>
								<View className={styles('grouping')}>
									<Text variant="h4">Bank details</Text>
									<ul>
										<li>Bank name: {transcoDetails.bank || ''}</li>
										<li>Account number: {transcoDetails.account_number || ''}</li>
									</ul>
								</View>
							</View>
						</View>
						<View className={styles('settings')}>
							<Text variant="h4">Settings</Text>
							<ul>
								<li>
									<span>Change password</span>
									<ArrowRightIcon />
								</li>
								<li>
									<span>Staff management</span>
									<ArrowRightIcon />
								</li>
								<li>
									<span>Terminal management</span>
									<ArrowRightIcon />
								</li>
								<li>
									<span>Trip management</span>
									<ArrowRightIcon />
								</li>
							</ul>
						</View>
					</View>
				</View>
			</View>
		</AdminLayout>
	);
};

export default Company;
