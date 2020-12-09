import React from 'react';
import { Form } from 'antd'
import './Login.scss';
import { EmailField, PasswordField, SubmitButton } from '../../../components/FormField';

const inputSize = 'large';

const Login = () => {
  const [form] = Form.useForm();


  const onFinish = () => {

  }
  return (
    <div className="loginWrapper">
      <div className="loginContent">
        <div className="loginText">
          <h1>Welcome!</h1>
          <p>Enter your details and login</p>
        </div>

        <div className="loginForm">
          <Form
            form={form}
            onFinish={onFinish}
            hideRequiredMark
            layout="vertical"
          >
            {
              EmailField(inputSize, false, true, 'Enter address')
            }
            {
              PasswordField(inputSize, true, 'Password')
            }
            <div className="btnWrapper">
              {
                SubmitButton('LOGIN')
              }
            </div>
          </Form>
          <div className="forgotPassword">
            <p>Forgot Password</p>
          </div>

          <div className="newUser">
            <p>New User?</p>
            <a href="">Create new account</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login