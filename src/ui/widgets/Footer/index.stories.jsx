import React from 'react';

import Footer from '.';

export default {
	title: 'Widgets/Footer',
	component: Footer
};

const Template = (args) => {
	return <Footer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
