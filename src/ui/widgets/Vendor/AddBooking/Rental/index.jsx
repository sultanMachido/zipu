import classnames from 'classnames/bind';
import React from 'react';
import Container from 'ui/atoms/components/Container';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import Toggle from 'ui/components/Toggle';

import style from './index.module.scss';

const styles = classnames.bind(style);

const AddBooking = () => {
	return (
		<View className={styles('view-terminal-wrapper')}>
			<Container className={styles('inner-wrapper')}>
				<View className={styles('toggle-wrapper')}>
					<Toggle />
				</View>
				<View className={styles('row-container')}>
					<View className={styles('first-column')}>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
						<View className={styles('input-group')}>
							<TextInput />
						</View>
					</View>
					<View className={styles('second-column')}></View>
				</View>
				<View className={styles('button-container')}>
					<button>SAVE VEHICLE</button>
				</View>
			</Container>
		</View>
	);
};

export default AddBooking;
