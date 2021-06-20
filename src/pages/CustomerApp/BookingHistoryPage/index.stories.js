import React from 'react';

import BookingHistoryPage from './';

export default {
	title: 'Pages/BookingHistoryPage',
	component: BookingHistoryPage
};

const Template = args => <BookingHistoryPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
