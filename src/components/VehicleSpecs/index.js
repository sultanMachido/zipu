import React from 'react';
import {AirConditionIcon, LuggageIcon, SeatIcon} from '../SVGs';
import './styles.scss';

function VehicleSpecs({vehicleInfo, className}) {
	return (
		<div className={"vehicle-specs " + className}>
			<ul>
				{vehicleInfo?.seater && (
					<li>
						<SeatIcon /> <span>{vehicleInfo.seater}</span>
					</li>
				)}
				{vehicleInfo?.luggage && (
					<li>
						<LuggageIcon /> <span>{vehicleInfo.luggage}</span>
					</li>
				)}
				{vehicleInfo?.airCondition && (
					<li>
						<AirConditionIcon /> <span>{vehicleInfo.airCondition}</span>
					</li>
				)}
				{vehicleInfo?.toilet && (
					<li>
						<AirConditionIcon /> <span>{vehicleInfo.toilet}</span>
					</li>
				)}
				{vehicleInfo?.carType && (
					<li>
						<AirConditionIcon /> <span>{vehicleInfo.carType}</span>
					</li>
				)}
			</ul>
		</div>
	);
}

export default VehicleSpecs;
