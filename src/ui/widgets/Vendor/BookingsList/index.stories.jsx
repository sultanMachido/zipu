import React from 'react';

import BookingsList from '.';
// import { mockData_BookingsList } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/BookingsList',
	component: BookingsList
};

const Template = (args) => {
	return <BookingsList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	// ...mockData_BookingsList
};
