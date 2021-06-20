import React from 'react';

import BookingHeader from './';

export default {
	title: 'Widgets/BookingHistory/BookingHeader',
	component: BookingHeader
};

const Template = args => <BookingHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
