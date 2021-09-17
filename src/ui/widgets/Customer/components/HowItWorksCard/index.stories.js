/* eslint-disable prettier/prettier */
import React from 'react';

import HowItWorksCard from './';
import { howItWorks } from './MOCK_DATA';

export default {
	title: 'Components/HowItWorksCard',
	component: HowItWorksCard
};

const Template = (args) => <HowItWorksCard howItWork={args} />;

export const Default = Template.bind({});
Default.args = howItWorks;
