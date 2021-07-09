import React from 'react';

import Vendor from '.';

export default {
	title: 'Widgets/Header/Vendor',
	component: Vendor
};

const Template = (args) => {
	return <Vendor {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
