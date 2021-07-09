import React from 'react';

import Navigation from '.';

export default {
	title: 'Components/Navigation',
	component: Navigation
};

const Template = (args) => {
	return <Navigation {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	navLinks: [
		{
			text: 'Top Destinations',
			type: 'dropdown',
			dropList: [
				{ text: 'link', url: '/' },
				{ text: 'link', url: '/' },
				{ text: 'link', url: '/' }
			]
		},
		{
			text: 'Partners',
			type: 'dropdown',
			dropList: [
				{ text: 'link', url: '/' },
				{ text: 'link', url: '/' },
				{ text: 'link', url: '/' }
			]
		},
		{ text: 'Check your booking', url: '/hello' },
		{ text: 'FAQ', url: '/' },
		{ text: 'Blog', url: '/' },
		{ text: 'Sign in', action: 'login' },
		{ text: 'Sign up', action: 'sign-up' }
	]
};
