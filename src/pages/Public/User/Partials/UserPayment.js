import React, {Fragment} from 'react';
import UserCard from './UserCard';
import {Form, message} from 'antd';

import {EmailField, SubmitButton} from 'components/FormField';

const inputSize = 'small';

// import './index.scss';

const UserPayment = props => {
	const [form] = Form.useForm();

	const onFinish = async values => {
		alert('Coupon Applied');
	};

	return (
		<Fragment>
			<section className="userProfile tscol">
				<div className="tsrow mb-sm">
					<div className="tscol">
						<h2 className="sub-lg black">Account Settings</h2>
						<p className="action-xs black">
							View all of your promos, coupons and payment methods securely
						</p>
					</div>
					<figure></figure>
				</div>

				<section className="tscol userDetails">
					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex  justify-start align-start">
							<p className="action-xs">Promotions</p>
						</div>
						<div className="fullrow tscol ">
							<div className="d-flex justify-between mb-sm">
								<div className="col_2">
									<UserCard />
								</div>
								<div className="col_2">
									<UserCard />
								</div>
							</div>

							<div className="d-flex justify-end mb-xs">
								<input
									className="formInput"
									type="text"
									placeholder="Coupon Code"
									name="coupon"
								/>
								<button className="btnCta ml-sm">Cancel</button>
							</div>
						</div>
					</div>

					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex  justify-start align-start">
							<p className="action-xs">Promotions</p>
						</div>
						<div className="fullrow tscol ">
							<div className="d-flex mb-sm">
								<div className="col_1 tscol">
									<label className="formLabel">Card holder’s name*</label>
									<input
										className="formInput"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</div>
							</div>

							<div className="d-flex mb-sm">
								<div className="col_1 tscol">
									<label className="formLabel">Card Number*</label>
									<input
										className="formInput"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</div>
							</div>

							<div className="d-flex justify-between mb-sm">
								<div className="col_2 tscol">
									<label className="formLabel">Card Number*</label>
									<input
										className="formInput"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</div>

								<div className="col_2 tscol">
									<label className="formLabel">Card Number*</label>
									<input
										className="formInput"
										type="text"
										placeholder="Coupon Code"
										name="coupon"
									/>
								</div>
							</div>

							<div className="d-flex justify-end mb-xs">
								<button className="btn btn-white mr-sm">Cancel</button>
								<button className="btn btn-brand-2">Save</button>
							</div>
						</div>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

export default UserPayment;
