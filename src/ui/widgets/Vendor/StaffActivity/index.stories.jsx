import React from 'react';

import StaffActivity from '.';
import { mockData_StaffActivity } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/StaffActivity',
	component: StaffActivity
};

const Template = (args) => {
	return <StaffActivity {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	...mockData_StaffActivity
};
