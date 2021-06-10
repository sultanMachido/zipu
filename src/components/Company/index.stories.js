import React from 'react';
import GIGM from '../../assets/img/GIGMLogo.png';

import Company from '.';

export default {
	title: 'Components/Company',
	component: Company
};

const Template = args => <Company {...args} />;

export const Default = Template.bind({});
Default.args = {
	companyInfo: {
		imgUrl: GIGM,
		tripsCompleted: '24000 trips completed',
		rating: 4,
		reviewCount: 2000
	}
};
