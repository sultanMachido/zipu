/** @format */

import React from 'react';
import { Form } from 'antd';
import { RiMailOpenLine } from 'react-icons/all';
import { SubmitButton } from '../../../components/FormField';
import { useWindowSize } from '../../../hooks/useWindowSize'
import OtpInput from 'react-otp-input';

import './EmailVerification.scss';

const EmailVerification = (props) => {
  const [form] = Form.useForm();
  const [otpValue, setOtpValue] = React.useState('');
  const { width, height } = useWindowSize();
  console.log('yes')
  console.log(width, height)

  const handleChange = (otp) => {
    console.log({ otp });
    setOtpValue(otp);
  };

  console.log({ otpValue });

  return (
    <>
      <div className="emailVerificationHeader">
        <div className="emailIconWrapper">
          <RiMailOpenLine style={{ color: '#ffbc00', fontSize: '5rem' }} />
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
        style={{ width: '100%', height: "100%" }}>
        <div className="otpInputWrapper">
          <OtpInput
            value={otpValue}
            onChange={handleChange}
            numInputs={4}
            shouldAutoFocus
            isInputSecure
            isInputNum
            containerStyle={{
              width: '100%',
              height: "100%",
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            inputStyle={{
              width: '90%',
              height: width <= '600' ? '5rem' : '10rem',
              outline: 'none',
              border: 'none',
              backgroundColor: '#F8EAC2',
              borderRadius: '5px',
              margin: "0 auto",
            }}
            focusStyle={{
              border: '1px solid orange',
            }}
            errorStyle={{
              border: '1px solid red',
            }}
          // placeholder="----"
          />
        </div>
        <div className="btnWrapper">{SubmitButton('CONFIRM OTP')}</div>
      </Form>
      <div className="resentOTPWrapper">
        <p>
          Didn't get OTP? <a href="/">Resend</a>
        </p>
      </div>
    </>
  );
};

export default EmailVerification;

