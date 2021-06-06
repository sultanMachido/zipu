import React from 'react';

import SeatsArrangements from './';
import {mockData_SeatsArrangements} from './MOCK_DATA';

export default {
	title: 'Components/SeatsArrangements',
	component: SeatsArrangements
};

const Template = args => <SeatsArrangements {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_SeatsArrangements
};
