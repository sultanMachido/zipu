import React from 'react';

import BookingPage from './';

export default {
	title: 'Pages/BookingPage',
	component: BookingPage
};

const Template = args => <BookingPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
