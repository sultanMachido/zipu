import React from 'react';

import BookTrip from './';

export default {
	title: 'Components/BookTrip',
	component: BookTrip
};

const Template = (args) => <BookTrip {...args} />;

export const Default = Template.bind({});
