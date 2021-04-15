import { Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import ViewBookingsModal from '../../../components/Modals/ViewBookingsModal';
import TableWrapper from '../../../components/TableWrapper';
import './styles.scss';

const Company = () => {
    const user = {
        title: "Mr",
        fullName: "Oluwaleke Ojo",
        email: "ojopeta@gmail.com",
        phoneNumber: "+2348067710761",
        dob: "12-12-2020",
        nationality: "Nigerian",
        gender: "Male",
        address: "2 Adyinka Adeoye street, olonade junction, Yaba"
    }

    return (
        <div className="bookingsWrapper">
            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <div className="sidebarCardMenu">
                            <div className="">
                                <span>Personal details</span>
                            </div>
                            <div className="">
                                <span>Payments and account</span>
                            </div>
                            <div className="">
                                <span>Security</span>
                            </div>
                            <div className="">
                                <span>Email notifications</span>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={16}>
                    <h5 className="title">Profile settings</h5>
                    <p>View all of your bookings, make changes and get help if you need it.</p>

                    <Row>
                        <Col span={6}> </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Company