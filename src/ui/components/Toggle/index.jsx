import classnames from 'classnames/bind';
import React from 'react';
import { Text, View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

const styles = classnames.bind(style);

const Toggle = ({ state, handleChange }) => {
	return (
		<View className={styles('toggle')}>
			<Text className={styles('active', { ['activate']: state })} onClick={handleChange}>
				Active
			</Text>
			<Text className={styles('disabled', { ['activate']: !state })} onClick={handleChange}>
				Disabled
			</Text>
		</View>
	);
};

export default Toggle;
