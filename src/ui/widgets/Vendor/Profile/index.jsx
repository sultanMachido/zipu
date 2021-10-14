import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import { SettingBellIcon, SettingCardIcon, SettingKeyIcon, SettingPersonIcon } from 'ui/svgs';
import AdminLayout from 'ui/widgets/AdminLayout';

import style from './index.module.scss';

const styles = classnames.bind(style);

const editHandler = (e) => {
	e.preventDefault();
	e.nativeEvent.target.previousSibling.contentEditable = true;
	console.log(e.nativeEvent.target.previousSibling.contentEditable);
};

const Profile = () => {
	return (
		<AdminLayout>
			<View className={styles('profile-wrapper')}>
				<View className={styles('banner')}>
					<Text>
						Your registration has been submitted for approval. You can still add your inventory but
						they will not be live until approval.
						<a href="/">Click here to start</a>
					</Text>
				</View>
				<View className={styles('row')}>
					<View className={styles('first-column')}>
						<ul>
							<li>
								<a href="/">
									<SettingPersonIcon />
									<span>Personal details</span>
								</a>
							</li>
							<li>
								<a href="/">
									<SettingCardIcon />
									<span> Payments and account</span>
								</a>
							</li>
							<li>
								<a href="/">
									<SettingKeyIcon />
									<span>Security </span>
								</a>
							</li>
							<li>
								<a href="/">
									<SettingBellIcon />
									<span>Email notifications</span>
								</a>
							</li>
						</ul>
					</View>
					<View className={styles('second-column')}>
						<View className={styles('header')}>
							<View className={styles('text-container')}>
								<Text variant="h4">Profile settings</Text>
								<Text>View all of your bookings, make changes and get help if you need it.</Text>
							</View>
							<View className={styles('action-container')}>
								<Text variant="a" href="/">
									Edit
								</Text>
								<View className={styles('image-container')}>
									<img
										src="https://images.unsplash.com/photo-1622495966027-e0173192c728?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
										alt=""
									/>
								</View>
							</View>
						</View>
						<View className={styles('body')}>
							<ul>
								{/* <li>
									<Text>Title</Text>
									<Text>Mr</Text>
									<Text variant="a" href="/">
										Edit
									</Text>
								</li> */}
								<li>
									<Text>Full Name</Text>
									<Text>Oluwaleke Ojo</Text>
									<Text variant="a" href="/">
										Edit
									</Text>
								</li>
								<li>
									<Text>Email address</Text>
									<Text>ojopeta@gmail.com</Text>
									<Text variant="a" href="/" onClick={(e) => editHandler(e)}>
										Edit
									</Text>
								</li>
								<li>
									<Text>Phone number</Text>
									<Text>+2348067710761</Text>
									<Text variant="a" href="/">
										Edit
									</Text>
								</li>
								{/* <li>
									<Text>Date of birth</Text>
									<Text>12-12-2020</Text>
									<Text variant="a" href="/">
										Edit
									</Text>
								</li> */}
								{/* <li>
									<Text>Nationality</Text>
									<Text>Nigerian</Text>
									<Text variant="a" href="/">
										Edit
									</Text>
								</li> */}
								<li>
									<Text>Gender</Text>
									<Text>Male now</Text>
									<Text variant="a" href="/">
										Edit
									</Text>
								</li>
								<li>
									<Text>Address</Text>
									<Text>2 Adyinka Adeoye street, olonade junction, Yaba</Text>
									<Text variant="a" href="/">
										Edit
									</Text>
								</li>
							</ul>
						</View>
					</View>
				</View>
			</View>
		</AdminLayout>
	);
};

export default Profile;
