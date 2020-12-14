import React from 'react';
import './styles.scss';
import { SubmitButton } from '../../components/FormField'

const EmptyScreen = ({ icon, title, subText, buttonText }) => {
    console.log(icon)
    return (
        <div className="emptyScreen">
            <div className="iconWrapper">
                {icon}
            </div>

            <h3>{title}</h3>
            <p>{subText}</p>
            <div className="btnWrapper">
                {
                    SubmitButton(buttonText)
                }
            </div>

        </div>
    )
}


export default EmptyScreen;