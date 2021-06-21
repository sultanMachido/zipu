import React from 'react';
import Accordion from 'components/Accordion/Accordion.jsx';

import './styles.scss';

const questions = [
	{
		id: 2,
		question: 'Book a trip or rent a car going to all parts all trips ',
		answer: 'estment manager is stuck midway now'
	},
	{
		id: 3,
		question: 'How do i check my booking before my trip',
		answer: 'All funds are held (SEC)'
	},
	{
		id: 4,
		question: 'What should I look for when I’m choosing a car?',
		answer: `Create as many plans as you need; Rent, Emergency`
	},
	{
		id: 5,
		question: 'Can I book a hire car for someone else?',
		answer: `Create as many plans as you need; Rent, Emergency`
	}
];

const FaqItems = () => {
	return (
		<div className="col_2 tscol faqItems">
			{questions.map((item, index) => (
				<Accordion id={index} key={index} answer={item} />
			))}
		</div>
	);
};

export default FaqItems;
