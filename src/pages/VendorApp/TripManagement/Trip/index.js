import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const Trip = props => {
	const urlParam = props?.record?.vehiclePlateNumber.split(' ').join('-');
	return (
		<div className="tripWrapper">
			<div className="tripTime">
				<p>{props?.record?.departureTime}</p>
			</div>
			<div className="separator">
				<div
					className={`circle ${
						props?.record?.tripStatus === 'completed' ? 'completed' : 'notCompleted'
					}`}
				></div>
				<div
					className={`dottedLine ${
						props?.record?.tripStatus === 'completed'
							? 'dottedCompleted'
							: 'dottedNotCompleted'
					}`}
				></div>
			</div>
			<div className="tripDetailsWrapper">
				<div className="tripDetails">
					<h5>
						{props?.record?.startingPoint} - {props?.record?.destination}
					</h5>
					<p>{props?.record?.terminal}</p>
					<Link to={`/trip-management/vehicle-view/${urlParam}`}>View manifest</Link>
				</div>

				<div className="tripDetails">
					<h5>
						{props?.record?.startingPoint} - {props?.record?.destination}
					</h5>
					<p>{props?.record?.terminal}</p>
					<a href="/">View manifest</a>
				</div>

				<div className="tripDetails">
					<h5>
						{props?.record?.startingPoint} - {props?.record?.destination}
					</h5>
					<p>{props?.record?.terminal}</p>
					<a href="/">View manifest</a>
				</div>

				<div className="tripDetails">
					<h5>
						{props?.record?.startingPoint} - {props?.record?.destination}
					</h5>
					<p>{props?.record?.terminal}</p>
					<a href="/">View manifest</a>
				</div>
			</div>
		</div>
	);
};
export default Trip;
