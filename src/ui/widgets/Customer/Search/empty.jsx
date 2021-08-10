/* eslint-disable no-unused-vars */
import { Slider } from 'antd';
import { ReactComponent as EmptyIcon } from 'assets/svg/Empty.svg';
import classnames from 'classnames/bind';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);
import './index.scss';

import React, { Fragment, useEffect } from 'react';

const EmptyState = (props) => {
	return (
		<Fragment>
			<View className={styles('empty--state')}>
				<figure className="mb-4">
					<EmptyIcon />
				</figure>
				<h2 className="sub-lg text-center black">No Result Found</h2>
				<p className="body-2-lg text-center grey-dark">
					Try adjusting your search criteria and use filters
				</p>
			</View>
		</Fragment>
	);
};

export default EmptyState;
