/** @format */

import { registerReducer } from './registration/register.reducer';
import { verifyEmailReducer } from './verifyEmail/verifyEmail.reducer';
import { loginReducer } from './login/login.reducer';
import { promoCodesReducer } from './promoCodes/promoCodes.reducer';

export default {
  register: registerReducer,
  verifyEmail: verifyEmailReducer,
  login: loginReducer,
  promoCodes: promoCodesReducer
};
