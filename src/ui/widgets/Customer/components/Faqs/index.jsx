import classnames from 'classnames/bind';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';
import Accordion from 'ui/widgets/Customer/components/Accordion/Accordion.jsx';

import style from './index.module.scss';
import { questions } from './MOCK_DATA';

let styles = classnames.bind(style);

const FAQS = () => {
	return (
		<View className={`tscol ${styles('faq--items')}`}>
			{questions.map((item, index) => (
				<Accordion id={index} key={index} answer={item} />
			))}
		</View>
	);
};

export default FAQS;
