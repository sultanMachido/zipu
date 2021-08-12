import { bookingsReducer } from './bookings/bookings.reducer';
import { businessDetailsReducer } from './businessDetails/businessDetails.reducer';
import { customerReducer } from './customer/customer.reducer';
import { loginReducer } from './login/login.reducer';
import { permitSubmissionReducer } from './permitSubmission/permitSubmission.reducer';
import { promoCodesReducer } from './promoCodes/promoCodes.reducer';
import { registerReducer } from './registration/register.reducer';
import { staffReducer } from './staff/staff.reducer';
import { terminalsReducer } from './terminals/terminals.reducer';
import { transportReducer } from './transportType/transportType.reducer';
import { tripsReducer } from './trips/trips.reducer';
import { vehiclesReducer } from './vehicles/vehicles.reducer';
import { verifyEmailReducer } from './verifyEmail/verifyEmail.reducer';

export default {
	register: registerReducer,
	verifyEmail: verifyEmailReducer,
	login: loginReducer,
	promoCodes: promoCodesReducer,
	trips: tripsReducer,
	bookings: bookingsReducer,
	transportTypes: transportReducer,
	permitSubmission: permitSubmissionReducer,
	businessDetails: businessDetailsReducer,
	vehicles: vehiclesReducer,
	staffData: staffReducer,
	terminals: terminalsReducer,
	customer: customerReducer
};
