import React from 'react';

import TranscoHeader from '.';
import {mockData_TranscoHeader} from './MOCK_DATA';

export default {
	title: 'Widgets/TransoProfile/TranscoHeader',
	component: TranscoHeader
};

const Template = args => <TranscoHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TranscoHeader
};
