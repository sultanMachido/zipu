import classnames from 'classnames/bind';
import React from 'react';
import Container from 'ui/atoms/components/Container';
import { TextInput } from 'ui/atoms/components/TextInput';
import { Text, View } from 'ui/atoms/components/Typography';
import { SearchIcon } from 'ui/svgs';

import style from './index.module.scss';

const styles = classnames.bind(style);

const ViewTerminal = () => {
	return (
		<View className={styles('view-terminal-wrapper')}>
			<Container className={styles('inner-wrapper')}>
				<View className={styles('header')}>
					<Text variant="h4">Alimosho Terminal staff</Text>
					<View className={styles('input-group')}>
						<View className={styles('input')}>
							<SearchIcon />
							<TextInput
								type="text"
								placeholder="Search for staff"
								wrapperClass={styles('search')}
							/>
						</View>
					</View>
				</View>
			</Container>
		</View>
	);
};

export default ViewTerminal;
