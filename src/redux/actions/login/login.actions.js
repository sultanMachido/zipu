/** @format */

import { loginLoading, clearLoginErrors, loginError, loginSuccess, logOutUserSuccess } from './login.actionCreators';

import { APIService } from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const loginUser = (userData) => async (dispatch) => {
  dispatch(clearLoginErrors());
  dispatch(loginLoading());
  try {
    const loginRequest = await APIService.post('/login-transco', { ...userData });
    if (loginRequest.data.status === 'Success') {
      localStorage.setItem('zipuJWTToken', loginRequest.data.data.token.plainTextToken);
      localStorage.setItem('zipuUser', JSON.stringify(loginRequest.data.data.user));
      dispatch(loginLoading(false));
      dispatch(loginSuccess(loginRequest.data.data.user));
      return { loginStatus: true, tokenValid: true, message: 'Login successful' };
    }
    else {
      dispatch(loginLoading(false));
      return { loginStatus: false, message: 'hi' };
    }
  } catch (error) {
    const message = error.response?.data?.message;
    dispatch(loginError(message));
    dispatch(loginLoading(false));
    return { loginStatus: false, message: message || SOMETHING_WENT_WRONG };
  }
};

export const logUserOut = (history = null) => async (dispatch) => {
  try {
    localStorage.removeItem('zipuJWTToken');
    if (history) {
      history.push('/login');
    }
    return dispatch(logOutUserSuccess());
  } catch (error) {
    return { signedOut: false, error: error.message };
  }
};

