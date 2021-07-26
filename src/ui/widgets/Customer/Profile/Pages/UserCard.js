import classnames from 'classnames/bind';
import React, { Fragment } from 'react';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);

const UserCard = () => {
	return (
		<Fragment>
			<section className={`${styles('user--card')} tscol justify-between`}>
				<View className="d-flex justify-between">
					<h2>CHISCO LAGOS PROMO</h2>
					<h3>10% </h3>
				</View>
				<View className="d-flex">
					<h2>2X</h2>
					<h4>10% off lagos bookings</h4>
				</View>
			</section>
		</Fragment>
	);
};

export default UserCard;
