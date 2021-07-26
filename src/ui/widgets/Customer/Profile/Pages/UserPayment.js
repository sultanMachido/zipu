// import { Form } from 'antd';
import classnames from 'classnames/bind';
import React, { Fragment } from 'react';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';
import UserCard from './UserCard';

let styles = classnames.bind(style);

// import {EmailField, SubmitButton} from 'components/FormField';

// const inputSize = 'small';

// import './index.scss';

const UserPayment = () => {
	// const [form] = Form.useForm();

	// const onFinish = async (_values) => {
	// 	alert('Coupon Applied');
	// };

	return (
		<Fragment>
			<View className={`${styles('user--profile')} tscol`}>
				<View className="tsrow mb-sm">
					<View className="tscol">
						<h2 className="sub-lg black">Account Settings</h2>
						<p className="action-xs black">
							View all of your promos, coupons and payment methods securely
						</p>
					</View>
					<figure></figure>
				</View>

				<View className={`tscol ${styles('user--details')}`}>
					<View className={`d-flex mb-xs ${styles('user--details--item')}  justify-between`}>
						<View className="qtrow d-flex  justify-start align-start">
							<p className="action-xs">Promotions</p>
						</View>
						<View className={`${styles('fullrow')} tscol`}>
							<View className="d-flex justify-between mb-sm">
								<View className="tscol-2">
									<UserCard />
								</View>
								<View className="tscol-2">
									<UserCard />
								</View>
							</View>

							<View className="d-flex justify-end mb-xs">
								<input className="form-input" type="text" placeholder="Coupon Code" name="coupon" />
								<button className="btnCta ml-sm">Apply Coupon</button>
							</View>
						</View>
					</View>

					<View className={`d-flex mb-xs ${styles('user--details--item')}  justify-between`}>
						<View className={`${styles('qtrow')} d-flex  justify-start align-start`}>
							<p className="action-xs">Promotions</p>
						</View>
						<View className="fullrow tscol ">
							<View className="d-flex mb-sm">
								<View className="tscol-1 tscol">
									<label htmlFor="coupon" className="formLabel">
										Card holder’s name*
									</label>
									<input
										className="form-input"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</View>
							</View>

							<View className="d-flex mb-sm">
								<View className="tscol-1 tscol">
									<label htmlFor="coupon" className="formLabel">
										Card Number*
									</label>
									<input
										className="form-input"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</View>
							</View>

							<View className="d-flex justify-between mb-sm">
								<View className="tscol-2 tscol">
									<label htmlFor="coupon" className="formLabel">
										Card Number*
									</label>
									<input
										className="form-input"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</View>

								<View className="tscol-2 tscol">
									<label htmlFor="coupon" className="formLabel">
										Card Number*
									</label>
									<input
										className="form-input"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</View>
							</View>

							<View className="d-flex justify-end mb-xs">
								<button className="btn btn-white mr-sm">Cancel</button>
								<button className="btn btn-brand-2">Save</button>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Fragment>
	);
};

export default UserPayment;
