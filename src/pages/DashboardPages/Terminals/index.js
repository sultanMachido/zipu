import React from 'react';
import { Checkbox, Divider, Pagination } from 'antd';
import { connect } from 'react-redux';
import './styles.scss';
import { SubmitButton, StateSearchField, TerminalSearchField } from '../../../components/FormField';
import Terminal from '../../../components/Terminal';
import { getTerminals } from './../../../redux/actions/terminals/terminals.action';
import { useQuery } from '../../../utils/URLSearchParam';


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
];



const Terminals = (props) => {
  let query = useQuery();
  const inputSize = 'medium';
  const [page, setPage] = React.useState(query.get('page') || 1)
  const [pageSize, setPageSize] = React.useState(10);

  const indexOfLastTerminal = page * pageSize;
  const indextOfFirstTerminal = indexOfLastTerminal - pageSize;

  const transco_id = 2;

  React.useEffect(() => {
    props.history.push(`/terminals?page=${page}&pageSize=${pageSize}`)

  }, [page, pageSize]);


  const fetchTerminals = async () => {
    return props.getTerminals({ page, pageSize, transco_id });
  };

  React.useEffect(() => {
    fetchTerminals();
  }, []);


  const onSearch = () => {

  }

  const onChange = () => {

  }

  const handleClick = () => {
    props.history.push('/terminals/add');
  }

  const handleChange = (page, pageSize) => {
    query.set('page', page)
    setPage(page)
    props.getTerminals({ page, pageSize, transco_id });
  }

  const onShowSizeChange = (current, pageSize) => {
    query.set('pageSize', pageSize)
    setPageSize(pageSize)
  }

  const onClick = (terminalId) => {
    props.history.push(`/terminals/${terminalId}`);
  }



  const currentTerminals = props?.terminals?.getTerminalsSuccess?.terminals?.data?.slice(indextOfFirstTerminal, indexOfLastTerminal);


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
          <div className="terminalsCheckbox">
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
            currentTerminals && currentTerminals.length === 0 ? "Loading..." : <div className="terminals">
              {
                currentTerminals?.map((terminal) => {
                  return (
                    <Terminal terminal={terminal} key={terminal.id} transco={props?.terminals?.getTerminalsSuccess?.transco} onClick={onClick} />
                  )
                })
              }
            </div>
          }

          <div className="paginationWrapper">
            <Pagination
              total={props?.terminals?.terminalCount}
              showSizeChanger
              showTotal={total => `Total ${total} terminals`}
              current={parseInt(page)}
              onChange={handleChange}
              onShowSizeChange={onShowSizeChange}
              defaultPageSize={pageSize}
              size="large"
            />
          </div>

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