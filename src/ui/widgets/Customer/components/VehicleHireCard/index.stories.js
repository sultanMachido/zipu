import React from 'react';

import VehicleHireCard from '.';
import { mockData_VehicleHireCard } from './MOCK_DATA';

export default {
	title: 'Components/VehicleHireCard',
	component: VehicleHireCard
};

const Template = (args) => {
	return <VehicleHireCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	...mockData_VehicleHireCard
};
