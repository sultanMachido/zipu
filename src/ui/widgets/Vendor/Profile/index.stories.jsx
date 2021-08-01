import React from 'react';

import Profile from '.';
// import { mockData_Profile } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/Profile',
	component: Profile
};

const Template = (args) => {
	return <Profile {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	// ...mockData_Profile
};
