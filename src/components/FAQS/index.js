import React from 'react';
import Accordion from "components/Accordion/Accordion.jsx";

import './styles.scss';

const questions = [
	{
    id:2,
    question:'Book a trip or rent a car going to all parts all trips ',
    answer:"estment manager is stuck midway now"
  },
  {
    id:3,
    question:'How do i check my booking before my trip',
    answer:"All funds are held (SEC)"
  },
  {
    id:4,
    question:'What should I look for when I’m choosing a car?',
    answer:`Create as many plans as you need; Rent, Emergency`
  },
  {
    id:5,
    question:'Can I book a hire car for someone else?',
    answer:`Create as many plans as you need; Rent, Emergency`
  },
];

const FAQS = () => {
	return (
		<div className="faqWrapper">
			<h2 className="title-lg black">How it all works</h2>
			<h2 className="title-sm mt-xs mb-sm black">These popular destinations have a lot to offer</h2>

			<div className="d-flex justify-between faqContainer">
					<div className="col_2 tscol faqItems">
						{questions.map((item,index) => (
							<Accordion id={index}  key={index} answer={item} />
						))}
					</div>
					<div className="col_2 faqGallery">
						
						<div className="tscol faqGallery__item item-1">
							<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
							<p className="p-xs">A full driving license will be required at the rental desk in order for you</p>
						</div>
						<div className="tscol faqGallery__item item-2">
							<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
							<p className="p-xs">A full driving license will be required at the rental desk in order for you</p>
						</div>
						<div className="tscol faqGallery__item item-3">
							<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
							<p className="p-xs">A full driving license will be required at the rental desk in order for you</p>
						</div>
						<div className="tscol faqGallery__item item-4">
							<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
							<p className="p-xs">A full driving license will be required at the rental desk in order for you</p>
						</div>
					</div>	
			</div>
		</div>
	);
};

export default FAQS;
