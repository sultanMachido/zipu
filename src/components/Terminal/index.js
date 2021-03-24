import React from 'react';
import './styles.scss';
import { OutlinedButton } from '../../components/FormField'

const Terminal = (props) => {
  return (
    <div className="terminalCardWrapper">
      <div className="terminalLeft">
        <h2>Alimosho Terminal</h2>
        <p>27 busses</p>
        <p>17 Staff</p>
        {OutlinedButton('View Terminal')}
      </div>
      <div className="terminalRight">
        <span>Active</span>
      </div>
    </div>
  )
}

export default Terminal;