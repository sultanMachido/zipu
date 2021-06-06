import React from 'react';

import TripPackages from './';

export default {
	title: 'Components/TripPackages',
	component: TripPackages
};

const Template = args => <TripPackages {...args} />;

export const Default = Template.bind({});
