import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Input, Row, Select, message, Checkbox } from 'antd';
import './styles.scss';
import { SubmitButton } from '../../../../components/FormField';
import { connect } from 'react-redux';
import { fetchAllTrips, createTrip } from '../../../../redux/actions/trips/trips.actions';

const AddVehicle = (props) => {
  const [form] = Form.useForm();
  const [startTerminal, setStartTerminal] = useState(null);
  const [endTerminal, setEndTerminal] = useState(null);
  const vehicles = [];
  const terminals = [];

  const [seatsArrangements, setSeatsArrangements] = useState([
    [1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0]
  ])

  const { promoCodes, fetchAllTripsLoading } = props.promoCodes;

  useEffect(() => {
    // fetchAllTerminals();
    // fetchAllVehicles();
  }, []);

  const fetchAllTerminals = async () => {
    try {
      const messageKey = 'fetchAllTerminalsResponse';
      const key = 'fetchAllTerminals';
      const tryFetchALlPromoCodes = await props.fetchAllTrips();
      if (!tryFetchALlPromoCodes.fetchPromoCodesStatus) {
        return message.error({ content: tryFetchALlPromoCodes.message, key, duration: 2 });
      }
    } catch (error) {
      console.log({ error }, 'error');
    }
  }

  const fetchAllVehicles = async () => {
    try {
      const messageKey = 'fetchAllTerminalsResponse';
      const key = 'fetchAllTerminals';
      const tryFetchALlPromoCodes = await props.fetchAllTrips();
      if (!tryFetchALlPromoCodes.fetchPromoCodesStatus) {
        return message.error({ content: tryFetchALlPromoCodes.message, key, duration: 2 });
      }
    } catch (error) {
      console.log({ error }, 'error');
    }
  }

  const handleCreateTrip = async (values) => {
    const payload = { seat_arrangement: seatsArrangements, ...values };
    try {
      const successKey = 'createTripSuccess';
      const errorKey = 'createTripError';

      const tryCreatePromoCode = await props.createTrip({ ...payload });

      const { message: resMessage, createTripStatus } = tryCreatePromoCode || {};
      if (createTripStatus) {
        message.success({ content: resMessage, key: successKey, duration: 5 });
        form.resetFields()
      } else {
        return message.error({ content: resMessage, key: errorKey, duration: 2 });
      }
    } catch (error) {
      console.log({ error }, 'error');
    }
  }

  return (
    <div className="addVehicleWrapper">
      <Form
        form={form}
        onFinish={handleCreateTrip}
        hideRequiredMark
        layout="vertical"
      >
        <div className="main">
          <Row gutter={0}>
            <Col span={24}>
              <Card className="addVehicle">
                <Row gutter={30} align="bottom">
                  <Col span={6}>
                    <Form.Item
                      label="Operation type"
                      name="vehicle_id"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the operation type' }
                      ]}>
                      <Select placeholder="Enter operation type">
                        {
                          vehicles.map(({ id, name }, index) => {
                            return (
                              <Select.Option key={id}>{name}</Select.Option>
                            )
                          })
                        }
                        <Select.Option key={1}>DEFAULT</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col span={6}>
                    <Form.Item
                      label="Vehicle type"
                      name="trip_class"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the vehicle type' }
                      ]}>
                      <Select placeholder="Add Vehicle type">
                        <Select.Option key="regular">Regular</Select.Option>
                        <Select.Option key="premium">Premium</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col span={6}>
                    <Form.Item
                      label="Vehicle make"
                      name="information"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the vehicle make' },
                        { min: 3, message: 'Vehicle make cannot be less than 3 characters' },
                        { max: 60, message: 'Vehicle make cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>

                  <Col span={6}>
                    <Form.Item
                      label="Plate number"
                      name="information"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the plate number' },
                        { min: 3, message: 'Plate number cannot be less than 3 characters' },
                        { max: 60, message: 'Plate number cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom">
                  <Col span={6}>
                    <Form.Item
                      label="Seats available"
                      name="information"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the seats available' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>

                  <Col span={6}>
                    <Form.Item
                      label="Luggage space"
                      name="origin_terminal_id"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the luggage space' }
                      ]}>
                      <Select placeholder="Select Luggage space" onChange={(value) => setStartTerminal(value)}>
                        {
                          terminals.filter(({ id }) => id !== endTerminal).map(({ id, name }, index) => {
                            return (
                              <Select.Option key={id}>{name}</Select.Option>
                            )
                          })
                        }
                        <Select.Option key={1}>DEFAULT</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col span={6}>
                    <Form.Item
                      label="Luggage capacity (kg)"
                      name="information"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>

                  <Col span={6}>
                    <Form.Item
                      label="Doors"
                      name="information"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom">
                  <Col span={24}>
                    <Checkbox onChange={null}>AC available</Checkbox>
                    <Checkbox onChange={null}>Extra Leg space</Checkbox>
                    <Checkbox onChange={null}>Toilet</Checkbox>
                    <Checkbox onChange={null}>Theft Insurance</Checkbox>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={24}>
              <Row justify="end">
                  <Col span={6}>
                    <div className="btnWrapper mt-74">
                      {
                        SubmitButton('SAVE LISTING', null, props?.promoCodes?.createTripLoading)
                      }
                    </div>
                  </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Form>
    </div >
  )
}

const mapStateToProps = (state) => ({
  promoCodes: state.promoCodes,
});

const mapDispatchToProps = {
  fetchAllTrips,
  createTrip
};


export default connect(mapStateToProps, mapDispatchToProps)(AddVehicle);