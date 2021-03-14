import React from 'react';
import { Col, DatePicker, Modal, Row } from 'antd';
import './styles.scss';
import BusImg from '../../../assets/img/bus-icon.svg'

const ViewBookingsModal = ({ isModalVisible, handleCancel }) => {
    return (
        <Modal
            visible={isModalVisible}
            onOk={null}
            onCancel={handleCancel}
            footer={null}
            className="viewBookingsModal"
        >
            <div className="bookingOverviewPane">
                <Row gutter={16}>
                    <Col span={7}>
                        <img alt="bus" src={BusImg} className="img-fluid" />
                    </Col>
                    <Col span={9}>
                        <p className="busNameText">Toyota Hiace bus</p>
                        <p className="smallText">4 hours journey</p>

                        <p className="smallText marginTop40">Pick-up terminal</p>
                        <p className="busNameText">Ojota moto park</p>
                    </Col>
                    <Col span={8}>
                        <h5 className="amountText">₦ 100,000</h5>
                        <p className="smallText">Total charge</p>

                        <p className="smallText marginTop40">Drop-off terminal</p>
                        <p className="busNameText">OAU campus gate</p>
                    </Col>
                </Row>
            </div>
            <div className="bookingDetailsPane">
                <p className="mainText">Passenger Trip details</p>
                <p className="subText">This rental includes Collision Damage Waiver with zero excess:</p>

                <DatePicker showTime onChange={null} onOk={null} />

                <p className="timeLocationText">7:00AM Benin - Lagos</p>
                <p className="subLocationText">Ojota moto park, Lagos</p>
                <span className="badge">One seat booked</span>

                <p className="mainText">Passenger seating position</p>
                <p className="subText">This shows the locations where the passenger is seating</p>
            </div>
            <div className="passengerDetailsPane">
            </div>
            <div className="footerPane">
                <div>
                    <FilledInput 
                        title="Trip Class"
                        value="First Class"
                    />
                    <FilledInput 
                        title="Number of Seats"
                        value="1 Seat"
                    />
                </div>
                <div>
                    <FilledInput 
                        title="Extra Luggage"
                        value="20kg"
                    />
                </div>
                <div className="marginBottom70">
                    <FilledInput 
                        value="No 1, Lagos street, Federal capital Territory, Abuja, Nigeria"
                    />
                </div>
                <p className="mainText">Passengers Details</p>
                <p className="subText">This rental includes Collision Damage Waiver with zero excess:</p>
                <Row gutter={8} className="marginTop22">
                    <Col span={2}>
                        <FilledInput fullWidth={true} value="Mr" />
                    </Col>
                    <Col span={10}>
                        <FilledInput fullWidth={true} value="Ehizojie" />
                    </Col>
                    <Col span={12}>
                        <FilledInput fullWidth={true} value="Ihayere" />
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={12}>
                        <FilledInput fullWidth={true} value="iszojie@gmail.com" />
                    </Col>
                    <Col span={12}>
                        <FilledInput fullWidth={true} value="0800 000 0000" />
                    </Col>
                </Row>

            </div>
      </Modal>
    )
}

const FilledInput = ({ title, value, fullWidth }) => (
    <div className={`filledInput ${fullWidth ? 'fullWidth' : ''}`}>
        {title && <span className="filledInputTitle">{title}:&nbsp;</span>}
        {value && <span className="filledInputValue">{value}</span>}
    </div>
)

export default ViewBookingsModal;