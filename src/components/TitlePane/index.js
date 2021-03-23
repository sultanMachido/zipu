import React from 'react';
import './styles.scss';
import LeftArrow from '../../assets/img/arrow-left-icon.svg';
import {Link} from 'react-router-dom';

const TitlePane = ({visible, title, prev}) => {
	return (
		visible && (
			<div className="titlePane">
				<Link to={prev}>
					<img src={LeftArrow} alt="left-arrow" />
				</Link>
				<h4>{title}</h4>
			</div>
		)
	);
};

export default TitlePane;
