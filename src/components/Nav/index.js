import React from 'react';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { navItems } from 'data/index.js';
import './styles.scss';

const Navbar = () => {

	const menu = (
		<Menu>
			<Menu.Item key="0">
				<a href="https://www.antgroup.com">1st menu item</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="https://www.aliyun.com">2nd menu item</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3">3rd menu item</Menu.Item>
		</Menu>
	);


	return (
		<nav className="nav align-center justify-between">
			<Link className="nav--logo" to="/">
				<img alt="logo" src={require('./../../assets/img/zipu-logo.svg')} />
			</Link>

			<ul className="d-flex align-center">
				<li>
					<Dropdown overlay={menu} trigger={['click']}>
						<a
							className="ant-dropdown-link"
							// href="javascript:void(0)"
							onClick={e => e.preventDefault()}
						>
							Top Destinatins <DownOutlined />
						</a>
					</Dropdown>
				</li>
				<li>
					<Dropdown overlay={menu} trigger={['click']}>
						<a
							className="ant-dropdown-link"
							// href="javascript:void(0)"
							onClick={e => e.preventDefault()}
						>
							Partners <DownOutlined />
						</a>
					</Dropdown>
				</li>
				{navItems.map(item => {
					return (
						<li key={item.title}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					);
				})}
				<li>
					<button className="btn btn-brand-2">Sign In</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
