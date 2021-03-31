import React from 'react';
import { Checkbox, Divider } from 'antd';
import { connect } from 'react-redux';
import './styles.scss';
import { SubmitButton, StateSearchField, TerminalSearchField } from '../../../components/FormField';
import Terminal from '../../../components/Terminal';
import { getTerminals } from './../../../redux/actions/terminals/terminals.action';


const Terminals = (props) => {
  const inputSize = 'medium';

  const fetchTerminals = async () => {
    const response = await props.getTerminals();
    return response;
  };

  React.useEffect(() => {
    fetchTerminals();
  }, []);

  console.log(props.terminals, ['props.terminals'])

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

  const handleClick = () => {
    props.history.push('/terminals/add');
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
          <div className="addBtn">{SubmitButton('ADD NEW', handleClick)}</div>
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
          {
            props?.terminals?.getTerminalsSuccess?.terminals?.data?.map((terminal) => {
              return (
                <Terminal terminal={terminal} key={terminal.id} transco={props?.terminals?.getTerminalsSuccess?.transco} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    terminals: state.terminals,
  };
};

const mapDispatchToProps = {
  getTerminals,
};

export default connect(mapStateToProps, mapDispatchToProps)(Terminals);