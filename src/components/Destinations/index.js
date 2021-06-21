import React from 'react';
import './styles.scss';

const Destinations = () => {
	return (
		<div className="destinationWrapper">
			<h2 className="title-lg black">Destinations we love</h2>
			<h2 className="title-sm mt-xs black">These popular destinations have a lot to offer</h2>

			<div className="tabContainer">
				<button className="activeTab">Cities</button>
				<button>Popular</button>
				<button>Lowest Prices</button>
			</div>

			<div className="destinations">
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
				<div className="tscol destinations__item">
					<h4 className="">Lagos</h4>
					<p className="p-lg">1640 Trips</p>
				</div>
			</div>
		</div>
	);
};

export default Destinations;
