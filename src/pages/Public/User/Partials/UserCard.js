import React, {Fragment} from 'react';

const UserCard = () => {
	return (
		<Fragment>
			<section className="userCard tscol justify-between">
				<div className="d-flex justify-between">
					<h2>CHISCO LAGOS PROMO</h2>
					<h3>10% </h3>
				</div>
				<div className="d-flex">
					<h2>2X</h2>
					<h4>10% off lagos bookings</h4>
				</div>
			</section>
		</Fragment>
	);
};

export default UserCard;
