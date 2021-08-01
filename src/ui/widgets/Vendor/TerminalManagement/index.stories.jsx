import React from 'react';

import TerminalManagement from '.';
import { mockData_TerminalManagement } from './MOCK_DATA';

export default {
	title: 'Widgets/Vendor/TerminalManagement',
	component: TerminalManagement
};

const Template = (args) => {
	return <TerminalManagement {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	...mockData_TerminalManagement
};
