import React,{Suspense,useState} from 'react';
import moduleHelpers from 'utils/helpers/moduleHelper';
import './styles.scss';
import seatBooking from '../../../assets/img/seatBooking.png';
import carHire from '../../../assets/img/carHire.png';
import SeatsArrangements from '../../../components/SeatsArrangements';
import EditCompany from '../../VendorApp/Company/EditCompany';
import seatBooking from 'assets/img/seatBooking.png';
import carHire from 'assets/img/carHire.png';

const SeatBooking = React.lazy(() => moduleHelpers.retryImport(() => import('./SeatBooking')));
const CarHire = React.lazy(() => moduleHelpers.retryImport(() => import('./CarHire')));

const tabs = [
	{
		id: 1,
		name: 'Seat Bookings',
		class: 'seatBooking',
		icon: seatBooking
	},
	{
		id: 2,
		name: 'Hire a Car',
		class: 'carHire',
		icon: carHire
	}
];

const Home = () => {
	const [activeTab, setActiveTab] = useState('seatBooking');

	return (
		<Suspense fallback={'.'}>
			<div className="homepageWrapper">
				<div className="homepageHeader">
					<div className="tab">
						{tabs.map(tab => {
							return (
								<div
									key={tab.id}
									className={`tabPane ${tab.class === activeTab ? 'active' : ''}`}
									onClick={() => setActiveTab(tab.class)}
								>
									<img src={tab.icon} alt={tab.icon} />
									<p>{tab.name}</p>
								</div>
							);
						})}
					</div>

					<div className="tabContents">
						{activeTab === 'seatBooking' ? <SeatBooking /> : <CarHire />}
					</div>
				</div>
			</div>
		</Suspense>
	);
};

export default Home;
