import React from 'react';
import { Form, Progress, Row, Col, Checkbox } from 'antd';
import { CompanySizeField, SubmitButton } from '../../../components/FormField';
import './TransportType.scss';
import { MdAirlineSeatReclineExtra, AiFillCar, MdDirectionsBus } from 'react-icons/all'

const inputSize = 'large';

const TransportType = (props) => {
  const [form] = Form.useForm();
  const [value, setValue] = React.useState([]);

  const chekboxOptions = [
    {
      id: 1,
      label: "Vehicle hire",
      icon: <MdDirectionsBus className="checkIcon" />,
      value: "1"
    },
    {
      id: 2,
      label: "Seat booking",
      icon: <MdAirlineSeatReclineExtra className="checkIcon" />,
      value: "2"
    },
    {
      id: 3,
      label: "Vehicle renting",
      icon: <AiFillCar className="checkIcon" />,
      value: "3"
    }
  ]


  const onChange = (checkedValues) => {
    setValue(checkedValues)
  }



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
          <Form.Item
            name="transportType"
            rules={[{ required: true, message: 'Select atleast one option' }]}
          >

            <div className="typeOfOperation">
              <Checkbox.Group
                className="checkboxWrapper"
                onChange={onChange}
              >
                <Row className="rowContainer">
                  {
                    chekboxOptions.map((option) => {
                      return (
                        <Col key={option.id}>
                          <Checkbox
                            value={option.value}
                            className={`checkboxBtnItem ${value.includes(option.value) ? 'checked' : ''}`}
                          >
                            {option.icon}
                            <p>{option.label}</p>
                          </Checkbox>
                        </Col>
                      )
                    })
                  }
                </Row>
              </Checkbox.Group>
            </div>
          </Form.Item>
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
