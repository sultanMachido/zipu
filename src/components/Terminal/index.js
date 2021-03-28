import React from 'react';
import './styles.scss';
import { OutlinedButton } from '../../components/FormField'

const Terminal = (props) => {
  console.log(props?.transco, ['transco'])
  return (
    <div className="terminalCardWrapper">
      <div className="terminalLeft">
        <h2>{props?.terminal?.name}</h2>
        <p>27 busses</p>
        <p>17 Staff</p>
        {OutlinedButton('View Terminal')}
      </div>
      <div className="terminalRight">
        <p>{props?.terminal?.status === 1 ? <span className="active">Active</span> : <span className="inactive">Deactivated</span>}</p>
      </div>
    </div>
  )
}

export default Terminal;