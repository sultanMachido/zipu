import React from 'react';

import TripCard from '.';
import { mockData_TripCard } from './MOCK_DATA';

export default {
	title: 'Components/TripCard',
	component: TripCard
};

const Template = args => <TripCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TripCard
};
