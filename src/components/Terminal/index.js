import React from 'react';
import './styles.scss';
import { OutlinedButton } from '../../components/FormField'

const Terminal = (props) => {
  return (
    <div className="terminalCardWrapper">
      <div className="terminalLeft">
        <h2>{props?.terminal?.name}</h2>
        <p>{props?.transco.number_of_buses}</p>
        <p>{props?.transco.number_of_staff}</p>
        {OutlinedButton('View Terminal')}
      </div>
      <div className="terminalRight">
        <p>{props?.terminal?.status === 1 ? <span className="active">Active</span> : <span className="inactive">Deactivated</span>}</p>
      </div>
    </div>
  )
}

export default Terminal;