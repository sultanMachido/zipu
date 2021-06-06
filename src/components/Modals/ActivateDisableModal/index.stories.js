import React from 'react';

import ActivateDisableModal from './';
import { mockData_ActivateDisableModal } from './MOCK_DATA';

export default {
	title: 'Components/Modals/ActivateDisableModal',
	component: ActivateDisableModal
};

const Template = args => <ActivateDisableModal {...args} />;

export const Default = Template.bind({});
Default.args = mockData_ActivateDisableModal;
