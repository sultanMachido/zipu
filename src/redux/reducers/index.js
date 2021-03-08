/** @format */

import { registerReducer } from './registration/register.reducer';
import { verifyEmailReducer } from './verifyEmail/verifyEmail.reducer';

export default {
  register: registerReducer,
  verifyEmail: verifyEmailReducer
};
