/** @format */

import registerTypes from '../../types/registerTypes';

export const registerLoading = (loadingState = true) => ({
  type: registerTypes.REGISTER_LOADING,
  payload: loadingState,
});

export const registerError = (error) => ({
  type: registerTypes.REGISTER_ERROR,
  payload: error,
});

export const clearRegisterErrors = () => ({
  type: registerTypes.CLEAR_REGISTER_ERRORS,
});

export const registerSuccess = (userInfo) => ({
  type: registerTypes.REGISTER_SUCCESS,
  payload: userInfo,
});

export const logOutUserSuccess = () => ({
  type: registerTypes.LOG_OUT_USER,
});

