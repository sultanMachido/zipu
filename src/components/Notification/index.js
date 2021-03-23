import React from 'react';
import { Modal } from 'antd';


const Notification = () => {
  return (
    Modal.success({
      content: 'some messages...some messages...',
    })
  )
}

export default Notification;