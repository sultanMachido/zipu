import React from 'react';

import CreateTerminal from '.';

export default {
	title: 'Widgets/Vendor/CreateTerminal',
	component: CreateTerminal
};

const Template = (args) => {
	return <CreateTerminal {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
