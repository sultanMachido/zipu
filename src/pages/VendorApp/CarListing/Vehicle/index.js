import React from 'react';
import { withRouter } from 'react-router-dom';
import { Divider, Card } from 'antd';
import { GoLocation, GiAlarmClock } from 'react-icons/all';
import formatCurrency from 'format-currency';
import './styles.scss';
import { SubmitButton, SubmitButtonSecondary } from '../../../../components/FormField';
import MainCar from '../../../../assets/img/toppng.svg';
import SeaterCar from '../../../../assets/img/car1.svg';
import SuitCaseCar from '../../../../assets/img/briefcase.svg';
import CarType from '../../../../assets/img/virus.svg';
import ACCar from '../../../../assets/img/airC.svg'

const Vehicle = ({ data, history }) => {

  const handleClick = () => {
    history.push(`/car-listing/edit/${data.id}`);
  }

  return (
    <Card style={{ borderRadius: "5px", marginBottom: "2rem" }}>
      <div className="tripInventoryCardTop">
        <div className="inventoryDetails">
          <img src={MainCar} alt="CarImg" />
          <div className="destinationDetails">
            <h1>{data?.vehicle_make}</h1>
            <p className="destinationText">{data?.vehicle_type}</p>

            <div className="destinationDetailsRow">
              <div className="destinationImgText">
                <img src={SeaterCar} alt="MotorImg" />
                <p>{data?.seats_available} Seater Car</p>
              </div>
              <div className="destinationImgText">
                <img src={CarType} alt="VirusImg" />
                <p>{data.carType}</p>
              </div>
            </div>

            <div className="destinationDetailsRow">
              <div className="destinationImgText">
                <img src={SuitCaseCar} alt="BriefCase" />
                <p>{data.noOfSuitCases} suitcases</p>
              </div>
              <div className="destinationImgText">
                <img src={ACCar} alt="ACImg" />
                <p>{data?.ac_available ? 'AC Available' : 'AC NOT Available'}</p>
              </div>
            </div>

          </div>
        </div>
        <div className="priceDetails">
          <p className="priceText">Price:</p>
          <h1 className="priceValue">&#8358;{formatCurrency(data.price)}</h1>
          <p className="discountValue">&#8358;{formatCurrency(data.discountPrice)} Discount price</p>
          <span
            className={
              `${data?.booking_status === 0
                ? "available"
                : data?.booking_status === 1
                  ? "notAvailable"
                  : "onRoute"
              }`
            }>
            {data?.booking_status === 0 ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </div>
      <Divider />
      <div className="tripInventoryCardBottom">
        <div className="distanceWrapper">
          <div className="distanceRow">
            <GoLocation />
            <div className="distanceText">
              <p className="distanceTextTitle">Distance</p>
              <p className="distanceTextValue">10.7km</p>
            </div>
          </div>

        </div>
        <div className="distanceWrapper">
          <div className="distanceRow">
            <GiAlarmClock />
            <div className="distanceText">
              <p className="distanceTextTitle">Travel Time</p>
              <p className="distanceTextValue">5hrs 40mins</p>
            </div>
          </div>
        </div>
        <div className="distanceWrapper">
          <div className="distanceRow">
            <GiAlarmClock />
            <div className="distanceText">
              <p className="distanceTextTitle">Total trips</p>
              <p className="distanceTextValue">51</p>
            </div>
          </div>
        </div>
        <div className="editAndChangeStausWrpper">
          {
            SubmitButton('EDIT VEHICLE', handleClick)
          }

          {
            SubmitButtonSecondary('Change status')
          }
        </div>
      </div>
    </Card>
  )
}

export default withRouter(Vehicle)
