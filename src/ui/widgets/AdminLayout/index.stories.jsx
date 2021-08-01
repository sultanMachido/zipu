import React from 'react';

import AdminLayout from '.';

export default {
	title: 'Widgets/AdminLayout',
	component: AdminLayout
};

const Template = (args) => {
	return <AdminLayout {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
