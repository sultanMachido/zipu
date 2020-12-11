import React from 'react';
import { Form, Progress, Radio } from 'antd';
import { CompanySizeField, SubmitButton } from '../../../components/FormField';
import './TransportType.scss';
import { MdAirlineSeatReclineExtra, AiFillCar, MdDirectionsBus } from 'react-icons/all'

const inputSize = 'large'
const TransportType = (props) => {
  const [form] = Form.useForm();

  return (
    <>
      <div className="transportTypeHeader">
        <Progress
          type="circle"
          width={60}
          percent={50}
          format={percent => `${(percent / 100) * 4} of 4`}
          strokeColor="#ffbc00"
          strokeWidth={8}
          trailColor="#f8eac2"
        />
        <div className="transportTypeText">
          <h1>Transport type</h1>
          <p>Next: CAC and permit submission</p>
        </div>
      </div>

      <div className="transportTypeform">
        <Form
          form={form}
          onFinish={props?.onFinishTransportType}
          hideRequiredMark
          layout="vertical"
        >

          <div className="typeOfOperation">
            <Form.Item
              name="radio-button"
              label="What type of operation?"
              rules={[{ required: true, message: 'Please pick an item!' }]}
            >
              <Radio.Group className="radioBtnWrapper">
                <Radio.Button value="a" className="radioBtnItem">
                  <MdAirlineSeatReclineExtra className="radioIcon" />
                  <p>Seat booking</p>
                </Radio.Button>
                <Radio.Button value="b" className="radioBtnItem">
                  <MdDirectionsBus className="radioIcon" />
                  <p>Vehicle hire</p>
                </Radio.Button>
                <Radio.Button value="c" className="radioBtnItem">
                  <AiFillCar className="radioIcon" />
                  <p>Vehicle renting</p>
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="companySizeInputWrapper">
            {
              CompanySizeField(inputSize, true, '0')
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

export default TransportType;