import React from 'react';
import { Switch } from 'antd';
import './styles.scss'


const SwitchComponent = (props) => {
  return (
    <Switch
      checkedChildren="Active"
      unCheckedChildren="Disabled"
      defaultChecked={props?.status === 1 ? true : false}
      onClick={props?.handleClick}
      checked={props?.checked}
      loading={props?.loading}
    />
  )
}

export default SwitchComponent;