/** @format */

import { registerReducer } from './registration/register.reducer';
import { verifyEmailReducer } from './verifyEmail/verifyEmail.reducer';
import { loginReducer } from './login/login.reducer';
import { transportReducer } from './transportType/transportType.reducer'

export default {
  register: registerReducer,
  verifyEmail: verifyEmailReducer,
  login: loginReducer,
  transportTypes: transportReducer,
};
