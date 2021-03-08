
import React from "react";
import { DatePicker } from 'antd'
import './styles.scss';
import { TerminalSelectField, TimeSelectField } from '../../../components/FormField';
import { TripManagementData } from '../../../utils/constants/TripManagementData';
import Trip from './Trip';
import EmptyScreen from '../../../components/EmptyScreen';
import { GrFormLocation } from 'react-icons/all'
const TripManagement = (props) => {

  const inputSize = 'meduim';

  const onChange = () => {

  }

  const onOk = () => {

  }

  const handleClick = () => {
    props.history.push('/trip-management/add')
  }

  return (
    <div className="tripManagementWrapper">
      <div className="tripManagementHeader">
        <h5 className="title">
          Trip Management
        </h5>

        <div className="tripManagementSelectWrapper">
          {
            TerminalSelectField(inputSize)
          }
          {
            TimeSelectField(inputSize)
          }
          <DatePicker showTime onChange={onChange} onOk={onOk} placeholder="Today" className="datePicker" />
        </div>
      </div>

      <div className="tripManagementContent">

        {
          TripManagementData.length === 0 ?
            null :
            <div className="tripDate">
              <div>
                <p>Today</p>
              </div>
              <div className="seperator">
                <div className="circle">
                </div>
                <div className="dottedLine">
                </div>
              </div>
              <div>
                <p>October 28 2020</p>
              </div>
            </div>
        }

        {
          TripManagementData.length === 0
            ?
            <EmptyScreen
              icon={<GrFormLocation />}
              title="No trips yet"
              subText="When you have trips, they will appear here"
              buttonText="ADD TRIPS"
              handleClick={handleClick}
            />
            :
            TripManagementData.map((trip) => {
              return (<Trip key={trip.id} record={trip} />)
            })
        }
      </div>

    </div>
  )
}

export default TripManagement;