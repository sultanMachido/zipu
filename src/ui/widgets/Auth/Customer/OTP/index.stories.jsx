import React from 'react';

import OTP from '.';

export default {
	title: 'Widgets/Auth/Vendor/OTP',
	component: OTP
};

const Template = (args) => {
	return <OTP {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
