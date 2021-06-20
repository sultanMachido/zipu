import React from 'react';

import BookingStatusForm from './';
import {mockData_BookingStatusForm} from './MOCK_DATA';

export default {
	title: 'Components/Modals/BookingStatusForm',
	component: BookingStatusForm
};

const Template = args => <BookingStatusForm {...args} />;

export const Default = Template.bind({});
Default.args = {...mockData_BookingStatusForm};
