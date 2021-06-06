import React from 'react';

import Terminal from './';
import {mockData_Terminal} from './MOCK_DATA';

export default {
	title: 'Components/Terminal',
	component: Terminal
};

const Template = args => <Terminal {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_Terminal
};
