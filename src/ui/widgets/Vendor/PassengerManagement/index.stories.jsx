import React from 'react';

import { mockData_StaffManagement } from '../StaffManagement/MOCK_DATA';
import PassengerManagement from '.';
// import { mockData_PassengerManagement } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/PassengerManagement',
	component: PassengerManagement
};

const Template = (args) => {
	return <PassengerManagement {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	...mockData_StaffManagement
};
