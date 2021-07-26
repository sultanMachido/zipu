import { ReactComponent as Card } from 'assets/svg/cardElipse.svg';
import { ReactComponent as EmIcon } from 'assets/svg/lock.svg';
import { ReactComponent as SecIcon } from 'assets/svg/security.svg';
import { ReactComponent as User } from 'assets/svg/user.svg';
import classnames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import style from './nav.module.scss';

let styles = classnames.bind(style);

const UserPage = () => {
	return (
		<ul className={`tscol ${styles('nav--container')}`}>
			<li>
				<Link className={`d-flex align-center ${styles('user-nav-link')}`} to="/customer/profile">
					<User className="mr-sm" />
					Personal details
				</Link>
			</li>
			<li>
				<Link className={`d-flex align-center ${styles('user-nav-link')}`} to="/customer/payment">
					<Card className="mr-sm" />
					Payments
				</Link>
			</li>
			<li>
				<Link className={`d-flex align-center ${styles('user-nav-link')}`} to="/customer/security">
					<SecIcon className="mr-sm" />
					Security
				</Link>
			</li>
			<li>
				<Link
					className={`d-flex align-center ${styles('user-nav-link')}`}
					to="/customer/notifications">
					<EmIcon className="mr-sm" />
					Email Notifications
				</Link>
			</li>
		</ul>
	);
};

export default UserPage;
