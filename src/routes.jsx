import ForgotPage from 'pages/Customer/Auth/forgot';
import LoginPage from 'pages/Customer/Auth/login';
import RegisterPage from 'pages/Customer/Auth/register';
import ResetPage from 'pages/Customer/Auth/reset';
import BookingHistoryPage from 'pages/Customer/Booking/BookingHistory';
import CompanyPage from 'pages/Customer/Company';
import HomePage from 'pages/Customer/Home/index';
import ProfilePage from 'pages/Customer/Profile';
import SearchTripsPage from 'pages/Customer/Search/trips';
import SearchVehiclesPage from 'pages/Customer/Search/vehicles';
import SupportPage from 'pages/Customer/Support/index';
import BookTripPage from 'pages/Customer/Trip/book';
import SavedTripsPage from 'pages/Customer/Trip/index';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from 'ui/widgets/Auth/Customer/Welcome';
import BusinessDetails from 'ui/widgets/Auth/Vendor/BusinessDetails';
import CAC from 'ui/widgets/Auth/Vendor/CAC';
import AdminLogin from 'ui/widgets/Auth/Vendor/Login';
import OTP from 'ui/widgets/Auth/Vendor/OTP';
import Registration from 'ui/widgets/Auth/Vendor/Registration';
import TransportType from 'ui/widgets/Auth/Vendor/TransportType';
import AdminWelcome from 'ui/widgets/Auth/Vendor/Welcome';
import AddStaff from 'ui/widgets/Vendor/AddStaffActivity';
import BookingsList from 'ui/widgets/Vendor/BookingsList';
import Company from 'ui/widgets/Vendor/Company';
import CreateTerminal from 'ui/widgets/Vendor/CreateTerminal';
import PassengerManagement from 'ui/widgets/Vendor/PassengerManagement';
import Profile from 'ui/widgets/Vendor/Profile';
import StaffActivity from 'ui/widgets/Vendor/StaffActivity';
import StaffManagement from 'ui/widgets/Vendor/StaffManagement';
import TerminalManagement from 'ui/widgets/Vendor/TerminalManagement';
import TerminalStaff from 'ui/widgets/Vendor/TerminalStaff';
import VehicleListing from 'ui/widgets/Vendor/VehicleListing';
import ViewTerminal from 'ui/widgets/Vendor/ViewTerminal';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/customer" component={ProfilePage} />

				<Route exact path="/" component={HomePage} />
				<Route exact path="/customer/login" component={LoginPage} />
				<Route exact path="/customer/register" component={RegisterPage} />
				<Route exact path="/customer/forgot-password" component={ForgotPage} />
				<Route exact path="/customer/reset-password" component={ResetPage} />
				<Route exact path="/customer/booking-history" component={BookingHistoryPage} />
				<Route exact path="/customer/trips/saved" component={SavedTripsPage} />
				<Route exact path="/customer/trips/book" component={BookTripPage} />
				<Route exact path="/help-support" component={SupportPage} />
				<Route exact path="/company" component={CompanyPage} />
				<Route exact path="/search/trips" component={SearchTripsPage} />
				<Route exact path="/search/vehicles" component={SearchVehiclesPage} />
				<Route exact path="/reg" component={TransportType} />
				<Route exact path="/vehicle" component={TransportType} />
				<Route exact path="/vendor/auth/login" component={AdminLogin} />
				<Route exact path="/vendor/auth/register" component={Registration} />
				<Route exact path="/vendor/auth/otp" component={OTP} />
				<Route exact path="/vendor/auth/cac" component={CAC} />
				<Route exact path="/vendor/auth/business" component={BusinessDetails} />
				<Route exact path="/vendor/auth/transport-type" component={TransportType} />
				<Route exact path="/vendor/auth/welcome" component={AdminWelcome} />
				<Route exact path="/vendor/add-staff" component={AddStaff} />
				<Route exact path="/vendor/company" component={Company} />
				<Route exact path="/vendor/create-terminal" component={CreateTerminal} />
				<Route exact path="/vendor/passenger-management" component={PassengerManagement} />
				<Route exact path="/vendor/profile" component={Profile} />
				<Route exact path="/vendor/staff" component={StaffActivity} />
				<Route exact path="/vendor/staff-management" component={StaffManagement} />
				<Route exact path="/vendor/terminal-management" component={TerminalManagement} />
				<Route exact path="/vendor/staff-terminal" component={TerminalStaff} />
				<Route exact path="/vendor/vehicle-listing" component={VehicleListing} />
				<Route exact path="/vendor/view-terminal" component={ViewTerminal} />
				<Route exact path="/vendor/booking-management" component={BookingsList} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
