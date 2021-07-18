import React from 'react';

import AddBooking from '.';

export default {
	title: 'Widgets/Vendor/Rental/AddBooking',
	component: AddBooking
};

const Template = (args) => {
	return <AddBooking {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
