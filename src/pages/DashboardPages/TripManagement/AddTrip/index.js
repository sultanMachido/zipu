import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Input, Row, DatePicker, Select, message, InputNumber, Spin } from 'antd';
import './styles.scss';
import { SubmitButton } from '../../../../components/FormField';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchAllTrips, createTrip } from '../../../../redux/actions/trips/trips.actions';

const AddTrip = (props) => {
  const [form] = Form.useForm();
  const [discountType, setDiscountType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { promoCodes, fetchAllTripsLoading } = props.promoCodes;

  useEffect(() => {
    // fetchAllTrips();
  }, []);

  const fetchAllTrips = async () => {
    try {
      const messageKey = 'fetchAllTripsResponse';
      const key = 'fetchAllTrips';
      const tryFetchALlPromoCodes = await props.fetchAllTrips();
      if (!tryFetchALlPromoCodes.fetchPromoCodesStatus) {
        return message.error({ content: tryFetchALlPromoCodes.message, key, duration: 2 });
      }
    } catch (error) {
      console.log({ error }, 'error');
    }
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
  }

  const handleEndDateChange = (date) => {
    setEndDate(date);
  }

  const handleCreatePromoCode = async (values) => {
    try {
      const successKey = 'createTripSuccess';
      const errorKey = 'createTripError';

      const tryCreatePromoCode = await props.createTrip({ ...values });

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
    <div className="promoCodesWrapper">
      <Form
        form={form}
        onFinish={handleCreatePromoCode}
        hideRequiredMark
        layout="vertical"
      >
        <div className="main">
          <Row gutter={0} >
            <Col span={12}>
              <Card className="addPromoCode">
                <Row gutter={30} align="bottom">
                  <Col span={12}>
                    <Form.Item
                      label="Vehicle selection"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the vehicle' }
                      ]}>
                      <Select placeholder="Enter a vehicle" onChange={(value) => setDiscountType(value)}>
                        <Select.Option key="amount">Custom</Select.Option>
                        <Select.Option key="percentage">Percentage</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Trip Class"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the trip class' },
                        { min: 3, message: 'Trip Class cannot be less than 3 characters' },
                        { max: 60, message: 'Promo name cannot be greater than 60 characters' }
                      ]}>
                      <Select placeholder="Add Trip Class" onChange={(value) => setDiscountType(value)}>
                        <Select.Option key="amount">Custom</Select.Option>
                        <Select.Option key="percentage">Percentage</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom">
                  <Col span={12}>
                    <Form.Item
                      label="Origin terminal"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the promo name' },
                        { min: 3, message: 'Origin terminal cannot be less than 3 characters' },
                        { max: 60, message: 'Origin terminal cannot be greater than 60 characters' }
                      ]}>
                      <Select placeholder="Select terminal" onChange={(value) => setDiscountType(value)}>
                        <Select.Option key="amount">Custom</Select.Option>
                        <Select.Option key="percentage">Percentage</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Destination terminal"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter the promo name' },
                        { min: 3, message: 'Destination terminal cannot be less than 3 characters' },
                        { max: 60, message: 'Destination terminal cannot be greater than 60 characters' }
                      ]}>
                      <Select placeholder="Select terminal" onChange={(value) => setDiscountType(value)}>
                        <Select.Option key="amount">Custom</Select.Option>
                        <Select.Option key="percentage">Percentage</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Rental or bus information"
                  name="name"
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
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' },
                        { min: 3, message: 'Trip cost cannot be less than 3 characters' },
                        { max: 60, message: 'Trip cost cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Allowed Luggage Space per Cutsomer (kg)"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' },
                        { min: 3, message: 'Allowed space cannot be less than 3 characters' },
                        { max: 60, message: 'Allowed space cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Extra luggage cost per kg"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' },
                        { min: 3, message: 'Cost cannot be less than 3 characters' },
                        { max: 60, message: 'Cost cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom">
                  <Col span={8}>
                    <Form.Item
                      label="Allows pickup?"
                      name="discount_type"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter value' }
                      ]}>
                      <Select placeholder="Enter discount type" onChange={(value) => setDiscountType(value)}>
                        <Select.Option key="amount">Custom</Select.Option>
                        <Select.Option key="percentage">Percentage</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Pick up cost"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter a value' },
                        { min: 3, message: 'Pick up cost cannot be less than 3 characters' },
                        { max: 60, message: 'Pick up cost cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
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
              <Card className="promoHistory">
                <p>Promo history</p>
                {
                  fetchAllTripsLoading
                    ? <Spin />
                    : promoCodes.map(({ name, code, start_date, end_date, discount, custom_amount, discount_type, noOfTerminals }) => {
                      const amount = discount_type === 'amount' ? `NGN ${custom_amount.toLocaleString()}` : discount_type === 'amount' ? `${discount}%` : 'NGN 0'
                      return (
                        <div className="promoHistoryItem">
                          <h4>{name}</h4>
                          <p>Code: {code}</p>
                          <p>{amount} valid from {moment(start_date).format('LL')} to {moment(end_date).format('LL')}</p>
                        </div>
                      )
                    })
                }
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