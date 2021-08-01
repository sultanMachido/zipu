import React from 'react';

import Company from '.';
// import { mockData_Company } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/Company',
	component: Company
};

const Template = (args) => {
	return <Company {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	// ...mockData_Company
};
