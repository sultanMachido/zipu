import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as User} from 'assets/svg/user.svg';
import {ReactComponent as Card} from 'assets/svg/cardElipse.svg';
import {ReactComponent as SecIcon} from 'assets/svg/security.svg';
import {ReactComponent as EmIcon} from 'assets/svg/lock.svg';

const UserPage = () => {
	return (
		<ul className="tscol">
			<li>
				<Link className="d-flex align-center" to="/user/profile">
					<User className="mr-sm" />
					Personal details
				</Link>
			</li>
			<li>
				<Link className="d-flex align-center" to="/user/payment">
					<Card className="mr-sm" />
					Payments
				</Link>
			</li>
			<li>
				<Link className="d-flex align-center" to="/user/security">
					<SecIcon className="mr-sm" />
					Security
				</Link>
			</li>
			<li>
				<Link className="d-flex align-center" to="/user/notifications">
					<EmIcon className="mr-sm" />
					Email Notifications
				</Link>
			</li>
		</ul>
	);
};

export default UserPage;
