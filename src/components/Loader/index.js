
import React from 'react';
import { Spin, Space } from 'antd';
import './Loader.scss'


const Loader = () => {
  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  )
}

export default Loader