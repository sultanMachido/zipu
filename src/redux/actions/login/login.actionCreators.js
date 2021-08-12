import loginTypes from '../../types/loginTypes';

export const loginLoading = (loadingState = true) => ({
	type: loginTypes.LOGIN_LOADING,
	payload: loadingState
});

export const loginError = (error) => ({
	type: loginTypes.LOGIN_ERROR,
	payload: error
});

export const clearLoginErrors = () => ({
	type: loginTypes.CLEAR_LOGIN_ERRORS
});

export const loginSuccess = (userInfo) => ({
	type: loginTypes.LOGIN_SUCCESS,
	payload: userInfo
});

export const tokenSuccess = (token) => ({
	type: loginTypes.TOKEN_SUCCESS,
	payload: token
});

export const logOutUserSuccess = () => ({
	type: loginTypes.LOG_OUT_USER
});
