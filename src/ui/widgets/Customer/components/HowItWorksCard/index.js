import './styles.scss';

import React from 'react';

const HowItWorksCard = ({ howItWork }) => {
	return (
		<div className="howItWorksCardWrapper" key={howItWork.id}>
			<div className="iconWrapper">
				<img src={howItWork.icon} alt="howItWorks icon" />
			</div>
			<div className="howItWorksContent">
				<h1 className="action-lg black mb-xs font-500">{howItWork.title}</h1>
				<p className="body-2-lg black">{howItWork.content}</p>
			</div>
		</div>
	);
};
export default HowItWorksCard;
