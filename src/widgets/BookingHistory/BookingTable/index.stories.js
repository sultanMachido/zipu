import React from 'react';

import BookingTable from './';
import {mockData_BookingTable} from './MOCK_DATA';

export default {
	title: 'Widgets/BookingHistory/BookingTable',
	component: BookingTable
};

const Template = args => <BookingTable {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_BookingTable
};
