import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import moduleHelpers from '../utils/helpers/moduleHelper';
import "./styles.scss";

import MenuTabs from '../components/MenuTabs';
import Navbar from '../components/Navbar/index';
import TitlePane from '../components/TitlePane';
import Footer from '../components/Footer';
import { logUserOut } from '../redux/actions/login/login.actions';

const Staff = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Staff')))
const StaffAdd = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Staff/StaffAdd')))
const EditStaff = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Staff/StaffEdit')))

const TripManagement = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/TripManagement')))
const AddTrip = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/TripManagement/AddTrip')))
const EditTrip = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/CarListing/EditVehicle')))

const Terminals = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Terminals')))
const AddTerminal = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Terminals/AddTerminal')))
const EditTerminal = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Terminals/EditTerminal')))
const ViewTerminal = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Terminals/ViewTerminal')))

const Bookings = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Bookings')))

const CarListing = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/CarListing')))
const AddVehicle = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/CarListing/AddVehicle')))

const Passengers = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Passengers')))
const ViewPassenger = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Passengers/ViewPassenger')))


const Report = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Report')))
const PromoCodes = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Report/PromoCodes')))
const Company = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Company')))
const EditCompany = React.lazy(() => moduleHelpers.retryImport(() => import('../pages/DashboardPages/Company/EditCompany')))


class DashboardContainer extends Component {
	handleLogout = async () => {
		this.props.logUserOut(this?.props?.history);
	};

	render() {
		const pathname = this.props.location.pathname;
		const profile = JSON.parse(window.localStorage.getItem('_profile'));

		const innerPages = [
			{
				route: '/staff/add',
				prev: '/staff',
				title: 'Create new staff',
			},

			{
				route: '/car-listing/add',
				prev: '/car-listing',
				title: 'Create new trip',
			},
			{
				route: '/reports/promo-codes',
				prev: '/reports',
				title: 'Promo Codes',
			},
			{
				route: '/trip-management/add',
				prev: '/trip-management',
				title: 'Create new Trip',
			},
			{
				route: '/terminals/add',
				prev: '/terminals',
				title: 'Create new Terminal',
			},
			{
				route: '/terminals/terminal',
				prev: '/terminals',
				title: 'View Terminal',
			},
			{
				route: '/terminals/edit',
				prev: '/terminals',
				title: 'Edit Terminal',
			},
			{
				route: `/staff/edit`,
				prev: '/staff',
				title: 'Edit Staff',
			},
			{
				route: '/car-listing/edit',
				prev: '/car-listing',
				title: 'Edit Listing',
			},
			{
				route: '/company/edit',
				prev: '/company',
				title: 'Edit Company',
			},
			{
				route: '/passengers/passenger',
				prev: '/passengers',
				title: 'View Passenger',
			}
		];


		const selectedInnerPage = innerPages.filter(({ route }) => {
			return route === pathname;
		})[0];

		return (
			<div style={{ width: '100%' }}>
				<Navbar path={pathname} profile={profile} logoutUser={this.handleLogout} />
				<div style={{ marginTop: "80px" }} />
				<MenuTabs
					visible={selectedInnerPage ? false : true}
				/>
				<TitlePane
					prev={selectedInnerPage && selectedInnerPage.prev}
					title={selectedInnerPage && selectedInnerPage.title}
					visible={selectedInnerPage ? true : false}
				/>

				<Layout className="layoutContainer">
					<React.Suspense fallback={"."}>
						<Switch>
							<Route exact path="/bookings" component={Bookings}></Route>
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
						</Switch>
					</React.Suspense>
				</Layout>
				<div className="footerSection">
					<Footer />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	logUserOut
};
export default withRouter(connect(state => ({}), mapDispatchToProps)(DashboardContainer));
