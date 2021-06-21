import React from 'react';
import './styles.scss';
import {ReactComponent as Apple} from 'assets/svg/apple.svg';
import {ReactComponent as GooglePlay} from 'assets/svg/google-play.svg';

const MobileCta = () => {
	return (
		<div className="d-flex mobCTAWrapper">
			<div className="col_2">
				<h2 className="h2-lg black mb-sm">Get the Zipu app!</h2>
				<p className="sub-lg black mb-sm font-300">
					Download the zipu app from the app <br></br>store or play store for faster
					booking
				</p>
				<div className="tsrow btnContainer mt-sm">
					<button className="tsrow btn btn-outline  black mr-xs">
						<GooglePlay className="pr-xs" />
						<span className="black">Google Play</span>
					</button>
					<button className="tsrow btn btn-outline black">
						<Apple className="pr-xs" />
						<span className="black">App Store</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default MobileCta;
