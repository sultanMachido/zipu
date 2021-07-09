import classnames from 'classnames/bind';
import React from 'react';
import { FormButton } from 'ui/atoms/components/Button';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

const styles = classnames.bind(style);

const StaffActivity = ({ profile }) => {
	return (
		<View className={styles('staff-activity-wrapper')}>
			<Container className={styles('inner-wrapper')}>
				<View className={styles('role-column')}>
					<Text variant="h3">{profile.name}</Text>
					{profile?.info.length &&
						profile.info.map(({ text, value }) => (
							<View key={text} className={styles('info-block')}>
								<Text fontWeight="bold">{value}</Text>
								<Text fontWeight="500" color="grey-dark">
									{text}
								</Text>
							</View>
						))}
					<View className={styles('button-block')}>
						<View className={styles('badge')}>Active</View>
						<View className={styles('button-container')}>
							<FormButton className={styles('button')}>EDIT ROLE</FormButton>
						</View>
					</View>
				</View>
				<View className={styles('status-column')}>
					<Text variant="h3">Activity status</Text>
					<View className={styles('table-container')}>
						<View className={styles('title')}>
							<Text>Module</Text>
							<Text>Event decsription</Text>
							<Text>Event date</Text>
						</View>
						<View className={styles('table')}>
							<View className={styles('table-row')}>
								<Text fontWeight="500">Terminal</Text>
								<Text fontWeight="500">View alimosho terminal</Text>
								<Text fontWeight="500">10/20/2020 15:32</Text>
							</View>
							<View className={styles('table-row')}>
								<Text fontWeight="500">Terminal</Text>
								<Text fontWeight="500">View alimosho terminal</Text>
								<Text fontWeight="500">10/20/2020 15:32</Text>
							</View>
						</View>
					</View>
				</View>
			</Container>
		</View>
	);
};

export default StaffActivity;
