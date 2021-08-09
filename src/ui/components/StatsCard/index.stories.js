import React from 'react';

import StatsCard from '.';
import {mockData_StatsCard} from './MOCK_DATA';

export default {
	title: 'Components/StatsCard',
	component: StatsCard
};

const Template = args => <StatsCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_StatsCard
};
