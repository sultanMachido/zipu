import React from 'react';

import AdminLogin from '.';

export default {
	title: 'Widgets/Auth/AdminLogin',
	component: AdminLogin
};

const Template = (args) => {
	return <AdminLogin {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
