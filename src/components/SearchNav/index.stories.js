import React from 'react';

import SearchNav from './';
import {mockData_SearchNav} from './MOCK_DATA';

export default {
	title: 'Components/SearchNav',
	component: SearchNav
};

const Template = args => <SearchNav {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_SearchNav
};
