import React from 'react';

import Login from '.';

export default {
	title: 'Widgets/Auth/Vendor/Login',
	component: Login
};

const Template = (args) => {
	return <Login {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
