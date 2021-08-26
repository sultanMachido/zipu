/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classnames from 'classnames/bind';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Text, View } from 'ui/atoms/components/Typography';
import { DownArrowIcon } from 'ui/svgs';

import style from './index.module.scss';

const styles = classnames.bind(style);

const Dropdown = ({ dropList, text, imgUrl, logout }) => {
	const [open, setOpen] = useState(false);
	let history = useHistory();

	const handleLogOut = async () => {
		console.log('ffff');
		await logout();
		history.push('/customer/login');
	};
	return (
		<View
			className={styles('dropdown-wrapper')}
			onMouseLeave={() => setOpen(false)}
			onMouseOver={() => setOpen(true)}>
			<View className={styles('dropdown-title')}>
				{imgUrl && (
					<View className={styles('img-container')}>
						<img src={imgUrl} alt="" />
					</View>
				)}
				<View className={styles('title')}>
					<Text>{text}</Text>
					<DownArrowIcon />
				</View>
			</View>
			{open && (
				<View className={styles('dropdown-links')}>
					<ul>
						{dropList.length &&
							dropList.map(({ url, action, text }) => {
								if (action && action === 'logout') {
									return (
										<li key={url}>
											<h6 onClick={handleLogOut}>{text}</h6>
										</li>
									);
								} else {
									return (
										<li key={url}>
											<Text variant="Link" to={url}>
												{text}
											</Text>
										</li>
									);
								}
							})}
					</ul>
				</View>
			)}
		</View>
	);
};

export default Dropdown;
