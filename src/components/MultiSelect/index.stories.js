import React from 'react';

import CustomMultiSelect from './';
import {mockData_MultiSelect} from './MOCK_DATA';

export default {
	title: 'Components/CustomMultiSelect',
	component: CustomMultiSelect
};

const Template = args => <CustomMultiSelect {...args} />;

export const Default = Template.bind({});
Default.args = mockData_MultiSelect;
