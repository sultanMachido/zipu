/** @format */

import verifyEmailTypes from '../../types/verifyEmailTypes';

export const verifyEmailLoading = (loadingState = true) => ({
	type: verifyEmailTypes.VERIFY_EMAIL_LOADING,
	payload: loadingState
});

export const verifyEmailError = (error) => ({
	type: verifyEmailTypes.VERIFY_EMAIL_ERROR,
	payload: error
});

export const clearVerifyEmailErrors = () => ({
	type: verifyEmailTypes.CLEAR_VERIFY_EMAIL_ERRORS
});

export const verifyEmailSuccess = (otpInfo) => ({
	type: verifyEmailTypes.VERIFY_EMAIL_SUCCESS,
	payload: otpInfo
});

export const setErrFlag = (status) => ({
	type: verifyEmailTypes.VERIFY_EMAIL_ERRFLAG,
	payload: status
});
