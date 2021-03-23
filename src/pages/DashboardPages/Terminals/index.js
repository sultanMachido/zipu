import React from 'react';
import { Checkbox, Divider } from 'antd'
import './styles.scss';
import { SubmitButton, StateSearchField, TerminalSearchField } from '../../../components/FormField';
import Terminal from '../../../components/Terminal'


const Terminals = (props) => {
  const inputSize = 'medium';

  console.log(props);

  const options = [
    { label: 'All', value: 'All' },
    { label: 'Ikorodu', value: 'Ikorodu' },
    { label: 'Uselu', value: 'Uselu' },
    { label: 'Aba', value: 'Aba' },
    { label: 'Iyana oworo', value: 'Iyana oworo' },
    { label: 'Abule egba', value: 'Abule egba' },
  ];
  const statusOptions = [
    { label: 'All', value: 'All' },
    { label: 'Active', value: 'Active' },
    { label: 'Deactivated', value: 'Deactivated' },
  ]
  const onSearch = () => {

  }

  const onChange = () => {

  }
  return (
    <div className="terminalsWrapper">
      <div className="terminalsHeader">
        <div className="leftHeader">
          <h2>Terminal All</h2>
        </div>
        <div className="rightHeader">
          <div className="stateSearch">{StateSearchField(inputSize)}</div>
          <div className="terminalSearch">{TerminalSearchField(onSearch)}</div>
          <div className="addBtn">{SubmitButton('ADD NEW')}</div>
        </div>
      </div>
      <div className="terminalContents">
        <div className="terminalContentLeft">
          <div className="terminals">
            <p>Terminals</p>
            <Checkbox.Group options={options} defaultValue={['All']} onChange={onChange} />
          </div>
          <Divider />
          <div className="status">
            <p>Status</p>
            <Checkbox.Group options={statusOptions} defaultValue={['All']} onChange={onChange} />
          </div>
        </div>
        <div className="terminalContentRight">
          <Terminal />
        </div>

      </div>
    </div>
  )
}

export default Terminals;