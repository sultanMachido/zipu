import React from 'react';

import Checks from '.';

export default {
	title: 'Components/Checks',
	component: Checks
};

const Template = (args) => <Checks {...args} />;

export const Default = Template.bind({});
Default.args = {
	tripInfo: ['Return trip available', 'VIP', 'Cancellation refund']
};
