import React from 'react';
import './styles.scss';
import LeftArrow from '../../assets/img/arrow-left-icon.svg';
import { Link } from 'react-router-dom';

const TitlePane = ({ visible, title, prev, isCustomer, content }) => {
	return (
		visible && (
			<div className="titlePane">
				{
					!isCustomer ?
						<>
							<Link to={prev}>
								<img src={LeftArrow} alt="left-arrow" />
							</Link>
							<h4>{title}</h4>
						</>
						:
						<div>
							{content()}
						</div>
				}

			</div>
		)
	);
};

export default TitlePane;
