import './styles.scss';

import React from 'react';

import FAQS from '../Faqs';

const questions = [1, 2, 3, 4, 5];

const FaqContainer = () => {
	return (
		<div className="faqWrapper">
			<h2 className="title-lg black">How it all works</h2>
			<h2 className="title-sm mt-xs mb-sm black">These popular destinations have a lot to offer</h2>

			<div className="d-flex justify-between faqContainer">
				<div className="col_2 tscol faqItems">
					{questions.map(() => (
						// eslint-disable-next-line react/jsx-key
						<p className=""></p>
					))}
					<FAQS />
				</div>
				<div className="col_2 faqGallery">
					<div className="tscol faqGallery__item item-1">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for you
						</p>
					</div>
					<div className="tscol faqGallery__item item-2">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for you
						</p>
					</div>
					<div className="tscol faqGallery__item item-3">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for you
						</p>
					</div>
					<div className="tscol faqGallery__item item-4">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for you
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqContainer;
