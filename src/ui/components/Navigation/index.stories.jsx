import React from 'react';

import Navigation from '.';

export default {
	title: 'Widgets/Navigation',
	component: Navigation
};

const Template = (args) => {
	return <Navigation {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
