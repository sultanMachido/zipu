import React from 'react';

import ViewBookingsModal from './';
import {mockData_ViewBookingsModal} from './MOCK_DATA';

export default {
	title: 'Components/Modals/ViewBookingsModal',
	component: ViewBookingsModal
};

const Template = args => <ViewBookingsModal {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_ViewBookingsModal
};
