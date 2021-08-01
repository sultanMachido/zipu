import React from 'react';

import { mockData_TerminalManagement } from '../TerminalManagement/MOCK_DATA';
import VehicleListing from '.';
// import { mockData_VehicleListing } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/VehicleListing',
	component: VehicleListing
};

const Template = (args) => {
	return <VehicleListing {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	...mockData_TerminalManagement
};
