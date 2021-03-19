import React from 'react';
import { Form } from 'antd';
import { withRouter } from 'react-router-dom'
import './success.scss';
import leftCar from '../../../assets/img/leftCar.svg';
import rightCar from '../../../assets/img/rightCar.svg'
import { SubmitButton } from '../../../components/FormField';

const Success = (props) => {

  const goToDashboard = () => {
    props.history.push('/bookings')
  }
  return (
    <div className="successWrapper">
      <div className="carsWrapper">
        <div className="leftCarWrapper">
          <img src={leftCar} alt="left car" />
        </div>
        <div className="rightCarWrapper">
          <img src={rightCar} alt="right car" />
        </div>
      </div>
      <div className="welcomeWrapper">
        <h1>Welcome</h1>
        <p>Registration was successful. Welcome to Zipu <strong>GIGM Motors</strong>, conviniently manage your company, staff, trips, terminals and many more </p>
        <Form
          onFinish={goToDashboard}
          hideRequiredMark
          layout="vertical"
          style={{ width: '100%' }}
        >
          {
            SubmitButton('GO TO DASHBOARD')
          }
        </Form>

      </div>
    </div>
  )
}

export default withRouter(Success);