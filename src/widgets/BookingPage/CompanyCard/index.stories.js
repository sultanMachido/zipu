import React from 'react';

import CompanyCard from './';
import {mockData_CompanyCard} from './MOCK_DATA';

export default {
	title: 'Widgets/BookingPage/CompanyCard',
	component: CompanyCard
};

const Template = args => <CompanyCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_CompanyCard
};
