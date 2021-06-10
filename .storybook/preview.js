import React from 'react';
import {MemoryRouter} from 'react-router';
import '@kenshooui/react-multi-select/dist/style.css';
import 'rsuite/lib/styles/index.less';
import '../src/index.scss';
import 'antd/dist/antd.css';
import '../src/layouts/styles.scss';

export const decorators = [
	Story => (
		<MemoryRouter>
			<Story />
		</MemoryRouter>
	)
];

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
