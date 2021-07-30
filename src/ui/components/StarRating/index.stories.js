/* eslint-disable prettier/prettier */
import React from 'react';

import StarRating from '.';
// import {mockData_StarRating} from './MOCK_DATA';

export default {
	title: 'Components/StarRating',
	component: StarRating
};

const Template = args => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = {
	rating: 4
};
