import React from 'react';
import { MemoryRouter } from 'react-router';
import { ModalProvider } from '../src/providers/ModalProvider';
import '../src/ui/atoms/styles/_base.scss';

export const decorators = [
	(Story) => (
		<ModalProvider>
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		</ModalProvider>
	)
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};
