import React from 'react';

import VehicleSpecs from '.';

export default {
	title: 'Components/VehicleSpecs',
	component: VehicleSpecs
};

const Template = (args) => <VehicleSpecs {...args} />;

export const Default = Template.bind({});
Default.args = {
	vehicleInfo: {
		seater: '40 seater',
		luggage: '1 hand luggage',
		airCondition: 'AC available',
		toilet: 'toilet available'
	}
};
