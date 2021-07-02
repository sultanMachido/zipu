import React from 'react';

import CAC from '.';

export default {
	title: 'Widgets/Auth/Vendor/CAC',
	component: CAC
};

const Template = (args) => {
	return <CAC {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
