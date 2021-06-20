import React from 'react';

import SeatPosition from './';
import {mockData_SeatPosition} from './MOCK_DATA';

export default {
	title: 'Widgets/BookingPage/SeatPosition',
	component: SeatPosition
};

const Template = args => <SeatPosition {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_SeatPosition
};
