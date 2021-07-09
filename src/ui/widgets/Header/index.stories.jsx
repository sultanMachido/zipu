import React from 'react';

import Header from '.';

export default {
	title: 'Widgets/Header',
	component: Header
};

const Template = (args) => {
	return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
