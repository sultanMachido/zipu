import React from 'react';
import './styles.scss';
import {SubmitButton} from '../../components/FormField';

const EmptyScreen = ({icon, title, subText, buttonText, handleClick}) => {
	console.log(icon);
	return (
		<div className="emptyScreen">
			<div className="iconWrapper">{icon}</div>

			<h3>{title}</h3>
			<p>{subText}</p>
			<div className="btnWrapper">{SubmitButton(buttonText, handleClick)}</div>
		</div>
	);
};

export default EmptyScreen;
