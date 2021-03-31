import React from 'react';
import { Switch } from 'antd';
import './styles.scss'


const SwitchComponent = (props) => {

  const handleClick = (value) => {
    if (value === true) {
      console.log('active')
      props.setActivate(true)
      props.setDisabled(false)
    } else {
      console.log('disabled')
      props.setDisabled(true)
      props.setActivate(false)
    }

  }
  return (
    <Switch checkedChildren="Active" unCheckedChildren="Disabled" defaultChecked={props?.data === 1 ? true : false} onChange={handleClick} />


  )
}

export default SwitchComponent;