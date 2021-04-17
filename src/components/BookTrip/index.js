import React from 'react';
import './styles.scss';
import TranscoService from '../TranscoService';
import RentCar from '../../assets/img/rentCar.png';
import HireCar from '../../assets/img/hireCar.png';
import TripCar from '../../assets/img/tripCar.png';

const transcoServices = [
  {
    id: 1,
    title: "Book a seat",
    content: "A valet is usually an employee of the establishment or an employee of a third party valet service. ",
    carImage: TripCar
  },
  {
    id: 2,
    title: "Rent a car",
    content: "A valet is usually an employee of the establishment or an employee of a third party valet service. ",
    carImage: RentCar
  },
  {
    id: 3,
    title: "Hire a car",
    content: "A valet is usually an employee of the establishment or an employee of a third party valet service. ",
    carImage: HireCar
  }
]

const BookTrip = () => {
  return (
    <div className="bookTripWrapper">
      <div className="bookTripHeader">
        <h1>Book a trip or rent a car going to all parts </h1>
        <p>A valet is usually an employee of the establishment or an employee of a third party valet service. When there is a fee, it is usually either a flat amount or a fee based on how long the car is parked.</p>
      </div>

      <div className="vehicleCards">
        {
          transcoServices.map((transcoService) => {
            return (
              <React.Fragment key={transcoService.id}>
                <TranscoService transcoService={transcoService} />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default BookTrip