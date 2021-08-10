/** @format */

import verifyEmailTypes from '../../types/verifyEmailTypes';

export const otpInitialState = {
	otpData: {},
	otpDataLoading: false,
	otpVerified: false,
	otpErrFlag: false,
	error: ''
};

export const verifyEmailReducer = (state = otpInitialState, action) => {
	switch (action.type) {
		case verifyEmailTypes.VERIFY_EMAIL_ERROR:
			return {
				...state,
				otpVerified: false,
				otpDataLoading: false,
				otpErrFlag: true,
				error: action.payload
			};
		case verifyEmailTypes.VERIFY_EMAIL_ERRFLAG:
			return {
				...state,
				otpErrFlag: true
			};
		case verifyEmailTypes.CLEAR_VERIFY_EMAIL_ERRORS:
			return {
				...state,
				otpVerified: false,
				otpErrFlag: false,
				error: ''
			};
		case verifyEmailTypes.VERIFY_EMAIL_LOADING:
			return {
				...state,
				otpDataLoading: action.payload
			};
		case verifyEmailTypes.VERIFY_EMAIL_SUCCESS:
			return {
				...state,
				otpErrFlag: false,
				otpDataLoading: false,
				otpVerified: true,
				otpData: action.payload
			};
		default:
			return state;
	}
};
