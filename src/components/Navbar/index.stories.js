import React from 'react';

import Navbar from './';
import {mockData_Navbar} from './MOCK_DATA';

export default {
	title: 'Components/Navbar',
	component: Navbar
};

const Template = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_Navbar
};
