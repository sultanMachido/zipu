/* eslint-disable no-unused-vars */
import ForgotPage from 'pages/Customer/Auth/forgot';
import LoginPage from 'pages/Customer/Auth/login';
import CustomerOTPpage from 'pages/Customer/Auth/otp';
import RegisterPage from 'pages/Customer/Auth/register';
import CustomerResendpage from 'pages/Customer/Auth/resend';
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
// import { Fragment } from 'react';
// import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import CustomerGuard from 'routes';
import BusinessDetails from 'ui/widgets/Auth/Vendor/BusinessDetails';
import CAC from 'ui/widgets/Auth/Vendor/CAC';
import AdminLogin from 'ui/widgets/Auth/Vendor/Login';
import OTP from 'ui/widgets/Auth/Vendor/OTP';
import Registration from 'ui/widgets/Auth/Vendor/Registration';
import TransportType from 'ui/widgets/Auth/Vendor/TransportType';
import AdminWelcome from 'ui/widgets/Auth/Vendor/Welcome';
import AddVehicleRental from 'ui/widgets/Vendor/AddBooking/Rental';
import AddStaff from 'ui/widgets/Vendor/AddStaffActivity';
import BookingsList from 'ui/widgets/Vendor/BookingsList';
import Company from 'ui/widgets/Vendor/Company';
import CreateTerminal from 'ui/widgets/Vendor/CreateTerminal';
import PassengerManagement from 'ui/widgets/Vendor/PassengerManagement';
import Profile from 'ui/widgets/Vendor/Profile';
import Report from 'ui/widgets/Vendor/Report';
import StaffActivity from 'ui/widgets/Vendor/StaffActivity';
import StaffManagement from 'ui/widgets/Vendor/StaffManagement';
import TerminalManagement from 'ui/widgets/Vendor/TerminalManagement';
import TerminalStaff from 'ui/widgets/Vendor/TerminalStaff';
import TripManagement from 'ui/widgets/Vendor/TripManagement';
import VehicleListing from 'ui/widgets/Vendor/VehicleListing';
import ViewTerminal from 'ui/widgets/Vendor/ViewTerminal';
import CustomerGuard, { GuestCustomer, PrivateCustomer } from 'utils/AuthHelper';
import PublicRoute from 'utils/PublicRoute';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/company" component={CompanyPage} />
				<Route exact path="/customer/trips/book/:id" component={BookTripPage} />
				<Route exact path="/help-support" component={SupportPage} />
				<Route exact path="/search/trips" component={SearchTripsPage} />
				<Route exact path="/search/vehicles" component={SearchVehiclesPage} />
				<PublicRoute exact path="/customer/login" component={LoginPage} />
				<PublicRoute exact path="/customer/register" component={RegisterPage} />
				<PublicRoute exact path="/customer/verify" component={CustomerOTPpage} />
				<PublicRoute exact path="/customer/resend" component={CustomerResendpage} />
				<PublicRoute exact path="/customer/forgot-password" component={ForgotPage} />
				<PublicRoute exact path="/customer/reset-password" component={ResetPage} />
				<CustomerGuard exact path="/customer/booking-history" component={BookingHistoryPage} />
				<CustomerGuard exact path="/customer/trips/saved" component={SavedTripsPage} />
				<Route exact path="/" component={HomePage} />
				<CustomerGuard path="/customer" component={ProfilePage} />
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
				<Route exact path="/vendor/add-vehicle/rental" component={AddVehicleRental} />
				<Route exact path="/vendor/add-vehicle/booking" component={BookingsList} />
				<Route exact path="/vendor/reports" component={Report} />
				<Route exact path="/vendor/trip-management" component={TripManagement} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
