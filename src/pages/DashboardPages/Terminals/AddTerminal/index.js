import React from 'react';
import { Form, message, Collapse, Modal } from 'antd';
import { connect } from 'react-redux';
import { TerminalNameField, StatesField, TerminalAddressField, TerminalCityField, SubmitButton } from '../../../../components/FormField';
import MultiSelect from '../../../../components/MultiSelect';
import { addTerminal } from '../../../../redux/actions/terminals/terminals.action';
import { apiErrors } from '../../../../utils/errorHandler/apiErrors';
import './styles.scss';
import { fetchAllVehicles } from '../../../../redux/actions/vehicles/vehicles.actions'

const { Panel } = Collapse;


const AddTerminal = (props) => {
  const inputSize = 'large';
  const [form] = Form.useForm();
  const [modalOpen, setModalOpen] = React.useState(false)
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleClick = () => {
    Modal.destroyAll()
  }

  const fetchVehicles = async (transco_Id) => {
    return props.fetchAllVehicles(transco_Id);
  }

  React.useEffect(() => {
    const zipuUser = JSON.parse(localStorage.getItem('zipuUser'));
    if (zipuUser?.id) {
      fetchVehicles(zipuUser?.id);
    }
  }, [])

  const onFinish = async (values) => {
    const vehicles = selectedItems.map((item) => {
      return item.id
    });
    const terminalData = { ...values, vehicles: vehicles }
    try {
      const key = 'addTerminal';
      const tryAddTerminal = await props.addTerminal({ ...terminalData });
      if (tryAddTerminal.addTerminalStatus) {
        Modal.success({
          content: (
            <div>
              <p style={{ fontSize: "20px" }}>Terminal created successfully</p>
              {
                SubmitButton('NEW TERMINAL PROFILE', handleClick)
              }
            </div>
          ),
          closable: modalOpen || true,
          style: { marginTop: "20px" },
          okText: 'CREATE NEW TERMINAL',
          centered: true,

        })
        form.resetFields();
      } else {
        const err = apiErrors(tryAddTerminal?.message);
        message.error({
          content: err,
          key,
          duration: 2
        });
      }
    } catch (error) {

    }
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
                  <MultiSelect buses={props?.vehicles?.vehicles.data} handleChange={(items) => setSelectedItems(items)} setSelectedItems={setSelectedItems} selectedItems={selectedItems} />
                </Panel>
              </Collapse>
            </div>
          </div>

          <div className="inputRow">
            <div className="right"></div>
            <div className="left">{SubmitButton('CREATE TERMINAL', null,
              props?.terminal?.addTerminalsLoading)}</div>
          </div>

        </Form>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  terminal: state.terminals,
  vehicles: state.vehicles
})

const mapDispatchToProps = {
  addTerminal,
  fetchAllVehicles
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTerminal);