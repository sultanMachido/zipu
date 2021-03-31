import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Input, Row, DatePicker, Select, message, InputNumber, Spin } from 'antd';
import './styles.scss';
import { SubmitButton } from '../../../../components/FormField';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchAllPromoCodes, createPromoCode } from '../../../../redux/actions/promoCodes/promoCodes.actions';

const PromoCodes = (props) => {
    const [form] = Form.useForm();
    const [discountType, setDiscountType] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const { promoCodes, fetchAllPromoCodesLoading } = props.promoCodes;

    useEffect(() => {
        fetchAllPromoCodes();
    }, []);

    const fetchAllPromoCodes = async () => {
        try {
            const messageKey = 'fetchAllPromoCodesResponse';
            const key = 'fetchAllPromoCodes';
            const tryFetchALlPromoCodes = await props.fetchAllPromoCodes();
            if (!tryFetchALlPromoCodes.fetchPromoCodesStatus) {
                return message.error({ content: tryFetchALlPromoCodes.message, key, duration: 2 });
            }
        } catch (error) {
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
            const successKey = 'createPromoCodeSuccess';
            const errorKey = 'createPromoCodeError';

            const tryCreatePromoCode = await props.createPromoCode({ ...values });

            const { message: resMessage, createPromoCodeStatus } = tryCreatePromoCode || {};
            if (createPromoCodeStatus) {
                message.success({ content: resMessage, key: successKey, duration: 5 });
                form.resetFields()
            } else {
                return message.error({ content: resMessage, key: errorKey, duration: 2 });
            }
        } catch (error) {
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
                                <Form.Item
                                    label="Promo name"
                                    name="name"
                                    hasFeedback
                                    validateTrigger={['onChange', 'onBlur']}
                                    rules={[
                                        { required: true, message: 'Please enter the promo name' },
                                        { min: 3, message: 'Promo name cannot be less than 3 characters' },
                                        { max: 60, message: 'Promo name cannot be greater than 60 characters' }
                                    ]}>
                                    <Input className="formInputElement" placeholder={"Enter name of promo"} />
                                </Form.Item>
                                <Row gutter={30}>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Start date"
                                            name="start_date"
                                            hasFeedback
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                { required: true, message: 'Please enter the start date' }
                                            ]}>
                                            <DatePicker
                                                placeholder="Select start date"
                                                style={{ width: '100%' }}
                                                onChange={handleStartDateChange}
                                                disabledDate={(current) => {
                                                    return current && current > moment(endDate)
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            label="End date"
                                            name="end_date"
                                            hasFeedback
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                { required: true, message: 'Please enter the end date' }
                                            ]}>
                                            <DatePicker
                                                placeholder="Select end date"
                                                style={{ width: '100%' }}
                                                onChange={handleEndDateChange}
                                                disabledDate={(current) => {
                                                    return current && current < moment(startDate)
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={30}>
                                    <Col span={12}>
                                        <Form.Item
                                            label="Discount Type"
                                            name="discount_type"
                                            hasFeedback
                                            validateTrigger={['onChange', 'onBlur']}
                                            rules={[
                                                { required: true, message: 'Please enter the discount type' }
                                            ]}>
                                            <Select placeholder="Enter discount type" onChange={(value) => setDiscountType(value)}>
                                                <Select.Option key="amount">Custom</Select.Option>
                                                <Select.Option key="percentage">Percentage</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        {
                                            discountType === 'percentage'
                                                ? <Form.Item
                                                    label="Discount Value"
                                                    name="discount"
                                                    hasFeedback
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        { required: true, message: 'Please enter percentage value' },
                                                        { pattern: /^\d+$/, message: 'This can only contain digits' }
                                                    ]}>
                                                    <InputNumber placeholder="Enter percentage value" min={1} max={100} />
                                                </Form.Item>
                                                : discountType === 'amount'
                                                && <Form.Item
                                                    label="Discount Value"
                                                    name="custom_amount"
                                                    hasFeedback
                                                    validateTrigger={['onChange', 'onBlur']}
                                                    rules={[
                                                        { required: true, message: 'Please enter custom value' },
                                                        { pattern: /^\d+$/, message: 'This can only contain digits' }
                                                    ]}>
                                                    <InputNumber placeholder="Enter custom value" />
                                                </Form.Item>
                                        }
                                    </Col>
                                </Row>
                                <Row justify="end">
                                    <Col span={24}>
                                        <div className="btnWrapper">
                                            {
                                                SubmitButton('ADD PROMO CODE', null, props?.promoCodes?.createPromoCodeLoading)
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
                                    fetchAllPromoCodesLoading
                                        ? <Spin />
                                        : promoCodes?.data?.map(({ name, code, start_date, end_date, discount, custom_amount, discount_type, noOfTerminals }) => {
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
    fetchAllPromoCodes,
    createPromoCode
};


export default connect(mapStateToProps, mapDispatchToProps)(PromoCodes);