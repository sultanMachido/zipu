import React from 'react';
import { Form, Progress, message, Collapse, Switch, Modal, Checkbox } from 'antd';
import './styles.scss';

import { TerminalNameField, StatesField, TerminalAddressField, TerminalCityField } from '../../../../components/FormField';
import MultiSelect from '../../../../components/MultiSelect'

const { Panel } = Collapse;


const buses = [
  { id: 1, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 2, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 3, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 4, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 5, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 6, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 7, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 8, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 9, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 10, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 11, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 12, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 13, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 14, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 15, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 16, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 17, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 18, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 19, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 20, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 21, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 22, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 23, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
  { id: 24, label: "#24 Toyota hiace - KJV 345 LAG(24 seater" },
]


const AddTerminal = (props) => {
  const inputSize = 'large';
  const [form] = Form.useForm();
  const [selectedItems, setSelectedItems] = React.useState([])

  const onFinish = () => {

  }

  const handleChange = (items) => {
    setSelectedItems({ items });
  }


  return (
    <div className="addTerminalWrapper">
      <div className="addTerminalHeader">
        <h1>Terminal Creation</h1>
      </div>
      <div className="addTerminalForm">
        <Form
          form={form}
          onFinish={onFinish}
          hideRequiredMark
          layout="vertical"
          style={{ width: '100%' }}
        >
          <div className="inputRow">
            <div className="left">{TerminalNameField(inputSize, true, false, 'Name of terminal')}</div>
            <div className="right">{StatesField(inputSize, true, false, 'State')}</div>
          </div>

          <div className="inputRow">
            <div className="left">{TerminalAddressField(inputSize, true, false, 'Address of terminal')}</div>
            <div className="right">{TerminalCityField(inputSize, true, false, 'city/Town')}</div>
          </div>

          <div className="inputRow">
            <div className="full">
              <Collapse defaultActiveKey={['1']}>
                <Panel header="Select bus to add to terminal" key="1">
                  <MultiSelect buses={buses} handleChange={handleChange} setSelectedItems={setSelectedItems} selectedItems={selectedItems} />
                </Panel>
              </Collapse>
            </div>
          </div>

        </Form>

      </div>
    </div>
  )
}

export default AddTerminal;