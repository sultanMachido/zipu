import './faq.scss';

import classnames from 'classnames/bind';
import React, { useRef, useState } from 'react';
import { View } from 'ui/atoms/components/Typography';

import style from './Faq.module.scss';

let styles = classnames.bind(style);

import Chevron from './Chevron.jsx';

const Accordion = ({ answer, id }) => {
	const [activeId] = useState(id);
	const [setRotate] = useState('faqs--content--answers-item--icon');

	const content = useRef(null);

	// eslint-disable-next-line no-unused-vars
	const toggleAccordion = (e) => {
		const panels = Array.from(document.querySelectorAll('.faqs--content--answers-item--content'));
		panels.forEach((panel) => {
			var panelId = panel.previousElementSibling.attributes.id.nodeValue;
			var svg = panel.previousElementSibling.childNodes[1];

			if (panel.classList.contains('active')) {
				//clicked twice consecutively
				panel.classList.remove('active');
				svg.classList.remove('rotate');
				svg.classList.add('rotate-back');
				panel.style.transition = 'max-height 0.6s ease';
				panel.style.maxHeight = '0px';
			} else {
				//Clicked once
				if (activeId === parseInt(panelId)) {
					svg.classList.remove('rotate-back');
					svg.classList.add('rotate');
					panel.style.transition = 'max-height 0.6s ease';
					panel.style.maxHeight = content.current.scrollHeight + 'px';
					panel.classList.add('active');
				} else {
					panel.classList.remove('active');
					svg.classList.remove('rotate');
					svg.classList.add('rotate-back');
					panel.style.transition = 'max-height 0.6s ease';
					panel.style.maxHeight = '0px';
				}
			}
		});
	};

	return (
		<View className={styles('faqs--content--answers-item')}>
			<button
				data-id={id}
				id={id}
				className={styles('faqs--content--answers-item--button')}
				onClick={toggleAccordion}>
				<p data-id={id} className="faqs--content--answers-item--title">
					{answer.question}
				</p>
				<Chevron data={id} className={`${setRotate}`} />
			</button>
			<section ref={content} className="faqs--content--answers-item--content">
				<p>{answer.answer}</p>
			</section>
		</View>
	);
};

export default Accordion;
