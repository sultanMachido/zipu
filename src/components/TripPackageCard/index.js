import React from 'react';
import './styles.scss';


const TripPackageCard = ({ tripPackage }) => {

  return (
    <div className="tripPackageCardWrapper" key={tripPackage.id}>
      <div className="photoWrapper">
        <img src={tripPackage.cardImage} />
      </div>
      <div className="transcoNameWrapper">
        <p className="transcoName">{tripPackage.transco}</p>

        <h1 className="sourceDestination">{tripPackage.source} to {tripPackage.destination}</h1>
        <p className="description">{tripPackage.description}</p>
        <img src={tripPackage.vehicleIcon} alt="vehicleIcon" />
        <span>{tripPackage.vehicleType}</span>
      </div>

    </div>
  )
}

export default TripPackageCard;