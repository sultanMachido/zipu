/* eslint-disable react-hooks/exhaustive-deps */
import { message } from 'antd';
import classnames from 'classnames/bind';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
	getAuthenticatedCustomer,
	updateAuthenticatedCustomer,
	updateAuthenticatedCustomerImage
} from 'redux/actions/login/login.actions';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);

const UserProfile = ({ login: { userInfo, updateUserLoading, updateImageLoading }, ...props }) => {
	const [edit, setEdit] = useState(false);
	const [loading, setLoading] = useState(false);
	const [userDetails, setDetails] = useState({
		id: '',
		name: '',
		title: '',
		email: '',
		nationality: '',
		address: '',
		phone: ''
	});

	useEffect(() => {
		props.getAuthenticatedCustomer();
	}, []);

	useEffect(() => {
		setDetails({ ...userInfo });
	}, [userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		let response = await props.updateAuthenticatedCustomer(userDetails);
		if (response?.loginStatus === true) {
			setEdit(false);
		}
		setLoading(false);
	};

	const onChange = (e) => {
		setDetails({
			...userDetails,
			[e.target.name]: e.target.value
		});
	};

	const handleImg = async (e) => {
		let file = e.target.files[0];
		if (file) {
			const payload = new FormData();
			payload.append('image', file);
			props.updateAuthenticatedCustomerImage(payload);
		} else {
			message.error('Error validating image');
		}
	};

	return (
		<Fragment>
			<section className={`${styles('user--profile')} tscol`}>
				<div className={`tsrow mb-sm ${styles('profile--header')}`}>
					<div className="tscol">
						<h2 className="sub-lg black">Account Settings</h2>
						<p className="action-xs black">
							View all of your bookings, make changes and get help if you need it.
						</p>
					</div>

					<div className={`${styles('profile--picture')}`}>
						<div className={`${styles('profile--image--uploader')} mr-xs`}>
							<button type="button" className={`${styles('btn-cta')}`}>
								{updateImageLoading ? '...' : 'Edit'}
							</button>
							<input onChange={handleImg} type="file" name="image" />
						</div>
						<figure>
							<img src={userInfo?.image} alt="img" />
						</figure>
					</div>
				</div>

				{/* {loginLoading ? (
					<h2>loading</h2>
				) : ( */}
				<Fragment>
					<form onSubmit={handleSubmit} className={`tscol ${styles('user--details')}`}>
						<div className={`d-flex mb-xs ${styles('user--details--item')}  justify-between`}>
							<div className="qtrow d-flex align-center">
								<p className="action-xs">Title</p>
							</div>

							{edit ? (
								<View className={`tscol-1 tscol user--input`}>
									<input
										required
										className="form-input"
										type="text"
										placeholder="name"
										name="title"
										onChange={onChange}
										value={userDetails?.title}
									/>
								</View>
							) : (
								<div className="fullrow d-flex justify-between align-center">
									<p className="action-xs">{userDetails?.title}</p>
								</div>
							)}
						</div>

						<div className={`d-flex mb-xs ${styles('user--details--item')}  justify-between`}>
							<div className="qtrow d-flex align-center">
								<p className="action-xs">Name</p>
							</div>

							{edit ? (
								<View className={`tscol-1 tscol user--input`}>
									<input
										required
										className="form-input"
										type="text"
										placeholder="name"
										name="name"
										onChange={onChange}
										value={userDetails?.name}
									/>
								</View>
							) : (
								<div className="fullrow d-flex justify-between align-center">
									<p className="action-xs">{userDetails?.name}</p>
								</div>
							)}
						</div>

						<div className={`d-flex mb-xs ${styles('user--details--item')} justify-between`}>
							<div className="qtrow d-flex align-center">
								<p className="action-xs">Email Address</p>
							</div>

							<div className="fullrow d-flex justify-between align-center">
								<p className="action-xs">{userDetails?.email}</p>
							</div>
						</div>

						<div className={`d-flex mb-xs ${styles('user--details--item')} justify-between`}>
							<div className="qtrow d-flex align-center">
								<p className="action-xs">Phone Number</p>
							</div>

							{edit ? (
								<View className={`tscol-1 tscol user--input`}>
									<input
										required
										className="form-input"
										type="number"
										placeholder="phon"
										name="phone"
										min="0"
										minLength="11"
										onChange={onChange}
										value={userDetails?.phone}
									/>
								</View>
							) : (
								<div className="fullrow d-flex justify-between align-center">
									<p className="action-xs">{userDetails?.phone}</p>
								</div>
							)}
						</div>

						<div className={`d-flex mb-xs ${styles('user--details--item')}  justify-between`}>
							<div className="qtrow d-flex align-center">
								<p className="action-xs">Nationality</p>
							</div>

							{edit ? (
								<View className={`tscol-1 tscol user--input`}>
									<input
										required
										className="form-input"
										type="text"
										placeholder="nationality"
										name="nationality"
										onChange={onChange}
										value={userDetails?.nationality}
									/>
								</View>
							) : (
								<div className="fullrow d-flex justify-between align-center">
									<p className="action-xs">{userDetails?.nationality}</p>
								</div>
							)}
						</div>

						<div className={`d-flex mb-xs ${styles('user--details--item')}  justify-between`}>
							<div className="qtrow d-flex align-center">
								<p className="action-xs">Address</p>
							</div>

							{edit ? (
								<View className={`tscol-1 tscol user--input`}>
									<input
										required
										className="form-input"
										type="text"
										placeholder="address"
										name="address"
										onChange={onChange}
										value={userDetails?.address}
									/>
								</View>
							) : (
								<div className="fullrow d-flex justify-between align-center">
									<p className="action-xs">{userDetails?.address}</p>
								</div>
							)}
						</div>

						<div className="d-flex justify-end mb-xs">
							{edit ? (
								<Fragment>
									<View className="d-flex justify-end mb-xs">
										<button
											onClick={() => setEdit(false)}
											type="button"
											className="btn btn-white mr-sm">
											Cancel
										</button>
										<button type="submit" className="btn btn-brand-2">
											{loading ? 'Saving' : 'Save'}
										</button>
									</View>
								</Fragment>
							) : (
								<button
									type="button"
									onClick={() => setEdit(true)}
									className={`${styles('btn-cta')}`}>
									EDIT
								</button>
							)}
						</div>
					</form>
				</Fragment>
				{/* )} */}
			</section>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	login: state.login
});

const mapDispatchToProps = {
	getAuthenticatedCustomer,
	updateAuthenticatedCustomer,
	updateAuthenticatedCustomerImage
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfile));
