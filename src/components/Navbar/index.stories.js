import React from 'react';
import {MemoryRouter} from 'react-router-dom/cjs/react-router-dom.min';

import Navbar from './';
import {mockData_Navbar} from './MOCK_DATA';

export default {
	title: 'Components/Navbar',
	component: Navbar,
	decorators: [
		Story => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		)
	]
};

const Template = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_Navbar
};
