import React from 'react';
import { Form, Progress } from 'antd';
import { EmailField, PasswordField, PhoneNumberField, SubmitButton } from '../../../components/FormField';
import './Registration.scss';

const inputSize = 'large';
const Registration = () => {
  const [form] = Form.useForm();


  const onFinish = () => {

  }

  return (<div className="registrationWrapper">
    <div className="registrationContent">
      <div className="registrationHeader">
        <Progress
          type="circle"
          width={60}
          percent={25}
          format={percent => `${(percent / 100) * 4} of 4`}
          strokeColor="#ffbc00"
          strokeWidth={7}
          trailColor="#f8eac2"
        />
        <div className="registrationText">
          <h1>Company registration</h1>
          <p>Next: Transport type</p>
        </div>

      </div>

      <div className="registrationForm">
        <Form
          form={form}
          onFinish={onFinish}
          hideRequiredMark
          layout="vertical"
        >
          {
            EmailField(inputSize, false, true, 'Your email address')
          }
          {
            PhoneNumberField(inputSize, true, 'Phone number')
          }
          {
            PasswordField(inputSize, true, 'Enter password')
          }
          <div className="btnWrapper">
            {
              SubmitButton('CREATE ACCOUNT')
            }
          </div>

        </Form>
        <div className="verificationText">
          <p>A verification message will be sent to your email</p>
        </div>

        <div className="privacyPolicy">
          <p>By signing in or creating an account, you agree with our <a href="/#" className="termsConditions">Terms & Conditions</a> and <a href="/#" className="privacyStatement">Privacy Statement</a></p>
        </div>
      </div>
    </div>
  </div>)
}

export default Registration