/** @format */

import React from 'react';
import { Form, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RiMailOpenLine } from 'react-icons/all';
import { SubmitButton } from '../../../components/FormField';
import { useWindowSize } from '../../../hooks/useWindowSize'
import OtpInput from 'react-otp-input';
import { verifyUserEmail } from '../../../redux/actions/verifyEmail/verifyEmail.actions';
import { useQuery } from '../../../utils/URLSearchParam';

import './EmailVerification.scss';

const EmailVerification = (props) => {
  const [form] = Form.useForm();
  const [otpValue, setOtpValue] = React.useState('');
  const { width } = useWindowSize();
  let query = useQuery();

  const handleChange = (otp) => {
    setOtpValue(otp);
  };

  const onVerifyEmail = async (values) => {

    try {
      const messageKey = 'verifyEmailResponse';
      const key = 'verifyEmail';
      const tryUserEmailVerification = await props.verifyUserEmail(otpValue);

      if (tryUserEmailVerification.verifyEmailStatus) {
        message.success({ content: tryUserEmailVerification.message, key: messageKey, duration: 15 });
        query.set('step', 3);
        props.history.push(`/register?step=${query.get('step')}`);
      } else {
        return message.error({ content: tryUserEmailVerification.message, key, duration: 2 });
      }
    } catch (error) {
      console.log({ error }, 'error');
    }

  }

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
        onFinish={onVerifyEmail}
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
        <div className="btnWrapper">{SubmitButton('CONFIRM OTP', null, props?.verifyEmail?.otpDataLoading)}</div>
      </Form>
      <div className="resetOTPWrapper">
        <p>
          Didn't get OTP? <a href="/">Resend</a>
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  verifyEmail: state.verifyEmail,
});

const mapDispatchToProps = {
  verifyUserEmail,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailVerification));

