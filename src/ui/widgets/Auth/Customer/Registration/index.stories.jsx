import React from 'react';

import Registration from '.';

export default {
	title: 'Widgets/Auth/Vendor/Registration',
	component: Registration
};

const Template = (args) => {
	return <Registration {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
