import React, { useState } from 'react';
import { Col, Input, Row, Form, Button, Select, Checkbox } from 'antd';
import './styles.scss';
import Modal from 'antd/lib/modal/Modal';
import checkCircleIcon from '../../../../assets/img/check-circle-icon.svg';
const { Option } = Select;

const StaffAdd = (props) => {
    const [form] = Form.useForm();
    const modules = ["Trips", "Terminals", "Registered customer", "Routes", "Registration statistics", "Payment & Delivery", "Report & Feedback", "Vendor registration"];
    const terminals = ["Yaba", "Jibowu", "Uselu", "Yaba 2", "Abuja", "Nassarawa East", "Obalende"];
    const [isSuccessModal, setIsSuccessModal] = useState(false);
    return (
        <div className="staffAddWrapper">
            <Row className="tableHeader">
                <Col span={12}>
                    <h5 className="title">Account Creation</h5>
                </Col>
                <Col span={12} className="text-right">
                </Col>
            </Row>
            <Form
                layout={'vertical'}
                form={form}
                initialValues={{ layout: null }}
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Select placeholder="State" onChange={null}>
                                <Option value="abia">Abia</Option>
                                <Option value="adamawa">Adamawa</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Select placeholder="Terminal" onChange={null}>
                                <Option value="abia">Abia</Option>
                                <Option value="adamawa">Adamawa</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input placeholder="Position" />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox.Group className="modulesPane" style={{ width: '100%' }} onChange={null}>
                                <p>Allocate terminal to this user</p>
                                <Row>
                                    {
                                        terminals.map((item, index) => {
                                            return (
                                                <Col span={24} key={index}>
                                                    <Checkbox value={item}>{item}</Checkbox>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Checkbox.Group className="modulesPane" style={{ width: '100%' }} onChange={null}>
                                <p>Select modules for this user</p>
                                <Row>
                                    {
                                        modules.map((item, index) => {
                                            return (
                                                <Col span={24} key={index}>
                                                    <Checkbox value={item}>{item}</Checkbox>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Checkbox.Group>
                            <Button type="primary" onClick={() => setIsSuccessModal(true)}>Save</Button>
                        </Form.Item>
                        
                    </Col>
                </Row>
            </Form>
            <Modal className="successStaffModal" visible={isSuccessModal} onOk={null} footer={null} onCancel={() => setIsSuccessModal(false)}>
                <img alt="icon" src={checkCircleIcon} />
                <h1>Profile created successfully</h1>
                <p>Click to create new profile</p>
                <a href='/staff/add'>
                    <Button type="primary">NEW STAFF PROFILE</Button>
                </a> 
            </Modal>
        </div>
    )
}

export default StaffAdd;