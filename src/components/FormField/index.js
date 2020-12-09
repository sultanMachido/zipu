import React from 'react';
import './FormField.scss';
import { Form, Input } from 'antd';


// email address
export const EmailField = (
  inputSize,
  disabled = false,
  required = true,
  placeholder
) => (
    <Form.Item
      label=""
      name="email"
      validateTrigger={['onChange', 'onBlur']}
      hasFeedback
      rules={[
        ...(required
          ? [{ required: true, message: "Please enter your email address" }]
          : []),
        { type: 'email', message: 'Please input a valid email' },
      ]}
    >
      <Input size={inputSize} className="formInputElement" placeholder={placeholder} disabled={disabled} />
    </Form.Item>
  );



export const PasswordField = (inputSize, required = true, placeholder) => (
  <Form.Item
    label=""
    name="password"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ?
        [
          { required: true, message: "Please enter your password" },
          {
            max: 60,
            message: 'Password cannot be greater than 60 characters',
          },
        ]
        :
        []),
      { min: 6, message: 'Password cannot be less than 6 characters' },
      {
        pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{0,}$/,
        message: 'Password must contain atleast one uppercase, one lowercase, a number, and a special character'
      }
    ]}
  >
    <Input.Password size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);

export const PhoneNumberField = (inputSize, required = true, placeholder) => (
  <Form.Item
    label=""
    name="phoneNumber"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          { required: true, message: "Please enter your phone number" },
          {
            min: 11,
            message: 'Phone number cannot be less than 11 characters',
          },
          {
            max: 11,
            message: 'Phone number cannot be greater than 11 characters',
          },
        ]
        : []),
      {
        pattern: /^\d+$/,
        message: 'Phone number can only contain digits',
      },
    ]}
  >
    <Input size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);



export const SubmitButton = (name) => (
  <button className="submitButton">
    {name}
  </button>
)