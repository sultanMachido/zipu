import React from 'react';

import AddStaff from '.';

export default {
	title: 'Widgets/Vendor/AddStaff',
	component: AddStaff
};

const Template = (args) => {
	return <AddStaff {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
