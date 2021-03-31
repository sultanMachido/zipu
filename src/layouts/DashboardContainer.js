import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, useParams } from 'react-router-dom';

import MenuTabs from '../components/MenuTabs';

import Navbar from '../components/Navbar/index';
import TitlePane from '../components/TitlePane';
import Bookings from '../pages/DashboardPages/Bookings';
import Staff from '../pages/DashboardPages/Staff';
import StaffAdd from '../pages/DashboardPages/Staff/StaffAdd';
import CarListing from '../pages/DashboardPages/CarListing';
import AddVehicle from '../pages/DashboardPages/CarListing/AddVehicle';
import EditTrip from '../pages/DashboardPages/CarListing/EditVehicle';
import Footer from '../components/Footer';
import TripManagement from '../pages/DashboardPages/TripManagement';
import AddTrip from '../pages/DashboardPages/TripManagement/AddTrip';
import EditStaff from '../pages/DashboardPages/Staff/StaffEdit';
import Terminals from '../pages/DashboardPages/Terminals';
import AddTerminal from '../pages/DashboardPages/Terminals/AddTerminal';
import EditTerminal from '../pages/DashboardPages/Terminals/EditTerminal';
import ViewTerminal from '../pages/DashboardPages/Terminals/ViewTerminal';
import InnerPageHeader from '../components/InnerPagesHeader'

import { logUserOut } from '../redux/actions/login/login.actions';

import "./styles.scss";
import Report from "../pages/DashboardPages/Report";
import PromoCodes from "../pages/DashboardPages/Report/PromoCodes";
import Company from "../pages/DashboardPages/Company";
import EditCompany from '../pages/DashboardPages/Company/EditCompany';

class DashboardContainer extends Component {
	handleLogout = async () => {
		return this.props.logUserOut(this.props.history);
	};

	render() {
		const pathname = this.props.location.pathname;
		const profile = JSON.parse(window.localStorage.getItem('_profile'));

		const innerPages = [
			{
				route: '/staff/add',
				prev: '/staff',
				title: 'Create new staff',
				module: 'staff'
			},

			{
				route: '/car-listing/add',
				prev: '/car-listing',
				title: 'Create new trip',
				module: 'car'
			},
			{
				route: '/reports/promo-codes',
				prev: '/reports',
				title: 'Promo Codes',
				module: 'promo'
			},
			{
				route: '/trip-management/add',
				prev: '/trip-management',
				title: 'Create new Trip',
				module: 'trip'
			},
			{
				route: '/terminals/add',
				prev: '/terminals',
				title: 'Create new Terminal',
				module: 'terminals'
			},
			{
				route: '/terminals/:id',
				prev: '/terminals',
				title: 'View Terminal',
				module: 'terminals'
			},
			{
				route: '/terminals/edit/:id',
				prev: '/terminals',
				title: 'Edit Terminal',
				module: 'terminals'
			},
			{
				route: `/staff/edit/:id`,
				prev: '/staff',
				title: 'Edit Staff',
				module: 'staff'
			},
			{
				route: '/car-listing/edit/:id',
				prev: '/car-listing',
				title: 'Edit Listing',
				module: 'car'
			},
			{
				route: '/company/edit',
				prev: '/company',
				title: 'Edit Company',
				module: 'company'
			}
		];


		const selectedInnerPage = innerPages.filter(({ route }) => {
			return route === pathname;
		})[0];

		return (
			<>
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
					<Switch>
						<Route exact path="/bookings" component={Bookings}></Route>
						<Route exact path="/staff" component={Staff}></Route>
						<Route exact path="/company" component={Company}></Route>
						<Route exact path="/company/edit" component={EditCompany}></Route>
						<Route exact path="/staff/add" component={StaffAdd}></Route>
						<Route exact path="/staff/edit/:id" component={EditStaff}></Route>
						<Route exact path="/car-listing" component={CarListing}></Route>
						<Route exact path="/car-listing/add" component={AddVehicle}></Route>
						<Route exact path="/car-listing/edit/:id" component={EditTrip}></Route>
						<Route exact path="/reports" component={Report}></Route>
						<Route exact path="/reports/promo-codes" component={PromoCodes}></Route>
						<Route exact path="/trip-management" component={TripManagement}></Route>
						<Route exact path="/trip-management/add" component={AddTrip}></Route>
						<Route exact path="/terminals" component={Terminals}></Route>
						<Route exact path="/terminals/add" component={AddTerminal}></Route>
						<Route exact path="/terminals/edit/:id" component={EditTerminal}></Route>
						<Route exact path="/terminals/:id" component={ViewTerminal}></Route>
					</Switch>
				</Layout>
				<div className="footerSection">
					<Footer />
				</div>
			</>
		);
	}
}

const mapDispatchToProps = {
	logUserOut
};
export default withRouter(connect(state => ({}), mapDispatchToProps)(DashboardContainer));
