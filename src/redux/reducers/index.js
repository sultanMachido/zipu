import { registerReducer } from './registration/register.reducer';
import { verifyEmailReducer } from './verifyEmail/verifyEmail.reducer';
import { loginReducer } from './login/login.reducer';
import { promoCodesReducer } from './promoCodes/promoCodes.reducer';
import { tripsReducer } from './trips/trips.reducer';
import { transportReducer } from './transportType/transportType.reducer';
import { permitSubmissionReducer } from './permitSubmission/permitSubmission.reducer';
import { businessDetailsReducer } from './businessDetails/businessDetails.reducer'
import { vehiclesReducer } from './vehicles/vehicles.reducer';
import {staffReducer} from './staff/staff.reducer';
import {terminalsReducer} from './terminals/terminals.reducer';

export default {
  register: registerReducer,
  verifyEmail: verifyEmailReducer,
  login: loginReducer,
  promoCodes: promoCodesReducer,
  trips: tripsReducer,
  transportTypes: transportReducer,
  permitSubmission: permitSubmissionReducer,
  businessDetails: businessDetailsReducer,
  vehicles: vehiclesReducer,
  staffData: staffReducer,
	terminals: terminalsReducer
}
