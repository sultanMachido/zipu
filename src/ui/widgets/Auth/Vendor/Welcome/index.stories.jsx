import React from 'react';

import Welcome from '.';

export default {
	title: 'Widgets/Auth/Vendor/Welcome',
	component: Welcome
};

const Template = (args) => {
	return <Welcome {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
