import React from 'react';
import { Modal, Form } from 'antd';
import { SubmitButton, PasswordField } from '../../../components/FormField';
import './styles.scss'


const ActivateDisableModal = (props) => {
  const [form] = Form.useForm();
  return (
    <Modal visible={props?.visible} onCancel={props?.handleCancel} footer={null} title={null} centered>
      <Form
        form={form}
        onFinish={props?.onFinish}
        hideRequiredMark
        layout="vertical"
        style={{ width: '100%' }}
      >
        <h2 className="modalTitle">{props?.title}</h2>
        <p className="modalText">{props?.text}</p>
        {PasswordField()}
        {SubmitButton('Continue')}
      </Form>
    </Modal>
  )
}

export default ActivateDisableModal;