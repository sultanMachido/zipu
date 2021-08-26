/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './styles.scss';

import React, { Fragment, useEffect } from 'react';
import VehicleSearchItem from 'ui/widgets/Customer/Search/components/VehicleSearchItem/index';

import CompanyInfo from './CompanyInfo';
import TranscoHeader from './TranscoHeader';
function TransoProfile({ transcoObj, transcoInfo, companyDescription, companyHeader }) {
	return (
		<div className="transcopage-wrapper">
			<TranscoHeader transcoInfo={transcoInfo} {...companyHeader} />
			<div className="tprow">
				<CompanyInfo transcoInfo={transcoInfo} {...companyDescription} />
				<div className="car-infos">
					<div className="trips">
						<h2 className="mb-4 sub-lg black">Trips by {transcoInfo?.name}</h2>
						{/* <VehicleSearchItem bordered={true} /> */}
						{transcoObj?.trips?.data?.length > 0 ? (
							<Fragment>
								{transcoObj?.trips?.data?.map((item, index) => {
									return <VehicleSearchItem key={index} trip={item} />;
								})}
							</Fragment>
						) : (
							<Fragment>
								<h2 className="mb-4 sub-lg black">No Trips yet</h2>
							</Fragment>
						)}
					</div>
					<div className="vehicle-hire">
						<h2 className="mb-4 sub-lg black">Vehicles for hire</h2>
						{transcoObj?.vehicles?.data?.length > 0 ? (
							<Fragment>
								<h2 className="mb-4 sub-lg black">Vehicles</h2>
								{transcoObj?.trips?.data?.map((item, index) => {
									return <VehicleSearchItem key={index} trip={item} />;
								})}
							</Fragment>
						) : (
							<Fragment>
								<h2 className="mb-4 sub-lg black">No Vehicles yet</h2>
							</Fragment>
						)}
						{/* <VehicleSearchItem bordered={true} /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TransoProfile;
