import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = ({ path, profile, logoutUser }) => {
	const menu = (
		<Menu>
			<Menu.Item onClick={logoutUser}>Logout</Menu.Item>
		</Menu>
	);

	return (
		<nav className="navbar reg-navbar navbar-expand-lg fixed-top navbar-light">
			<Link className="navbar-brand" to="/">
				<img alt="logo" src={require('./../../assets/img/zipu-logo.svg')} />
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav ml-autos align-items-center">
					<li className="nav-item mr-4">
						<Link
							className={`nav-link ${path === '/support' ? 'active' : ''}`}
							to="/support"
						>
							<p>Support</p>
							<p className="sub-text">Conflict Resolution</p>
						</Link>
					</li>
					<li className="nav-item mr-4">
						<a className="nav-icon" href="/settings">
							<img alt="bell" src={require('./../../assets/img/bell.svg')} />
						</a>
					</li>
					<li className="nav-item">
						<Dropdown overlay={menu}>
							<div>
								<Avatar size={51} style={{ background: '#476FEE' }} className="mr-1">
									{profile && profile.name
										? profile.name.split(' ').map(item => item.slice(0, 1))
										: 'A'}
								</Avatar>
							</div>
						</Dropdown>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
