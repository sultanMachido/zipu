/* eslint-disable jsx-a11y/anchor-is-valid */
import classnames from 'classnames/bind';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from 'ui/atoms/components/Container';
import { Text, View } from 'ui/atoms/components/Typography';
import { ArrowLeft } from 'ui/svgs/ArrowLeft';

import style from './index.module.scss';

const styles = classnames.bind(style);

const TitleNav = ({ url, text }) => {
	const history = useHistory();
	return (
		<View className={styles('title-nav-wrapper')}>
			<Container className={styles('inner-wrapper')}>
				<Link to="#" onClick={() => history.goBack()}>
					<ArrowLeft />
				</Link>
				<Text variant="h4" color="white">
					{text}
				</Text>
			</Container>
		</View>
	);
};

export default TitleNav;
