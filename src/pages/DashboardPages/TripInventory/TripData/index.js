import React from 'react';
import { Divider, Card } from 'antd';
import { GoLocation, GiAlarmClock } from 'react-icons/all';
import formatCurrency from 'format-currency'
import './styles.scss';
import { SubmitButton, SubmitButtonSecondary } from '../../../../components/FormField';
import './styles.scss';

const TripData = (props) => {
  return (
    <Card style={{ borderRadius: "5px", marginBottom: "2rem" }}>
      <div className="tripInventoryCardTop">
        <div className="inventoryDetails">
          <img src={props.data.carImg} alt="CarImg" />
          <div className="destinationDetails">
            <h1>{props.data.startingPoint} - {props.data.destination}</h1>
            <p className="destinationText">Destination</p>

            <div className="destinationDetailsRow">
              <div className="destinationImgText">
                <img src={props.data.noOfSeaterCarImg} alt="MotorImg" />
                <p>{props.data.noOfSeaterCar} Seater Car</p>
              </div>
              <div className="destinationImgText">
                <img src={props.data.carTypeUrl} alt="VirusImg" />
                <p>{props.data.carType}</p>
              </div>
            </div>

            <div className="destinationDetailsRow">
              <div className="destinationImgText">
                <img src={props.data.noOfSuitCasesImg} alt="BriefCase" />
                <p>{props.data.noOfSuitCases} suitcases</p>
              </div>
              <div className="destinationImgText">
                <img src={props.data.acAvailibilityImg} alt="ACImg" />
                <p>{props.data.acAvailibility}</p>
              </div>
            </div>

          </div>
        </div>
        <div className="priceDetails">
          <p className="priceText">Price:</p>
          <h1 className="priceValue">&#8358;{formatCurrency(props.data.price)}</h1>
          <p className="discountValue">&#8358;{formatCurrency(props.data.discountPrice)} Discount price</p>
          <span
            className={
              `${props.data.availabilityStatus === 'Available'
                ?
                "available"
                :
                props.data.availabilityStatus === 'Not Available'
                  ? "notAvailable"
                  : "onRoute"
              }`
            }>
            {props.data.availabilityStatus}
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
              <p className="distanceTextValue">{props.data.distance}km</p>
            </div>
          </div>

        </div>
        <div className="distanceWrapper">
          <div className="distanceRow">
            <GiAlarmClock />
            <div className="distanceText">
              <p className="distanceTextTitle">Travel Time</p>
              <p className="distanceTextValue">{props.data.travelTime}</p>
            </div>
          </div>
        </div>
        <div className="distanceWrapper">
          <div className="distanceRow">
            <GiAlarmClock />
            <div className="distanceText">
              <p className="distanceTextTitle">Total trips</p>
              <p className="distanceTextValue">{props.data.totalTrips}</p>
            </div>
          </div>
        </div>
        <div className="editAndChangeStausWrpper">
          {
            SubmitButton('EDIT LISTING')
          }
          {
            SubmitButtonSecondary('Change status')
          }
        </div>
      </div>
    </Card>
  )
}

export default TripData