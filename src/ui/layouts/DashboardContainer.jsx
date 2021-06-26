// import { Layout } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
// import moduleHelpers from '../../utils/helpers/moduleHelper';
// import "./styles.scss";
import { Route, Switch, withRouter } from 'react-router-dom';
// import MenuTabs from '../components/MenuTabs';
// import Navbar from '../components/Navbar/index';
// import TitlePane from '../components/TitlePane';
// import Footer from '../components/Footer';
// import { logUserOut } from '../../redux/actions/login/login.actions';

// const Staff = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Staff')))
// const StaffAdd = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Staff/StaffAdd')))
// const EditStaff = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Staff/StaffEdit')))
// const TripManagement = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/TripManagement')))
// const AddTrip = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/TripManagement/AddTrip')))
// const EditTrip = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/CarListing/EditVehicle')))
// const Terminals = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Terminals')))
// const AddTerminal = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Terminals/AddTerminal')))
// const EditTerminal = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Terminals/EditTerminal')))
// const ViewTerminal = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Terminals/ViewTerminal')))
// const Bookings = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Bookings')))
// const CarListing = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/CarListing')))
// const AddVehicle = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/CarListing/AddVehicle')))
// const Passengers = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Passengers')))
// const ViewPassenger = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Passengers/ViewPassenger')))
// const Report = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Report')))
// const PromoCodes = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Report/PromoCodes')))
// const Company = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Company')))
// const EditCompany = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/VendorApp/Company/EditCompany')))

// // customer routes imports
// const HomePage = React.lazy(() => moduleHelpers.retryImport(() => import('../../pages/CustomerApp/Home')));

const DashboardContainer = (props) => {
	const handleLogout = async () => {
		props.logUserOut(props?.history);
	};
	const pathname = props.location.pathname;
	const profile = JSON.parse(window.localStorage.getItem('_profile'));

	const innerPages = [
		{
			route: '/staff/add',
			prev: '/staff',
			title: 'Create new staff'
		},

		{
			route: '/car-listing/add',
			prev: '/car-listing',
			title: 'Create new trip'
		},
		{
			route: '/reports/promo-codes',
			prev: '/reports',
			title: 'Promo Codes'
		},
		{
			route: '/trip-management/add',
			prev: '/trip-management',
			title: 'Create new Trip'
		},
		{
			route: '/terminals/add',
			prev: '/terminals',
			title: 'Create new Terminal'
		},
		{
			route: '/terminals/terminal',
			prev: '/terminals',
			title: 'View Terminal'
		},
		{
			route: '/terminals/edit',
			prev: '/terminals',
			title: 'Edit Terminal'
		},
		{
			route: `/staff/edit`,
			prev: '/staff',
			title: 'Edit Staff'
		},
		{
			route: '/car-listing/edit',
			prev: '/car-listing',
			title: 'Edit Listing'
		},
		{
			route: '/company/edit',
			prev: '/company',
			title: 'Edit Company'
		},
		{
			route: '/passengers/passenger',
			prev: '/passengers',
			title: 'View Passenger'
		}
	];

	const selectedInnerPage = innerPages.filter(({ route }) => {
		return route === pathname;
	})[0];

	const isCustomer = pathname.split('/').includes('customer');

	// const content = () => {
	// 	return (
	// 		<div style={{ padding: '2rem 0 8rem 0' }}>
	// 			<h1 style={{ color: '#fff', lineHeight: '50px', fontSize: '35px' }}>
	// 				Book a trip or rent a car <br />
	// 				going to all parts of Nigeria{' '}
	// 			</h1>

	// 			<div className=""></div>
	// 		</div>
	// 	);
	// };

	return (
		<div className="contentWrapper">
			{/* <Navbar path={pathname} profile={profile} logoutUser={handleLogout} /> */}
			{/* <MenuTabs visible={selectedInnerPage || isCustomer ? false : true} /> */}
			{/* <TitlePane
				prev={selectedInnerPage && selectedInnerPage.prev}
				title={selectedInnerPage && selectedInnerPage.title}
				visible={selectedInnerPage || isCustomer ? true : false}
				isCustomer={isCustomer}
				content={content}
			/> */}

			<div className="layoutContainer">
				<React.Suspense fallback={'.'}>
					<Switch>
						{/* <Route exact path="/bookings" component={Bookings}></Route>
						<Route exact path="/staff" component={Staff}></Route>
						<Route exact path="/staff/add" component={StaffAdd}></Route>
						<Route exact path="/staff/edit" component={EditStaff}></Route>
						<Route exact path="/car-listing" component={CarListing}></Route>
						<Route exact path="/car-listing/add" component={AddVehicle}></Route>
						<Route exact path="/car-listing/edit/:id" component={EditTrip}></Route>
						<Route exact path="/trip-management" component={TripManagement}></Route>
						<Route exact path="/trip-management/add" component={AddTrip}></Route>
						<Route exact path="/terminals" component={Terminals}></Route>
						<Route exact path="/terminals/add" component={AddTerminal}></Route>
						<Route exact path="/terminals/edit" component={EditTerminal}></Route>
						<Route exact path="/terminals/terminal" component={ViewTerminal}></Route>
						<Route exact path="/passengers" component={Passengers}></Route>
						<Route exact path="/passengers/passenger" component={ViewPassenger}></Route>
						<Route exact path="/company" component={Company}></Route>
						<Route exact path="/company/edit" component={EditCompany}></Route>
						<Route exact path="/reports" component={Report}></Route>
						<Route exact path="/reports/promo-codes" component={PromoCodes}></Route>

						{/* customer routes */}
						{/* <Route exact path="/customer" component={HomePage}></Route> */}
					</Switch>
				</React.Suspense>
			</div>
			<div className="footerSection">
				<div>footer</div>
				{/* <Footer /> */}
			</div>
		</div>
	);
};

// const mapDispatchToProps = {
// 	logUserOut
// };
// export default withRouter(connect((state) => ({}), mapDispatchToProps)(DashboardContainer));
