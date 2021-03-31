import { Button, Card, Col, Row } from 'antd';
import React, { useState } from 'react';
import ViewBookingsModal from '../../../components/Modals/ViewBookingsModal';
import TableWrapper from '../../../components/TableWrapper';
import './styles.scss';
import GIGMSvg from '../../../assets/img/gigm-logo.svg';
import CoverImage from '../../../assets/img/bg-logo.png';
import { SubmitButton } from '../../../components/FormField';
import { Link } from 'react-router-dom';

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
        <div className="companyWrapper">
            <Row gutter={32} justify="space-between">
                <h1>Good is Good Motors</h1>
                <Link to="/company/edit"><button className="btn-edit">EDIT INFORMATION</button></Link>
            </Row>
            <Row gutter={66}>
                <Col span={6}>
                    <img src={GIGMSvg} alt="company-logo" />
                    <br/>
                    <Button type="link">Edit icon</Button>

                    <img src={CoverImage} className="img-responsive" alt="company-logo"  />
                    <div className="editCoverImage">Edit cover image</div>
                    
                </Col>
                <Col span={18}>
                    <Row gutter={32}>
                        <Col span={12}> 
                            <h5 className="title">Company Information</h5>
                            <p>Rental or bus information
                                This rental includes Collision Damage Waiver with zero excess: if the car's bodywork, glass, wheels, interior, roof or undercarriage get damaged, you won't pay anything at all towards repairs covered by the policy. This cover is only valid if you stick to the terms of the rental agreement. It doesn't cover charges (e.g. for towing or off-road time), or anything in the car (e.g. child seats, GPS devices or personal belongings), or damage caused by any authorised driver&#39;s negligence.
                            </p>
                            <p>40 Busses/Car</p>
                            <p>207 Staff</p>
                            <p>31 Terminals</p>
                        </Col>
                        <Col span={12}> 
                            <h4>Contact information</h4>
                            <p>Email: gigm@zipu.com</p>
                            <p>Phone number: 0810 000 0000</p>
                            <p>Address: Ayodeji abalomo street, Surulere, Lagos, Nigeria</p>
                            
                            <h4>Documents</h4>

                            <h4>Bank details</h4>
                            <p>Bank name: Firstbank Nigeria</p>
                            <p>Account number: 00000000000</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Company