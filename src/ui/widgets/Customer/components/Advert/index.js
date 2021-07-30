import './styles.scss';

import Ad1 from 'assets/img/ad1.png';
import Ad2 from 'assets/img/ad2.png';
import Ad3 from 'assets/img/ad3.png';
import { ReactComponent as Direct } from 'assets/svg/Direct.svg';
import { ReactComponent as Flame } from 'assets/svg/flame.svg';
import React from 'react';

const Advert = () => {
	return (
		<div className="d-flex justify-between advertWrapper">
			<div className="tsrow-sm tscol">
				<div
					className="tscol justify-between advertCard"
					style={{
						backgroundImage: `url(${Ad1})`,
						backgroundRepeat: ' no-repeat',
						backgroundPosition: 'center ',
						backgroundSize: '100% 100%'
					}}>
					<div className="tscol">
						<h2 className="sub-lg black">Benin, Edo State</h2>
						<p className="body-2 black">200 hotels & tourist locations</p>
					</div>

					<div className="tscol mt-sm advertBadge">
						<h6 className="body-sm-2 black">Prices From</h6>
						<h4 className="p-sm black">#9,200</h4>
					</div>
				</div>
				<div className="tscol advertCard">
					<Flame className="mb-sm" />
					<h3 className="sub-lg mb-xs black">New Payment Method</h3>
					<p className="action-lg brand-2">SEE ALL AVAILABLE OPTIONS</p>
				</div>
			</div>
			<div className="tsrow-lg tscol">
				<div className="tsrow  justify-between ad2">
					<div
						className="tscol col_2 advertCard"
						style={{
							height: '20rem'
						}}>
						<Direct className="mb-sm" />
						<h3 className="sub-lg mb-xs black">New Payment Method</h3>
						<p className="action-lg brand-2">SEE ALL AVAILABLE OPTIONS</p>
					</div>
					<div
						className="tscol col_2 advertCard"
						style={{
							backgroundImage: `url(${Ad2})`,
							backgroundRepeat: ' no-repeat',
							backgroundPosition: 'center ',
							backgroundSize: '100% 100%'
						}}>
						<div className="tscol">
							<h2 className="sub-lg black">Benin, Edo State</h2>
							<p className="body-2 black">200 hotels & tourist locations</p>
						</div>

						<div className="tscol mt-sm advertBadge">
							<h6 className="body-sm-2 black">Prices From</h6>
							<h4 className="p-sm black">#9,200</h4>
						</div>
					</div>
				</div>
				<div className="tsrow">
					<div
						className="tscol justify-between advertCard"
						style={{
							backgroundImage: `url(${Ad3})`,
							backgroundRepeat: ' no-repeat',
							backgroundPosition: 'center ',
							backgroundSize: '100% 100%',
							width: '100%'
						}}>
						<div className="tscol">
							<h2 className="sub-lg black">Benin, Edo State</h2>
							<p className="body-2 black">200 hotels & tourist locations</p>
						</div>

						<div className="tscol mt-sm advertBadge">
							<h6 className="body-sm-2 black">Prices From</h6>
							<h4 className="p-sm black">#9,200</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advert;
