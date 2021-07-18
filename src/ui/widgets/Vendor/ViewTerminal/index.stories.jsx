import React from 'react';

import ViewTerminal from '.';
// import { mockData_ViewTerminal } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/ViewTerminal',
	component: ViewTerminal
};

const Template = (args) => {
	return <ViewTerminal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	// ...mockData_ViewTerminal
};
