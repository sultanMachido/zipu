import classnames from 'classnames/bind';
import React, { useContext, useState } from 'react';
import { Text, View } from 'ui/atoms/components/Typography';
import { DownArrowIcon } from 'ui/svgs';

import style from './index.module.scss';

const styles = classnames.bind(style);

const Dropdown = ({ dropList, text }) => {
	const [open, setOpen] = useState(false);
	return (
		<View
			className={styles('dropdown-wrapper')}
			onMouseLeave={() => setOpen(false)}
			onMouseOver={() => setOpen(true)}>
			<View className={styles('dropdown-title')}>
				<Text>{text}</Text>
				<DownArrowIcon />
			</View>
			{open && (
				<View className={styles('dropdown-links')}>
					<ul>
						{dropList.length &&
							dropList.map(({ url, text }) => (
								<li key={url}>
									<Text variant="Link" to={url}>
										{text}
									</Text>
								</li>
							))}
					</ul>
				</View>
			)}
		</View>
	);
};

export default Dropdown;
