import React from 'react';

import ChargesSummary from './';
import { mockData_ChargesSummary } from './MOCK_DATA';

export default {
	title: 'Widgets/BookingPage/ChargesSummary',
	component: ChargesSummary
};

const Template = args => <ChargesSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
    ...mockData_ChargesSummary
};
