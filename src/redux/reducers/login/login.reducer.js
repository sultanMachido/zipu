/** @format */

import loginTypes from '../../types/loginTypes';

export const loginInitialState = {
  isAuthenticated: false,
  userInfo: null,
  loginLoading: false,
  error: '',
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case loginTypes.CLEAR_LOGIN_ERRORS:
      return {
        ...state,
        error: '',
      };
    case loginTypes.LOGIN_LOADING:
      return {
        ...state,
        loginLoading: action.payload,
      };
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        isAuthenticated: true,
        userInfo: action.payload,
      };
    case loginTypes.LOG_OUT_USER:
      return {
        ...loginInitialState,
      };
    default:
      return state;
  }
};

