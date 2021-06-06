import React from 'react';
import {MemoryRouter} from 'react-router-dom/cjs/react-router-dom.min';

import TitlePane from './';
import {mockData_TitlePane} from './MOCK_DATA';

export default {
	title: 'Components/TitlePane',
	component: TitlePane,
	decorators: [
		Story => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		)
	]
};

const Template = args => <TitlePane {...args} />;

export const Default = Template.bind({});
Default.args = {
	...mockData_TitlePane
};
