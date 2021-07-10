import classNames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import { Text, View } from 'ui/atoms/components/Typography';

import AuthCard from '../../AuthCard';
import style from './index.module.scss';

let styles = classNames.bind(style);

const Welcome = () => {
	return (
		<AuthCard cardClass={styles('welcome-wrapper')} innerCard={styles('inner-card')}>
			<View className={styles('text-container')}>
				<Text color="white" variant="h4" fontWeight="bold">
					Welcome
				</Text>
				<Text color="white">
					Registration was successful. Welcome to Zipu GIGM Motors, conviently manage your company,
					staff, trips, terminals and many more
				</Text>
				<FormButton>GO TO DASHBOARD</FormButton>
			</View>
		</AuthCard>
	);
};

export default Welcome;
