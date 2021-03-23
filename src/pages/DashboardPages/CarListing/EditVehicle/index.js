import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Input, Row, Select, message, Checkbox, InputNumber } from 'antd';
import './styles.scss';
import { SubmitButton } from '../../../../components/FormField';
import { connect } from 'react-redux';
import { updateVehicle, fetchSingleVehicle } from '../../../../redux/actions/vehicles/vehicles.actions';
import _ from "lodash";
import { useParams } from 'react-router';
import Loader from '../../../../components/Loader';

const EditVehicle = (props) => {
  const [form] = Form.useForm();
  const [ac_available, setAcAvailable] = useState(false);
  const [extra_leg_space, setExtraLegSpace] = useState(false);
  const [toilet, setToilet] = useState(false);
  const [theft_insurance, setTheftInsurance] = useState(false);
  let { id: vehicleId } = useParams();
  const { vehicle, fetchVehicleLoading } = props.vehicles || {};

  useEffect(() => {
    if (vehicle) {
      const { seat_arrangment, ac_available, extra_leg_space, toilet, theft_insurance, ...rest } = vehicle || {};

      const _seat_arrangment = seat_arrangment?.reduce((acc, item) => {
        acc += item.length;
        return acc;
      }, '').split('');

      setAcAvailable(getTruthyValue(ac_available));
      setExtraLegSpace(getTruthyValue(extra_leg_space));
      setToilet(getTruthyValue(toilet));
      setTheftInsurance(getTruthyValue(theft_insurance));

      const formValues = { 
        seat_arrangment: _seat_arrangment, 
        ac_available: getTruthyValue(ac_available), 
        extra_leg_space: getTruthyValue(extra_leg_space), 
        toilet: getTruthyValue(toilet),
        theft_insurance: getTruthyValue(theft_insurance), 
        ...rest 
      }
      form.setFieldsValue(formValues);
    }
  }, [vehicle]);

  const getTruthyValue = (value) => value ? true : false;

  useEffect(() => {
    if (vehicleId) {
      props.fetchSingleVehicle(vehicleId);
    }
  }, [])

  const handleUpdateVehicle = async (values) => {
    const _seat_arrangment = values.seat_arrangment.split(',').map((seatNo) => {
      const array = _.times(seatNo, _.constant(0));
      return array;
    })
    if (vehicle.id) {
      const payload = { ...values, ac_available, toilet, theft_insurance, extra_leg_space, seat_arrangment: _seat_arrangment };
      console.log("values...", payload)
      try {
        const successKey = 'updateVehicleSuccess';
        const errorKey = 'updateVehicleError';
  
        const tryCreateVehicle = await props.updateVehicle(vehicle.id, { ...payload });
  
        const { message: resMessage, updateVehicleStatus } = tryCreateVehicle || {};
        if (updateVehicleStatus) {
          message.success({ content: resMessage, key: successKey, duration: 5 });
        } else {
          return message.error({ content: resMessage, key: errorKey, duration: 2 });
        }
      } catch (error) {
        console.log({ error }, 'error');
      }
    }
  }

  return (
    <div className="addVehicleWrapper">
      <h3>Edit this Vehicle</h3>
      {
        fetchVehicleLoading 
        ? <Row align="middle" justify="center" style={{height: '300px'}}>
          <Loader />
        </Row>
        : <Form
          form={form}
          onFinish={handleUpdateVehicle}
          hideRequiredMark
          layout="vertical"
        >
          <div className="main">
            <Row gutter={0}>
              <Col span={24}>
                <Card className="addVehicle">
                  <Row gutter={30} align="top">
                    <Col span={6}>
                      <Form.Item
                        label="Operation type"
                        name="operation_type"
                        hasFeedback
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          { required: true, message: 'Please enter the operation type' }
                        ]}>
                        <Select placeholder="Enter operation type">
                          <Select.Option key={1}>DEFAULT</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={6}>
                      <Form.Item
                        label="Vehicle type"
                        name="vehicle_type"
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
                        name="vehicle_make"
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
                        name="plate_number"
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
                        name="seats_available"
                        hasFeedback
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          { required: true, message: 'Please enter the seats available' },
                          { pattern: /^\d+$/, message: 'Value can only contain digits' }
                        ]}>
                        <InputNumber className="formInputNumberElement" placeholder={""} />
                      </Form.Item>
                    </Col>

                    <Col span={6}>
                      <Form.Item
                        label="Luggage space"
                        name="luggage_space"
                        hasFeedback
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          { required: true, message: 'Please enter the luggage space' }
                        ]}>
                        <Select placeholder="Select Luggage space">
                          <Select.Option key={1}>DEFAULT</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={6}>
                      <Form.Item
                        label="Luggage capacity (kg)"
                        name="luggage_capacity"
                        hasFeedback
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          { required: true, message: 'Please enter a value' },
                          { pattern: /^\d+$/, message: 'Value can only contain digits' }
                        ]}>
                        <InputNumber className="formInputNumberElement" placeholder={""} />
                      </Form.Item>
                    </Col>

                    <Col span={6}>
                      <Form.Item
                        label="Doors"
                        name="doors"
                        hasFeedback
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          { required: true, message: 'Please enter a value' },
                          { pattern: /^\d+$/, message: 'Value can only contain digits' }
                        ]}>
                        <InputNumber className="formInputNumberElement" placeholder={""} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={30} align="top" className="optionsWrapper">
                    <Col span={8}>
                      <Form.Item
                        label={`Row seats (Separate row seats by comma)`}
                        name="seat_arrangment"
                        hasFeedback
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          { required: true, message: 'Please enter the seats available' },
                          { pattern: /^[1-8](,[1-8])*$/, message: 'Value can only contain digits separated by commas' }
                          
                        ]}>
                        <Input className="formInputElement" placeholder={""} />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <label>Other options</label>
                      <div>
                        <Checkbox checked={ac_available} onChange={(e) => setAcAvailable(e.target.checked)}>AC available</Checkbox>
                      </div>
                      <div>
                        <Checkbox checked={extra_leg_space} onChange={(e) => setExtraLegSpace(e.target.checked)}>Extra Leg space</Checkbox>
                      </div>
                    </Col>
                    <Col span={6}>
                      <label>&nbsp;</label>
                      <div>
                        <Checkbox checked={toilet} onChange={(e) => setToilet(e.target.checked)}>Toilet</Checkbox>
                      </div>
                      <div>
                        <Checkbox checked={theft_insurance} onChange={(e) => setTheftInsurance(e.target.checked)}>Theft Insurance</Checkbox>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={24}>
                <Row justify="end">
                  <Col span={6}>
                    <div className="btnWrapper mt-74">
                      {
                        SubmitButton('UPDATE VEHICLE', null, props?.vehicles?.updateVehicleLoading)
                      }
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Form>
      }
    </div >
  )
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicles
});

const mapDispatchToProps = {
  updateVehicle,
  fetchSingleVehicle
};


export default connect(mapStateToProps, mapDispatchToProps)(EditVehicle);