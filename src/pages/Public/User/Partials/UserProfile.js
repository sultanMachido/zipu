import React, {Fragment} from 'react';
// import './index.scss';

const UserProfile = () => {
	return (
		<Fragment>
			<section className="userProfile tscol">
				<div className="tsrow mb-sm">
					<div className="tscol">
						<h2 className="sub-lg black">Account Settings</h2>
						<p className="action-xs black">
							View all of your bookings, make changes and get help if you need it.
						</p>
					</div>
					<figure></figure>
				</div>

				<section className="tscol userDetails">
					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Title</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">Mr</p>
						</div>
					</div>

					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Email Address</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">teeola48@gmail.com</p>
						</div>
					</div>

					<div className="d-flex mb-xs  userDetails__item justify-between">
						<div className="qtrow d-flex align-center">
							<p className="action-xs">Phone Number</p>
						</div>
						<div className="fullrow d-flex justify-between align-center">
							<p className="action-xs">+2348067710761</p>
						</div>
					</div>

					<div className="d-flex justify-end mb-xs">
						<button className="btn btn-brand-2">EDIT</button>
					</div>
				</section>
			</section>
		</Fragment>
	);
};

export default UserProfile;
