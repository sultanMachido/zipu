import React, {Fragment} from 'react';
import {Slider} from 'antd';

import PublicContainer from 'layouts/PublicContainer';
import TripSearchItem from 'components/TripSearchItem';
import TripTab from './Partials/TripTab';

import './index.scss';

const TripSearch = () => {
	function onChange(value) {
		console.log('onChange: ', value);
	}

	function onAfterChange(value) {
		console.log('onAfterChange: ', value);
	}

	return (
		<PublicContainer>
			<Fragment>
				<section className="hero">
					<div className="searchTab">
						<TripTab />
					</div>
				</section>
				<section className="searchContainer">
					<div className="searchFilter">
						<div className="tscol">
							<div className="tscol filterBlock">
								<h2>Price</h2>
								<Slider
									range
									step={10}
									defaultValue={[20, 50]}
									onChange={onChange}
									onAfterChange={onAfterChange}
								/>
							</div>
							<div className="tscol filterBlock">
								<h2>Vehicle Request</h2>
								<div className="d-flex filterBlock--check">
									<input type="checkbox" value="ac" />
									<label>AC</label>
								</div>
								<div className="d-flex filterBlock--check">
									<input type="checkbox" value="ac" />
									<label>AC</label>
								</div>
							</div>
							<div className="tscol filterBlock">
								<h2>Passenger Number</h2>
								<div className="d-flex filterBlock--check">
									<input type="checkbox" value="ac" />
									<label>1 or 2 People</label>
								</div>
								<div className="d-flex filterBlock--check">
									<input type="checkbox" value="ac" />
									<label>5+ People</label>
								</div>
							</div>
						</div>
					</div>
					<div className="searchItems">
						<div className="tscol">
							<div className="d-flex searchItems__tabs mb-sm">
								<button>Small Cars</button>
								<button className="activeBtn">Medium Cars</button>
								<button>Large Cars</button>
								<button>Pemium Cars</button>
							</div>

							<div className="searchItems__results">
								<TripSearchItem />
								<TripSearchItem />
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		</PublicContainer>
	);
};

export default TripSearch;
