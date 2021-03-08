
/** @format */

import verifyEmailTypes from '../../types/verifyEmailTypes';

export const otpInitialState = {
  otpData: {},
  otpDataLoading: false,
  error: '',
};

export const verifyEmailReducer = (state = otpInitialState, action) => {
  switch (action.type) {
    case verifyEmailTypes.VERIFY_EMAIL_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case verifyEmailTypes.CLEAR_VERIFY_EMAIL_ERRORS:
      return {
        ...state,
        error: '',
      };
    case verifyEmailTypes.VERIFY_EMAIL_LOADING:
      return {
        ...state,
        otpDataLoading: action.payload,
      };
    case verifyEmailTypes.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        otpDataLoading: false,
        otpData: action.payload,
      };
    default:
      return state;
  }
};

