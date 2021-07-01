import React from 'react';

import TransportType from '.';

export default {
	title: 'Widgets/Auth/Vendor/TransportType',
	component: TransportType
};

const Template = (args) => {
	return <TransportType {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
