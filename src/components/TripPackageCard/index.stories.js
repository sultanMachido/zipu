import React from 'react';

import TripPackageCard from './';
import { mockData_TripPackageCard } from './MOCK_DATA';

export default {
	title: 'Components/TripPackageCard',
	component: TripPackageCard
};

const Template = args => <TripPackageCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TripPackageCard
};
