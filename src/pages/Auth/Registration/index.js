/** @format */

import React from 'react';
import { Form, Progress, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Registration.scss';
import {
  EmailField,
  PasswordField,
  PhoneNumberField,
  SubmitButton,
  ConfirmPasswordField,
} from '../../../components/FormField';
import { registerUser } from '../../../redux/actions/registration/register.actions';
import { useQuery } from '../../../utils/URLSearchParam';

const inputSize = 'large';
const Registration = (props) => {
  const [form] = Form.useForm();
  let query = useQuery();

  const onRegister = async (values) => {
    try {
      const messageKey = 'registerResponse';
      const key = 'register';
      const tryUserRegistration = await props.registerUser(values);

      if (tryUserRegistration.registerStatus) {
        message.success({ content: tryUserRegistration.message, key: messageKey, duration: 5 });
        query.set('step', 2);

        props.history.push(`/register?step=${query.get('step')}`);
      } else {
        return message.error({ content: tryUserRegistration.message.email[0], key, duration: 2 });
      }
    } catch (error) {
      console.log({ error }, 'error');
    }
  };

  return (

    <>
      <div className="registrationHeader">
        <Progress
          type="circle"
          width={60}
          percent={25}
          format={(percent) => `${(percent / 100) * 4} of 4`}
          strokeColor="#ffbc00"
          strokeWidth={8}
          trailColor="#f8eac2"
        />
        <div className="registrationText">
          <h1>Company registration</h1>
          <p>Next: Transport type</p>
        </div>
      </div>

      <div className="registrationForm">
        <Form form={form} onFinish={onRegister} hideRequiredMark layout="vertical">
          {EmailField(inputSize, false, true, 'Your email address')}
          {PhoneNumberField(inputSize, true, 'Phone number')}
          {PasswordField(inputSize, true, 'Enter password')}
          {ConfirmPasswordField(inputSize, true, 'Confirm password')}
          <div className="btnWrapper">{SubmitButton('CREATE ACCOUNT', null, props?.register?.registerLoading)}</div>
        </Form>
        <div className="verificationText">
          <p>A verification message will be sent to your email</p>
        </div>

        <div className="privacyPolicy">
          <p>
            By signing in or creating an account, you agree with our{' '}
            <a href="/" className="termsConditions">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="/" className="privacyStatement">
              Privacy Statement
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  register: state.register,
});

const mapDispatchToProps = {
  registerUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Registration));

