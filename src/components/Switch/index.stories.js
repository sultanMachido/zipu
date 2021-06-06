import React from 'react';

import SwitchComponent from './';

export default {
	title: 'Components/SwitchComponent',
	component: SwitchComponent
};

const Template = args => <SwitchComponent {...args} />;

export const Default = Template.bind({});
