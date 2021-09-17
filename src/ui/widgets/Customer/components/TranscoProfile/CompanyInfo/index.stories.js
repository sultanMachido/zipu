/* eslint-disable prettier/prettier */
import React from 'react';

import CompanyInfo from '.';
import { mockData_CompanyInfo } from './MOCK_DATA';

export default {
	title: 'Widgets/TransoProfile/CompanyInfo',
	component: CompanyInfo
};

const Template = (args) => <CompanyInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_CompanyInfo
};
