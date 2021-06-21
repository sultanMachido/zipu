import React from 'react';
import './styles.scss';
import SearchNav from '../../../../components/SearchNav';
import BookTrip from '../../../../components/BookTrip';
import HowItWorks from '../../../../components/HowItWorks';
import TripPackages from '../../../../components/TripPackages'

const SeatBooking = () => {
  return (
    <div className="seatBookingWrapper">
      <SearchNav
        source="Akure"
        destination="Lagos"
      />

      <BookTrip />

      <HowItWorks />
      <div className="tripPackageBg">
        <TripPackages />
      </div>

    </div>
  )
}

export default SeatBooking;