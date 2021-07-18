import classnames from 'classnames/bind';
import React from 'react';
import Container from 'ui/atoms/components/Container';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

const styles = classnames.bind(style);

const TripManifest = () => {
	return (
		<>
			<View className={styles('trip-header')}>
				<View>
					<Text>Benin, UBTH park - Lagos, Ojota motor park</Text>
					<View>
						<View className={styles('reminder')}>
							<Text variant="span">Send trip reminder</Text>
						</View>
						<View className={styles('code')}>
							<Text variant="span">Scan QR to check in</Text>
						</View>
						<View className={styles('date')}>
							<Text variant="span">7:00 am - 28 Oct, 2020</Text>
						</View>
					</View>
				</View>
				<View className={styles('passenger-info')}>
					<Text>102 passengers | 80 seats booked</Text>
					<View>
						<View>
							<Text>75%</Text>
							<Text>Seated</Text>
						</View>
						<View className={styles('badge')}>On Route</View>
					</View>
				</View>
			</View>
		</>
	);
};

export default TripManifest;
