import React from 'react';
import { Form } from 'antd';
import { RiMailOpenLine } from 'react-icons/all'
import { SubmitButton, OTPField } from '../../../components/FormField'

import './EmailVerification.scss'


const EmailVerification = (props) => {
  const [form] = Form.useForm();

  return (
    <>
      <div className="emailVerificationHeader">
        <div className="emailIconWrapper">
          <RiMailOpenLine style={{ color: "#ffbc00", fontSize: "5rem" }} />
        </div>
      </div>
      <div className="otpVerifyMessageWrapper">
        <h1>Email Verification</h1>
        <p>An OTP code has been sent to your email for verificatio, enter the code here to verify account</p>
      </div>
      <Form
        form={form}
        onFinish={props?.onFinishEmailVerify}
        hideRequiredMark
        layout="vertical"
      >
        <div className="otpInputWrapper">
          {OTPField('one', 'autofocus')}
          {OTPField('two')}
          {OTPField('three')}
          {OTPField('four')}
        </div>
        <div className="btnWrapper">
          {
            SubmitButton('CONFIRM OTP')
          }
        </div>
      </Form>
      <div className="resentOTPWrapper">
        <p>Didn't get OTP? <a href="/">Resend</a></p>
      </div>
    </>

  )
}

export default EmailVerification;