import React from 'react';
import './styles.scss';
import Gigm from 'assets/img/gigm.png';

const Partners = () => {
	return (
		<div className="partnersWrapper">
			<h2 className="title-lg black">Our Partners</h2>
			<h2 className="title-sm mt-xs black">These popular destinations have a lot to offer</h2>

			<div className="partnersGallery">
				<div className="partnersGallery__item">
					<figure>
						<img src={Gigm} alt="gigm" />
					</figure>
					<p className="title-sm font-400">
						<span className="font-700">400 &nbsp; </span> Trips Completed
					</p>
				</div>

				<div className="partnersGallery__item">
					<figure>
						<img src={Gigm} alt="gigm" />
					</figure>
					<p className="title-sm font-400">
						<span className="font-700">400 &nbsp; </span> Trips Completed
					</p>
				</div>

				<div className="partnersGallery__item">
					<figure>
						<img src={Gigm} alt="gigm" />
					</figure>
					<p className="title-sm font-400">
						<span className="font-700">400 &nbsp; </span> Trips Completed
					</p>
				</div>

				<div className="partnersGallery__item">
					<figure>
						<img src={Gigm} alt="gigm" />
					</figure>
					<p className="title-sm font-400">
						<span className="font-700">400 &nbsp; </span> Trips Completed
					</p>
				</div>

				
			</div>
		</div>
	);
};

export default Partners;
