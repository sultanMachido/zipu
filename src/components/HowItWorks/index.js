import React from 'react';
import './styles.scss';
import SearchIcon from '../../assets/img/searchIcon.png';
import SelectBusIcon from '../../assets/img/selectBus.png';
import BookingIcon from '../../assets/img/bookingIcon.png';
import UsersGroupIcon from '../../assets/img/userGroupIcon.png';

import HowItWorksCard from '../HowItWorksCard'

const howItWorks = [
  {
    id: 1,
    title: "Search your trip",
    content: "A valet is usually an employee of the establishment or an employee of a third party valet service. ",
    icon: SearchIcon
  },
  {
    id: 2,
    title: "Select Bus or Car",
    content: "A valet is usually an employee of the establishment or an employee of a third party valet service. ",
    icon: SelectBusIcon
  },
  {
    id: 3,
    title: "Make booking",
    content: "A valet is usually an employee of the establishment or an employee of a third party valet service. ",
    icon: BookingIcon
  },
  {
    id: 4,
    title: "Ride in comfort & Ease",
    content: "A valet is usually an employee of the establishment or an employee of a third party valet service. ",
    icon: UsersGroupIcon
  }
]
const HowItWorks = () => {

  return (
    <div className="howItWorksWrapper">
      <div className="howItWorksHeader">
        <h1>How it all works</h1>
        <p>These popular destinations have a lot to offer</p>
      </div>
      <div className="howItWorksCards">
        {
          howItWorks.map((howItWork) => {
            return (
              <React.Fragment key={howItWork.id}>
                <HowItWorksCard howItWork={howItWork} />
              </React.Fragment>

            )
          })
        }
      </div>
    </div>
  )
}

export default HowItWorks