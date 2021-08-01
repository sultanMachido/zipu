import classnames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import { Text, View } from 'ui/atoms/components/Typography';
import { PersonIcon } from 'ui/svgs';

import style from './index.module.scss';

const styles = classnames.bind(style);

const Empty = ({
	title = '',
	description = '',
	showBtn = true,
	btnText = '',
	btnLink = '/',
	component: Component
}) => {
	return (
		<View className={styles('empty-container')}>
			<Component />
			<Text variant="h2">{title}</Text>
			<Text variant="p">{description}</Text>
			{showBtn && (
				<View className={styles('button-container')}>
					<Link to={btnLink}>{btnText}</Link>
				</View>
			)}
		</View>
	);
};

export default Empty;
