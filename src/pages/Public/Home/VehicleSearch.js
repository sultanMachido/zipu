import React, {Fragment} from 'react';
import {Slider} from 'antd';

import PublicContainer from 'layouts/PublicContainer';
import VehicleSearchItem from 'components/VehicleSearchItem';
import TripTab from './Partials/TripTab';
import EmptySearch from 'components/EmptySearch';


import './index.scss';

const VehicleSearch = () => {
	function onChange(value) {
		console.log('onChange: ', value);
	}

	function onAfterChange(value) {
		console.log('onAfterChange: ', value);
	}

	return (
		<PublicContainer>
			<Fragment>
			  {/* <ViewBookingsModal handleCancel={s} isModalVisible={true} /> */}
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
						</div>
					</div>
					<div className="searchItems">
						<div className="tscol">
							<div className="searchItems__results">
								<VehicleSearchItem />
								<VehicleSearchItem />
								<EmptySearch />
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		</PublicContainer>
	);
};

export default VehicleSearch;
