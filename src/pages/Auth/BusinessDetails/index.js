import React from 'react';
import './BusinessDetails.scss';
import { Form, Progress, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  BankDetailsField,
  AccountNumberField,
  AccountNameField,
  UploadPrivacyPolicyField,
  UploadCustomerCarePolicyField,
  SubmitButton
} from '../../../components/FormField';
import { submitBusinessDetails } from '../../../redux/actions/businessDetails/businessDetails.actions'
import { useQuery } from '../../../utils/URLSearchParam';

const BusinessDetails = (props) => {
  const inputSize = 'large';
  const [form] = Form.useForm();
  let query = useQuery();

  const onFinishBusinessDetails = async (values) => {
    try {
      const messageKey = 'businessDetailsResponse';
      const key = 'businessDetails';
      const tryBusinessDetails = await props.submitBusinessDetails({ ...values });

      if (tryBusinessDetails.businessDetailsStatus) {
        message.success({ content: tryBusinessDetails.message, key: messageKey, duration: 10 });
        query.set('step', 6);
        props.history.push(`/register?step=${query.get('step')}`);
      } else {
        console.log(tryBusinessDetails?.message, ['tryBusinessDetails?.message'])
        // return message.error({ content: tryBusinessDetails?.message['reservation_window'][0], key, duration: 2 });
      }
    } catch (error) {
      console.log({ error }, 'error');
    }
  }
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
          onFinish={onFinishBusinessDetails}
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
              SubmitButton('SUBMIT', null, props?.businessDetails?.businessDetailsLoading)
            }
          </div>
        </Form>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    businessDetails: state.businessDetails
  }
}
const mapDispatchToProps = {
  submitBusinessDetails
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessDetails))