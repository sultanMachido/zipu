import React from 'react';
import { Card, Checkbox, Col, Form, Input, Row, DatePicker, Select } from 'antd';
import './styles.scss';
import { SubmitButton } from '../../../../components/FormField';
import { Link } from 'react-router-dom';

const PromoCodes = () => {
    const terminals = ["Yaba", "Jibowu", "Uselu", "Yaba 2", "Abuja", "Nassarawa East", "Obalende"];
    const promoHistory = [
        {
            name: "MYZIPULIVE",
            noOfTerminals: 12,
            startDate: "Nov 1",
            endDate: "Nov 4, 2020",
            discount: "20"
        },
        {
            name: "MYZIPULIVE",
            noOfTerminals: 12,
            startDate: "Nov 1",
            endDate: "Nov 4, 2020",
            discount: "20"
        },
        {
            name: "MYZIPULIVE",
            noOfTerminals: 12,
            startDate: "Nov 1",
            endDate: "Nov 4, 2020",
            discount: "20"
        },
        {
            name: "MYZIPULIVE",
            noOfTerminals: 12,
            startDate: "Nov 1",
            endDate: "Nov 4, 2020",
            discount: "20"
        },
        {
            name: "MYZIPULIVE",
            noOfTerminals: 12,
            startDate: "Nov 1",
            endDate: "Nov 4, 2020",
            discount: "20"
        },
        {
            name: "MYZIPULIVE",
            noOfTerminals: 12,
            startDate: "Nov 1",
            endDate: "Nov 4, 2020",
            discount: "20"
        }
    ]
    return (
        <div className="promoCodesWrapper">
            <div className="main">
                <Row gutter={0} >
                    <Col span={12}>
                        <Card className="addPromoCode">
                            <Form.Item>
                                <label>Promo name</label>
                                <Input placeholder="Enter name of promo" />
                            </Form.Item>
                            <Row gutter={30}>
                                <Col span={12}>
                                    <Form.Item>
                                        <label>Start date</label>
                                        <DatePicker placeholder="Select start date" style={{ width: '100%' }} onChange={null} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item>
                                        <label>End date</label>
                                        <DatePicker placeholder="Select end date" style={{ width: '100%' }} onChange={null} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={30}>
                                <Col span={12}>
                                    <Form.Item>
                                        <label>Discount Type</label>
                                        <Select placeholder="Enter discount type">
                                            {/* <Select.Option key="">Enter discount type</Select.Option> */}
                                            <Select.Option key="custom">Custom</Select.Option>
                                            <Select.Option key="percentage">Percentage</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item>
                                        <label>Discount Value</label>
                                        <Input placeholder="Enter discount value" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item>
                                <Card>
                                    <Checkbox.Group className="terminalsPane" style={{ width: '100%' }} onChange={null}>
                                        <p>Select terminals to add</p>
                                        <div>
                                            <Checkbox value={false}>Select all (1 Selected)</Checkbox>
                                        </div>
                                        <div className="terminalsSection">
                                            {
                                                terminals.map((item, index) => {
                                                    return (
                                                        <Col span={24} key={index}>
                                                            <Checkbox value={item}>{item}</Checkbox>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Checkbox.Group>
                                </Card>
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="promoHistory">
                            <p>Promo history</p>
                            {
                                promoHistory.map(({ name, startDate, endDate, discount, noOfTerminals }) => {
                                    return (
                                        <div className="promoHistoryItem">
                                            <h4>{name}</h4>
                                            <p>{discount}% valid from {startDate} to {endDate}</p>
                                            <p>{noOfTerminals} Terminals - <Link to="/terminals">See terminals</Link></p>
                                        </div>
                                    )
                                })
                            }
                        </Card>
                    </Col>
                </Row>
            </div>
            <Row justify="end">
                <Col span={6}>
                    <div className="btnWrapper">
                        {
                            SubmitButton('SAVE LISTING')
                        }
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}

export default PromoCodes