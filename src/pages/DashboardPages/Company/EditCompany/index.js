import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Input, Row, Upload, Select, message, Button } from 'antd';
import './styles.scss';
import { SubmitButton } from '../../../../components/FormField';
import { connect } from 'react-redux';
import { fetchAllTrips, createTrip } from '../../../../redux/actions/trips/trips.actions';
import { UploadOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const EditCompany = (props) => {
  const [form] = Form.useForm();
  const vehicles = [];

  const [seatsArrangements, setSeatsArrangements] = useState([
    [1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0]
  ])

  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleChange = info => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    // }
    // if (info.file.status === 'done') {
    //   // Get this url from response in real world.
    //   getBase64(info.file.originFileObj, imageUrl =>
    //     this.setState({
    //       imageUrl,
    //       loading: false,
    //     }),
    //   );
    // }
  };

  const handleCreateTrip = async (values) => {
    const payload = { seat_arrangement: seatsArrangements, ...values };
    try {
      const successKey = 'createTripSuccess';
      const errorKey = 'createTripError';

      const tryCreatePromoCode = await props.createTrip({ ...payload });

      const { message: resMessage, createTripStatus } = tryCreatePromoCode || {};
      if (createTripStatus) {
        message.success({ content: resMessage, key: successKey, duration: 5 });
        form.resetFields()
      } else {
        return message.error({ content: resMessage, key: errorKey, duration: 2 });
      }
    } catch (error) {

    }
  }

  const uploadButton = (
    <div>
      {"loading" !== "" ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="editCompanyWrapper">
      <Form
        form={form}
        onFinish={handleCreateTrip}
        hideRequiredMark
        layout="vertical"
      >
        <div className="main">
          <Row gutter={0} className="main-row">
            <Col span={12}>
              <Card className="lhs" style={{ height: '100%' }}>
                <Row gutter={30} align="bottom">
                  <Col span={12}>
                    <Form.Item
                      label="Company name"
                      name="name"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter name' },
                        { min: 3, message: 'Name cannot be less than 3 characters' },
                        { max: 60, message: 'Name cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Company email"
                      name="email"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter email' },
                        { min: 3, message: 'Email cannot be less than 3 characters' },
                        { max: 60, message: 'Email cannot be greater than 60 characters' }
                      ]}>
                      <Input type="email" className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={30} align="bottom">
                  <Col span={12}>
                    <Form.Item
                      label="State"
                      name="state"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter state' }
                      ]}>
                      <Select placeholder="Select state">
                        {
                          vehicles.map(({ id, name }, index) => {
                            return (
                              <Select.Option key={id}>{name}</Select.Option>
                            )
                          })
                        }
                        <Select.Option key={1}>DEFAULT</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="City/Town"
                      name="city"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter city' }
                      ]}>
                      <Select placeholder="Select city/town">
                        <Select.Option key="regular">Regular</Select.Option>
                        <Select.Option key="premium">Premium</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      label="Address of company"
                      name="address"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter address' },
                        { min: 3, message: 'Address cannot be less than 3 characters' },
                        { max: 60, message: 'Address cannot be greater than 60 characters' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {"imageUrl" !== "" ? <img src={"imageUrl"} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    <p>Upload company picture</p>
                  </Col>
                  <Col span={12}>
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {"imageUrl" !== "" ? <img src={"imageUrl"} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>
                    <p>Upload company icon</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="promoHistory" style={{ height: '100%' }}>
                <Row gutter={30} align="bottom">
                  <Col span={12}>
                    <Form.Item
                      label="Phone number"
                      name="phone"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter phone' }
                      ]}>
                      <Input className="formInputElement" placeholder={""} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Company size"
                      name="size"
                      hasFeedback
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        { required: true, message: 'Please enter company size' }
                      ]}>
                      <Select placeholder="Select city/town">
                        <Select.Option key="regular">0-9</Select.Option>
                        <Select.Option key="premium">10-30</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={30} align="bottom" className="uploadPane">
                  <Col span={12}>
                    <label>CAC Documents</label>
                    <Input value="CAC_File_1234567" disabled />
                  </Col>
                  <Col span={12}>
                    <Upload>
                      <Button
                        icon={<UploadOutlined />}
                        style={{
                          width: '100%',
                          height: '46px',
                          borderRadius: '5px',
                          background: '#E3EAED',
                          border: '1px solid #DDE3E9',
                          color: 'rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        Upload new document
                      </Button>
                    </Upload>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom" className="uploadPane">
                  <Col span={12}>
                    <label>Permit document</label>
                    <Input value="CAC_File_1234567" disabled />
                  </Col>
                  <Col span={12}>
                    <Upload>
                      <Button
                        icon={<UploadOutlined />}
                        style={{
                          width: '100%',
                          height: '46px',
                          borderRadius: '5px',
                          background: '#E3EAED',
                          border: '1px solid #DDE3E9',
                          color: 'rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        Upload new document
                      </Button>
                    </Upload>
                  </Col>
                </Row>
                
                <Row gutter={30} align="bottom" className="uploadPane">
                  <Col span={12}>
                    <label>Policy document</label>
                    <Input value="CAC_File_1234567" disabled />
                  </Col>
                  <Col span={12}>
                    <Upload>
                      <Button
                        icon={<UploadOutlined />}
                        style={{
                          width: '100%',
                          height: '46px',
                          borderRadius: '5px',
                          background: '#E3EAED',
                          border: '1px solid #DDE3E9',
                          color: 'rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        Upload new document
                      </Button>
                    </Upload>
                  </Col>
                </Row>

                <Row gutter={30} align="bottom" className="uploadPane">
                  <Col span={12}>
                    <label>Customer care document</label>
                    <Input value="CAC_File_1234567" disabled />
                  </Col>
                  <Col span={12}>
                    <Upload>
                      <Button
                        icon={<UploadOutlined />}
                        style={{
                          width: '100%',
                          height: '46px',
                          borderRadius: '5px',
                          background: '#E3EAED',
                          border: '1px solid #DDE3E9',
                          color: 'rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        Upload new document
                      </Button>
                    </Upload>
                  </Col>
                </Row>

              </Card>
            </Col>
          </Row>
          <Row justify="end" style={{marginTop: '40px'}}>
            <Col span={6}>
              <div className="btnWrapper">
                {
                  SubmitButton('EDIT COMPANY', null, props?.promoCodes?.createTripLoading)
                }
              </div>
            </Col>
          </Row>
        </div>
      </Form>
    </div >
  )
}

const mapStateToProps = (state) => ({
  promoCodes: state.promoCodes,
});

const mapDispatchToProps = {
  fetchAllTrips,
  createTrip
};


export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);
