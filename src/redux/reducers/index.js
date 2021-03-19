/** @format */

import { registerReducer } from './registration/register.reducer';
import { verifyEmailReducer } from './verifyEmail/verifyEmail.reducer';
import { loginReducer } from './login/login.reducer';
import { promoCodesReducer } from './promoCodes/promoCodes.reducer';
import { tripsReducer } from './trips/trips.reducer';

export default {
  register: registerReducer,
  verifyEmail: verifyEmailReducer,
  login: loginReducer,
  promoCodes: promoCodesReducer,
  trips: tripsReducer
};
