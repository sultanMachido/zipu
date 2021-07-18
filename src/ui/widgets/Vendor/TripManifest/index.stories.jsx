import React from 'react';

import TripManifest from '.';

export default {
	title: 'Widgets/Vendor/TripManifest',
	component: TripManifest
};

const Template = (args) => {
	return <TripManifest {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
