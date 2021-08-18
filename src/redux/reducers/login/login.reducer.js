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
	updateImageLoading: false,
	updatePasswordLoading: false,
	updateUserLoading: false,
	error: ''
};

export const loginReducer = (state = loginInitialState, action) => {
	switch (action.type) {
		case loginTypes.LOGIN_ERROR:
		case loginTypes.GET_USER_ERROR:
		case loginTypes.UPDATE_USER_ERROR:
		case loginTypes.UPDATE_PASSWORD_ERROR:
		case loginTypes.UPDATE_IMAGE_ERROR:
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
		case loginTypes.GET_USER_LOADING:
			return {
				...state,
				loginLoading: action.payload
			};
		case loginTypes.UPDATE_IMAGE_LOADING:
			return {
				...state,
				updateImageLoading: action.payload
			};
		case loginTypes.UPDATE_PASSWORD_LOADING:
			return {
				...state,
				updatePasswordLoading: action.payload
			};
		case loginTypes.UPDATE_USER_LOADING:
			return {
				...state,
				updateUserLoading: action.payload
			};
		case loginTypes.TOKEN_SUCCESS:
			return {
				...state,
				token: action.payload
			};
		case loginTypes.LOGIN_SUCCESS:
		case loginTypes.GET_USER_SUCCESS:
		case loginTypes.UPDATE_USER_SUCCESS:
		case loginTypes.UPDATE_PASSWORD_SUCCESS:
		case loginTypes.UPDATE_IMAGE_SUCCESS:
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
