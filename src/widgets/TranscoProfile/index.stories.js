import React from 'react';

import TranscoProfile from '.';
import {mockData_TranscoProfile} from './MOCK_DATA';

export default {
	title: 'Widgets/TransoProfile',
	component: TranscoProfile
};

const Template = args => <TranscoProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TranscoProfile
};
