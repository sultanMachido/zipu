import React from 'react';

import StaffManagement from '.';
// import { mockData_StaffManagement } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/StaffManagement',
	component: StaffManagement
};

const Template = (args) => {
	return <StaffManagement {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	// ...mockData_StaffManagement
};
