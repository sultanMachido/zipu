import React from 'react';

import PersonalDetails from './';
import {mockData_PersonalDetails} from './MOCK_DATA';

export default {
	title: 'Widgets/BookingPage/PersonalDetails',
	component: PersonalDetails
};

const Template = args => <PersonalDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_PersonalDetails
};
