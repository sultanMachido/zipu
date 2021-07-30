import React from 'react';

import TranscoService from './';
import { mockData_TranscoService } from './MOCK_DATA';

export default {
	title: 'Components/TranscoService',
	component: TranscoService
};

const Template = (args) => <TranscoService {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TranscoService
};
