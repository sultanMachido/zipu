import React from 'react';
import './BusinessDetails.scss';
import { Form, Progress } from 'antd';
import {
  BankDetailsField,
  AccountNumberField,
  AccountNameField,
  UploadPrivacyPolicyField,
  UploadCustomerCarePolicyField,
  SubmitButton
} from '../../../components/FormField';

const BusinessDetails = (props) => {
  const inputSize = 'large';
  const [form] = Form.useForm();
  return (
    <>
      <div className="businessDetailsHeader">
        <Progress
          type="circle"
          width={60}
          percent={100}
          format={percent => `${(percent / 100) * 4} of 4`}
          strokeColor="#ffbc00"
          strokeWidth={8}
          trailColor="#f8eac2"
        />
        <div className="businessDetailsText">
          <h1>Business details</h1>
          <p>Completed!</p>
        </div>
      </div>

      <div className="businessDetailsForm">
        <Form
          form={form}
          onFinish={props?.onFinishBusinessDetails}
          hideRequiredMark
          layout="vertical"
          style={{ width: '100%' }}
        >

          <div className="permitSubmitInputWrapper">
            {
              BankDetailsField(inputSize, false, true)
            }
            {
              AccountNumberField(inputSize, true, 'Bank account number')
            }
            {
              AccountNameField(inputSize, true, 'Verify account name')
            }
            <p>Policy</p>
            {
              UploadPrivacyPolicyField()
            }
            {
              UploadCustomerCarePolicyField()
            }
          </div>
          <div className="btnWrapper">
            {
              SubmitButton('SUBMIT')
            }
          </div>
        </Form>
      </div>
    </>
  )
}

export default BusinessDetails