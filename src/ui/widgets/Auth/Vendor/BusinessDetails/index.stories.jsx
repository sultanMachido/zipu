import React from 'react';

import BusinessDetails from '.';

export default {
	title: 'Widgets/Auth/Vendor/BusinessDetails',
	component: BusinessDetails
};

const Template = (args) => {
	return <BusinessDetails {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
