import React from 'react';

import TripDetails from './';
import {mockData_TripDetails} from './MOCK_DATA';

export default {
	title: 'Widgets/BookingPage/TripDetails',
	component: TripDetails
};

const Template = args => <TripDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TripDetails
};
