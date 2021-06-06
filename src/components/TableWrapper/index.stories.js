import React from 'react';

import TableWrapper from './';
import {mockData_TableWrapper} from './MOCK_DATA';

export default {
	title: 'Components/TableWrapper',
	component: TableWrapper
};

const Template = args => <TableWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TableWrapper
};
