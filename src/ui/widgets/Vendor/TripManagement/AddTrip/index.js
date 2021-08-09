import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Input, Row, DatePicker, Select, message, InputNumber, Spin } from 'antd';
import './styles.scss';
import { SubmitButton } from '../../../../components/FormField';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchAllTrips, createTrip } from '../../../../redux/actions/trips/trips.actions';
import SeatsArrangements from '../../../../components/SeatsArrangements';

const AddTrip = (props) => {
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

    }
  }

  return (
    <div className="addTripsWrapper">
      <Form
        form={form}
        onFinish={handleCreateTrip}
        hideRequiredMark
        layout="vertical"
      >
        <div className="main">
          <Row gutter={0}>
            <Col span={12}>
              <Card className="addPromoCode">
                <Row gutter={30} align="bottom">
                  <Col span={12}>
                    <Form.Item
                      label="Vehicle selection"
                      name="vehicle_id"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the vehicle' }
                      ]}>
                      <Select placeholder="Enter a vehicle">
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
                  <Col span={12}>
                    <Form.Item
                      label="Trip Class"
                      name="trip_class"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the trip class' }
                      ]}>
                      <Select placeholder="Add Trip Class">
                        <Select.Option key="regular">Regular</Select.Option>
                        <Select.Option key="premium">Premium</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <Form.Item
                      label="Trip Date & Time"
                      name="trip_date_time"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the trip date and time' }
                      ]}>
                      <DatePicker
                        style={{ width: '100%' }}
                        format="YYYY-MM-DD HH:mm:ss"
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom">
                  <Col span={12}>
                    <Form.Item
                      label="Origin terminal"
                      name="origin_terminal_id"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the start terminal' }
                      ]}>
                      <Select placeholder="Select start terminal" onChange={(value) => setStartTerminal(value)}>
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
                  <Col span={12}>
                    <Form.Item
                      label="Destination terminal"
                      name="destination_terminal_id"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the end terminal' }
                      ]}>
                      <Select placeholder="Select end terminal" onChange={(value) => setEndTerminal(value)}>
                        {
                          terminals.filter(({ id }) => id !== startTerminal).map(({ id, name }, index) => {
                            return (
                              <Select.Option key={id}>{name}</Select.Option>
                            )
                          })
                        }
                        <Select.Option key={1}>DEFAULT</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Rental or bus information"
                  name="information"
                  hasFeedback
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    { required: true, message: 'Please enter the rental or bus information' },
                    { min: 3, message: 'Promo name cannot be less than 3 characters' },
                    { max: 60, message: 'Promo name cannot be greater than 60 characters' }
                  ]}>
                  <Input className="formInputElement" placeholder={""} />
                </Form.Item>

                <Row gutter={30} align="bottom">
                  <Col span={8}>
                    <Form.Item
                      label="Trip Cost"
                      name="cost"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Allowed Luggage Space per Cutsomer (kg)"
                      name="allowed_luggage_space_per_customer"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Extra luggage cost per kg"
                      name="extra_luggage_cost_per_kg"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' },
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom">
                  <Col span={8}>
                    <Form.Item
                      label="Allows pickup?"
                      name="allows_pickup"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter value' }
                      ]}>
                      <Select placeholder="">
                        <Select.Option key="amount">Yes</Select.Option>
                        <Select.Option key="percentage">No</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Pick up cost"
                      name="pickup_cost"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' },
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <p className="bold">Select available seats on the bus for online booking</p>
                    <p>This rental includes Collision Damage Waiver with zero excess:</p>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <SeatsArrangements seats={seatsArrangements} onChange={setSeatsArrangements} />
                  </Col>
                </Row>
                <Row justify="end">
                  <Col span={24}>
                    <div className="btnWrapper">
                      {
                        SubmitButton('SAVE LISTING', null, props?.promoCodes?.createTripLoading)
                      }
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="promoHistory" style={{ height: '100%' }}>
              </Card>
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


export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
