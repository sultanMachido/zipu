import React, {Fragment} from 'react';
// import './index.scss';

const UserNotifications = () => {
	return (
		<Fragment>
			<section className="userProfile tscol">
				<div className="tsrow mb-sm">
					<div className="tscol">
						<h2 className="sub-lg black">Account Settings</h2>
						<p className="action-xs black">Manage your communication preferences</p>
					</div>
					<figure></figure>
				</div>

				<section className="tscol userDetails">
					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Booking</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">Upcoming trip reminder</p>
							<button className="btnCta">Edit</button>
						</div>
					</div>
					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex align-center">
							<p className="action-xs"></p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">Rental expiry reminder </p>
							<button className="btnCta">Edit</button>
						</div>
					</div>

					<div className="d-flex justify-end mb-xs">
						<button className="btn btn-white mr-sm">Cancel</button>
						<button className="btn btn-brand-2">Save</button>
					</div>
				</section>

				<section className="tscol userDetails">
					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Newsletters & Promotions</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">
								Recieve deals, promotions, money-saving offers, and travel
								destinations suggestions you may be interested in visiting
							</p>
							<button className="btnCta">Edit</button>
						</div>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

export default UserNotifications;
