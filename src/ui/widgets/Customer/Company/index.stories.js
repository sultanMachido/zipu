import React from 'react';

import Company from '.';

export default {
	title: 'Pages/Company',
	component: Company
};

const Template = (args) => {
	return <Company {...args} />;
};

export const Default = Template.bind({});
