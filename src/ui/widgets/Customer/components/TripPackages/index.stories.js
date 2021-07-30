import React from 'react';

import TripPackages from './';

export default {
	title: 'Components/TripPackages',
	component: TripPackages
};

const Template = (args) => {
	return <TripPackages {...args} />;
};

export const Default = Template.bind({});
