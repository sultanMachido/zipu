import classnames from 'classnames/bind';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);

const AuthCard = ({ children, className, cardClass, innerCard }) => {
	return (
		<View className={styles('card-wrapper', className)}>
			<View className={styles('card', cardClass)}>
				<View className={styles('inner-card', innerCard)}>{children}</View>
			</View>
		</View>
	);
};

export default AuthCard;
