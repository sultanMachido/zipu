import { Button } from 'antd';
import React from 'react';
import './styles.scss';

const EmptyScreen = ({ img, title, subText }) => {
    return (
        <div className="emptyScreen">
            <img alt="empty-icon" src={img} />
            <h3>{title}</h3>
            <p>{subText}</p>
            <Button type="primary">CREATE STAFF PROFILE</Button>
        </div>
    )
}


export default EmptyScreen;