import React from 'react';

import TitleNav from '.';

export default {
	title: 'Components/TitleNav',
	component: TitleNav
};

const Template = (args) => {
	return <TitleNav {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	url: '/',
	text: 'Sample text'
};
