import React from 'react';
import { Modal } from 'antd';
import { SubmitButton, PasswordField } from '../../../components/FormField';
import './styles.scss'


const ActivateDisableModal = (props) => {
  return (
    <Modal visible={props?.visible} onCancel={props?.handleCancel} footer={null} title={null} centered>
      <h2 className="modalTitle">{props?.title}</h2>
      <p className="modalText">{props?.text}</p>
      {PasswordField()}
      {SubmitButton('Continue')}
    </Modal>
  )
}

export default ActivateDisableModal;