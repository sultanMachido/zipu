import React from 'react';
import LeftArrow from '../../assets/img/arrow-left-icon.svg';
import { Link } from 'react-router-dom';

import './styles.scss';

const InnerPageHeader = ({ title, prev }) => {
  return (
    <div className="wrapper">
      <Link to={prev}>
        <img src={LeftArrow} alt="left-arrow" />
      </Link>
      <h4>{title}</h4></div>
  )
}

export default InnerPageHeader;