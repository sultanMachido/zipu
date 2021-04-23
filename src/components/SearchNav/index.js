import React from 'react';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import { SubmitButton } from '../../components/FormField';
import './styles.scss';
import ArrowLeft from '../../assets/img/arrowLeft.png';
import ArrowRight from '../../assets/img/arrowRight.png';
import ArrowDown from '../../assets/img/arrowDown.png';
import Calender from '../../assets/img/calender.png'
import { DateRangePicker } from 'rsuite';


const { RangePicker } = DatePicker;


const SearchNav = ({ source, destination }) => {
  const [value, setValue] = React.useState([])

  const onChange = (date) => {
    console.log({ date })
    setValue(date)
  }


  const onSelect = (dates) => {
    setValue([dates])
    console.log({ dates })
  }

  return (
    <div className="searchNavWrapper">
      <div className="sourceDestination">
        <p>{source}</p>
        <div className="arrowsWrapper">
          <img src={ArrowLeft} alt="ArrowLeft" />
          <img src={ArrowRight} alt="ArrowRight" />
        </div>
        <p>{destination}</p>
      </div>
      <div className="returnWrapper">
        <p>Return</p>
        <img src={ArrowDown} alt="ArrowDown" />
      </div>
      <div className="dateSearch">
        <div className="rangePickerWrapper">
          {/* <RangePicker bordered={false} /> */}
          <img src={Calender} alt="Calender" />
          <DateRangePicker
            appearance="subtle"
            placeholder="Selected Dates:"
            block
            size="lg"
            onChange={onChange}
            onSelect={onSelect}
            format="DD MMMM YYYY"
          />
        </div>
        <div className="buttonWrapper">
          {
            SubmitButton('SHOW TRIPS')
          }
        </div>

      </div>
    </div>
  )
}

export default SearchNav;