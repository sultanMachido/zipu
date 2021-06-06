import React from 'react';

import EmptyScreen from './';
import {mockData_EmptyScreen} from './MOCK_DATA';

export default {
	title: 'Components/EmptyScreen',
	component: EmptyScreen
};

const Template = args => <EmptyScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_EmptyScreen
};
