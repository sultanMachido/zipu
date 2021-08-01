import React from 'react';

import { mockData_StaffManagement } from '../StaffManagement/MOCK_DATA';
import TerminalStaff from '.';

export default {
	title: 'Widgets/Vendor/TerminalStaff',
	component: TerminalStaff
};

const Template = (args) => {
	return <TerminalStaff {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	...mockData_StaffManagement
};
