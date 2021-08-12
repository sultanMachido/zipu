/** @format */

import loginTypes from '../../types/loginTypes';

const cachedUser = localStorage && JSON?.parse(localStorage.getItem('zipuUser'));
const cachedToken = localStorage && localStorage.getItem('zipuJWTToken');
const cachedAuthorization = cachedUser && cachedToken;

export const loginInitialState = {
	isAuthenticated: cachedAuthorization ? true : false,
	token: cachedToken ? cachedToken : null,
	userInfo: cachedUser ? cachedUser : null,
	loginLoading: false,
	error: ''
};

export const loginReducer = (state = loginInitialState, action) => {
	switch (action.type) {
		case loginTypes.LOGIN_ERROR:
			return {
				...state,
				error: action.payload
			};
		case loginTypes.CLEAR_LOGIN_ERRORS:
			return {
				...state,
				error: ''
			};
		case loginTypes.LOGIN_LOADING:
			return {
				...state,
				loginLoading: action.payload
			};
		case loginTypes.TOKEN_SUCCESS:
			return {
				...state,
				token: action.payload
			};
		case loginTypes.LOGIN_SUCCESS:
			return {
				...state,
				loginLoading: false,
				isAuthenticated: true,
				userInfo: action.payload
			};
		case loginTypes.LOG_OUT_USER:
			return {
				...loginInitialState
			};
		default:
			return state;
	}
};
