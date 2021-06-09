import React from 'react';
import { Col, DatePicker, Modal, Row } from 'antd';
import './styles.scss';
import {ReactComponent as Star} from 'assets/svg/star.svg';
import Gigm from 'assets/img/gigm.png';


const ViewReviewsModal = ({ isModalVisible, handleCancel }) => {
    return (
        <Modal
            visible={isModalVisible}
            onOk={null}
            onCancel={handleCancel}
            footer={null}
            className="viewReviewsModal"
        >
        <section className="revWrapper">
            <Row>
                <Col span={24}>
                    <div className="d-flex align-center revHeader">
                            <figure>
                                <img src={Gigm} alt="car" />
                            </figure>

                            <h2 className="sub-lg  ml-sm">
                               <span className="sub-lg black">God is Good Motors’&nbsp;</span> 
                               Rating and reviews
                            </h2>
                    </div>
                </Col>
            </Row>
            <Row justify="space-between">
                <Col span={6}>
                    <div className="revInfo mb-sm">
                        <h6 className="h-1 black">5.0</h6>
                         <div className="d-flex mb-xs">
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                        </div>
                        <p className="action-lg black">Based on 2000 reviews</p>
                    </div>
                    <div className="tscol revStars">
                            <div className="d-flex align-center mb-xs">
                                <p className="body-2-lg black pr-xs">5 Stars</p>
                                <div className="revBar"></div>
                            </div>
                            <div className="d-flex align-center mb-xs">
                                <p className="body-2-lg black pr-xs">4 Stars</p>
                                <div className="revBar"></div>
                            </div>
                            <div className="d-flex align-center mb-xs">
                                <p className="body-2-lg black pr-xs">3 Stars</p>
                                <div className="revBar"></div>
                            </div>
                    </div>
                </Col>
                <Col span={16}>
                        <div className="revContainer">
                            <div className="revItem mb-xs">
                              <div className="d-flex mb-xs">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                              </div>
                              <h2 className="action-sm black fon-500 mb-xs">Mr Ajanakolo Oriowo</h2>
                              <p className="body-2-lg greyDark"> 
                                 This rental includes Collision Damage Waiver with zero excess:
                                  if the car's bodywork, glass, wheels, interior, roof or 
                                  undercarriage get damaged, you won't pay anything at all 
                                  towards repairs covered by the policy. This cover is only 
                                  valid if you stick to the terms of the rental agreement.
                                </p>
                            </div>

                             <div className="revItem mb-xs">
                              <div className="d-flex mb-xs">
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                              </div>
                              <h2 className="action-sm black fon-500 mb-xs">Mr Ajanakolo Oriowo</h2>
                              <p className="body-2-lg greyDark"> 
                                 This rental includes Collision Damage Waiver with zero excess:
                                  if the car's bodywork, glass, wheels, interior, roof or 
                                  undercarriage get damaged, you won't pay anything at all 
                                  towards repairs covered by the policy. This cover is only 
                                  valid if you stick to the terms of the rental agreement.
                                </p>
                            </div>

                            <button className="btn btn-brand-2">SHOW MORE</button>
                        </div>
               </Col>
            </Row>
        </section>
           
      </Modal>
    )
}


export default ViewReviewsModal;