import React from 'react';

import ActivityLayout from '.';

export default {
	title: 'Widgets/ActivityLayout',
	component: ActivityLayout
};

const Template = (args) => {
	return <ActivityLayout {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
