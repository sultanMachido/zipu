import React from 'react';
import FaqItems from 'components/FaqItems';
import './styles.scss';

const questions = [1, 2, 3, 4, 5];

const FAQS = () => {
	return (
		<div className="faqWrapper">
			<h2 className="title-lg black">How it all works</h2>
			<h2 className="title-sm mt-xs mb-sm black">
				These popular destinations have a lot to offer
			</h2>

			<div className="d-flex justify-between faqContainer">
				<div className="col_2 tscol faqItems">
					{questions.map(() => (
						<p className=""></p>
					))}
					<FaqItems />
				</div>
				<div className="col_2 faqGallery">
					<div className="tscol faqGallery__item item-1">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for
							you
						</p>
					</div>
					<div className="tscol faqGallery__item item-2">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for
							you
						</p>
					</div>
					<div className="tscol faqGallery__item item-3">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for
							you
						</p>
					</div>
					<div className="tscol faqGallery__item item-4">
						<h2 className="p-lg white">Our lagos to ibadan hotspots</h2>
						<p className="p-xs">
							A full driving license will be required at the rental desk in order for
							you
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQS;
