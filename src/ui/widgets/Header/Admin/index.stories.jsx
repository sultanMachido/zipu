import React from 'react';

import Admin from '.';

export default {
	title: 'Widgets/Header/Admin',
	component: Admin
};

const Template = (args) => {
	return <Admin {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
