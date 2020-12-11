import React from 'react';
import { Form, Progress } from 'antd';
import {
  ReservationWindowField,
  UploadCACDocsField,
  UploadPermitField,
  PlatformOptionsField,
  SubmitButton
} from '../../../components/FormField';
import './PermitSubmission.scss';


const PermitSubmission = (props) => {
  const inputSize = 'large';
  const [form] = Form.useForm();

  return (
    <>
      <div className="permitSubmissionHeader">
        <Progress
          type="circle"
          width={60}
          percent={75}
          format={percent => `${(percent / 100) * 4} of 4`}
          strokeColor="#ffbc00"
          strokeWidth={8}
          trailColor="#f8eac2"
        />
        <div className="permitSubmissionText">
          <h1>CAC and Permit Submission</h1>
          <p>Next: Business details</p>
        </div>
      </div>

      <div className="permitSubmissionForm">
        <Form
          form={form}
          onFinish={props?.onFinishPermitSubmission}
          hideRequiredMark
          layout="vertical"
          style={{ width: '100%' }}
        >

          <div className="permitSubmitInputWrapper">
            {
              ReservationWindowField(inputSize, false, true)
            }
            {
              UploadCACDocsField()
            }
            {
              UploadPermitField()
            }
            {
              PlatformOptionsField(inputSize, false, true)
            }
          </div>
          <div className="btnWrapper">
            {
              SubmitButton('NEXT')
            }
          </div>
        </Form>
      </div>
    </>
  )
}

export default PermitSubmission;