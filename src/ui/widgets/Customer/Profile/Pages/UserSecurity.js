import classnames from 'classnames/bind';
import React, { Fragment } from 'react';

import style from './index.module.scss';

let styles = classnames.bind(style);

const UserSecurity = () => {
	return (
		<Fragment>
			<section className={`${styles('user--profile')} tscol`}>
				<div className="tsrow mb-sm">
					<div className="tscol">
						<h2 className="sub-lg black">Account Settings</h2>
						<p className="action-xs black">Manage your communication preferences</p>
					</div>
					<figure></figure>
				</div>

				<section className={`tscol ${styles('user--details')}`}>
					<section className={`tscol ${styles('user--details--item')}`}>
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Password</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">
								To change your password, we need to send a reset link to your email address
							</p>
							<button className={`${styles('btn-cta')}`}>Reset Password</button>
						</div>
					</section>
					<section className={`tscol ${styles('user--details--item')}`}>
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Two-factor authentication</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">Receive otp to set up two-factor authentication</p>
							<button className={`${styles('btn-cta')}`}>Set Up</button>
						</div>
					</section>

					<section className={`tscol ${styles('user--details--item')}`}>
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Delete Account</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">Permanently delete your ZIPU account</p>
							<button className={`${styles('btn-cta')}`}>Delete Account</button>
						</div>
					</section>

					{/* <div className="d-flex justify-end mb-xs">
						<button className="btn btn-white mr-sm">Cancel</button>
						<button className="btn btn-brand-2">Save</button>
					</div> */}
				</section>
			</section>
		</Fragment>
	);
};

export default UserSecurity;
