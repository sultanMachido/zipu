/** @format */

import React from 'react';
import './FormField.scss';
import { Form, Input, Select, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Loader from '../../components/Loader'

const reservationWindows = [
  { id: 1, value: 'Reservation window 1' },
  { id: 2, value: 'Reservation window 2' },
  { id: 3, value: 'Reservation window 3' },
  { id: 4, value: 'Reservation window 4' },
];
const platformOptions = [
  { id: 1, value: 'Platform Option 1' },
  { id: 2, value: 'Platform Option 2' },
  { id: 3, value: 'Platform Option 3' },
  { id: 4, value: 'Platform Option 4' },
];

const bankDetails = [
  { id: 1, value: 'Bank 1' },
  { id: 2, value: 'Bank 2' },
  { id: 3, value: 'Bank 3' },
  { id: 4, value: 'Bank 4' },
];

const terminals = [
  { id: 1, value: 'Terminal 4' },
  { id: 2, value: 'Terminal 2' },
  { id: 3, value: 'Terminal 3' },
];

const times = [
  { id: 1, value: 'Time 1' },
  { id: 2, value: 'Time 2' },
  { id: 3, value: 'Time 3' },
];
const normFile = () => { };

export const SubmitButton = (name, handleClick, loading) => {
  return (
    < button className="submitButtonPrimary" type="submit" onClick={handleClick} >
      {loading ? <Loader color="black" /> : name}
    </button >
  )
};

export const SubmitButtonSecondary = (name) => (
  <button className="submitButtonSecondary" type="submit">
    {name}
  </button>
);

// email address
export const EmailField = (inputSize, disabled = false, required = true, placeholder) => (
  <Form.Item
    label=""
    name="email"
    validateTrigger={['onChange', 'onBlur']}
    hasFeedback
    rules={[
      ...(required ? [{ required: true, message: 'Please enter your email address' }] : []),
      { type: 'email', message: 'Please input a valid email' },
    ]}>
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
        ? [
          { required: true, message: 'Please enter your password' },
          {
            max: 60,
            message: 'Password cannot be greater than 60 characters',
          },
        ]
        : []),
      { min: 6, message: 'Password cannot be less than 6 characters' },
      {
        pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{0,}$/,
        message: 'Password must contain atleast one uppercase, one lowercase, a number, and a special character',
      },
    ]}>
    <Input.Password size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);

export const ConfirmPasswordField = (inputSize, required = true, placeholder) => (
  <Form.Item
    name="confirm_password"
    label=""
    dependencies={['password']}
    hasFeedback
    rules={[
      {
        required: true,
        message: 'Please confirm your password!',
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error('The two passwords that you entered do not match!'));
        },
      }),
    ]}>
    <Input.Password size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);

export const PhoneNumberField = (inputSize, required = true, placeholder) => (
  <Form.Item
    label=""
    name="phone"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          { required: true, message: 'Please enter your phone number' },
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
    ]}>
    <Input size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);

export const OTPField = (name, autofocus, placeholder = '-') => (
  <Form.Item
    name={name}
    rules={[
      { required: true, message: '' },
      { min: 1, message: '' },
      { max: 1, message: '' },
      { pattern: /^\d+$/, message: '' },
    ]}>
    <Input
      min={1}
      max={1}
      className="otpInputElement"
      autoFocus={autofocus}
      placeholder={placeholder}
      inputMode="numeric"
      autoComplete="one-time-code"
    />
  </Form.Item>
);

export const CompanySizeField = (inputSize, required = true, placeholder) => (
  <Form.Item
    name="company"
    label="Company size"
    rules={[
      ...(required
        ? [
          { required: true, message: 'Company size is required' },
          { max: 10, message: 'Company size cannot be more than 10 digits' },
        ]
        : []),
      {
        pattern: /^\d+$/,
        message: 'Company size can only contain digits',
      },
    ]}>
    <Input size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);

export const ReservationWindowField = (inputSize, disabled = false, required = true) => (
  <Form.Item
    label=""
    name="reservation"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          {
            required: true,
            message: 'Please select a reservation window',
          },
        ]
        : []),
    ]}>
    <Select placeholder="Select reservation window" size={inputSize} disabled={disabled}>
      {reservationWindows.map((reservationWindow) => (
        <Select.Option key={`reservationWindowSelect-${reservationWindow.id}`} value={reservationWindow.id}>
          {reservationWindow.value}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);

export const UploadCACDocsField = () => (
  <Form.Item
    name="upload"
    valuePropName="fileList"
    getValueFromEvent={normFile}
    style={{ border: '1px solid #D9D9D9', padding: '1rem' }}>
    <Upload>
      <Button
        icon={<UploadOutlined />}
        style={{
          borderRadius: '5px',
          background: '#E3EAED',
          border: '1px solid #DDE3E9',
          color: 'rgba(0, 0, 0, 0.25)',
        }}>
        Upload CAC documents
      </Button>
    </Upload>
  </Form.Item>
);

export const UploadPermitField = () => (
  <Form.Item
    name="upload"
    valuePropName="fileList"
    getValueFromEvent={normFile}
    style={{ border: '1px solid #D9D9D9', padding: '1rem' }}>
    <Upload>
      <Button
        icon={<UploadOutlined />}
        style={{
          borderRadius: '5px',
          background: '#E3EAED',
          border: '1px solid #DDE3E9',
          color: 'rgba(0, 0, 0, 0.25)',
        }}>
        Upload permit
      </Button>
    </Upload>
  </Form.Item>
);

export const PlatformOptionsField = (inputSize, disabled = false, required = true) => (
  <Form.Item
    label=""
    name="platformOptions"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          {
            required: true,
            message: 'Please select a platform',
          },
        ]
        : []),
    ]}>
    <Select placeholder="Platform options" size={inputSize} disabled={disabled}>
      {platformOptions.map((platformOption) => (
        <Select.Option key={`platformOptionSelect-${platformOption.id}`} value={platformOption.id}>
          {platformOption.value}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);

export const BankDetailsField = (inputSize, disabled = false, required = true) => (
  <Form.Item
    label="Bank details"
    name="bankdetails"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          {
            required: true,
            message: 'Please select a bank',
          },
        ]
        : []),
    ]}>
    <Select placeholder="Select bank" size={inputSize} disabled={disabled}>
      {bankDetails.map((bank) => (
        <Select.Option key={`bankSelect-${bank.id}`} value={bank.id}>
          {bank.value}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);

export const AccountNumberField = (inputSize, required = true, placeholder) => (
  <Form.Item
    label=""
    name="accountNumber"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          { required: true, message: 'Please enter your bank account number' },
          {
            min: 10,
            message: 'Bank account number cannot be less than 10 characters',
          },
          {
            max: 10,
            message: 'Bank account number cannot be greater than 10 characters',
          },
        ]
        : []),
      {
        pattern: /^\d+$/,
        message: 'Bank account number can only contain digits',
      },
    ]}>
    <Input size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);

export const AccountNameField = (inputSize, required = true, placeholder) => (
  <Form.Item
    label=""
    name="accountName"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          { required: true, message: 'Please enter your bank account name' },
          {
            min: 3,
            message: 'Bank account name cannot be less than 3 characters',
          },
          {
            max: 60,
            message: 'Bank account name cannot be greater than 60 characters',
          },
        ]
        : []),
      {
        pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        message: 'Bank account name can only contain digits',
      },
    ]}>
    <Input size={inputSize} className="formInputElement" placeholder={placeholder} />
  </Form.Item>
);

export const UploadPrivacyPolicyField = () => (
  <Form.Item
    name="privacy"
    valuePropName="fileList"
    getValueFromEvent={normFile}
    style={{ border: '1px solid #D9D9D9', padding: '1rem' }}>
    <Upload>
      <Button
        icon={<UploadOutlined />}
        style={{
          borderRadius: '5px',
          background: '#E3EAED',
          border: '1px solid #DDE3E9',
          color: 'rgba(0, 0, 0, 0.25)',
        }}>
        Upload privacy policy
      </Button>
    </Upload>
  </Form.Item>
);

export const UploadCustomerCarePolicyField = () => (
  <Form.Item
    name="customercare"
    valuePropName="fileList"
    getValueFromEvent={normFile}
    style={{ border: '1px solid #D9D9D9', padding: '1rem' }}>
    <Upload>
      <Button
        icon={<UploadOutlined />}
        style={{
          borderRadius: '5px',
          background: '#E3EAED',
          border: '1px solid #DDE3E9',
          color: 'rgba(0, 0, 0, 0.25)',
        }}>
        Upload customer care policy
      </Button>
    </Upload>
  </Form.Item>
);

export const TerminalSelectField = (inputSize, disabled = false, required = true) => (
  <Form.Item
    label=""
    name="terminalOptions"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          {
            required: true,
            message: 'Please select a terminal',
          },
        ]
        : []),
    ]}>
    <Select placeholder="Terminal: All" size={inputSize} disabled={disabled} className="selectElement">
      {terminals.map((terminal) => (
        <Select.Option key={`terminal-${terminal.id}`} value={terminal.id}>
          {terminal.value}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);

export const TimeSelectField = (inputSize, disabled = false, required = true) => (
  <Form.Item
    label=""
    name="timeOptions"
    hasFeedback
    validateTrigger={['onChange', 'onBlur']}
    rules={[
      ...(required
        ? [
          {
            required: true,
            message: 'Please select a time',
          },
        ]
        : []),
    ]}>
    <Select placeholder="Time: All" size={inputSize} disabled={disabled}>
      {times.map((time) => (
        <Select.Option key={`time-${time.id}`} value={time.id}>
          {time.value}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);

