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

//get logged in user
export const getUserLoading = (loadingState = true) => ({
	type: loginTypes.GET_USER_LOADING,
	payload: loadingState
});

export const getUserSuccess = (userInfo) => ({
	type: loginTypes.GET_USER_SUCCESS,
	payload: userInfo
});

export const getUserError = (error) => ({
	type: loginTypes.GET_USER_ERROR,
	payload: error
});

//update logged in user
export const updateUserLoading = (loadingState = true) => ({
	type: loginTypes.UPDATE_USER_LOADING,
	payload: loadingState
});

export const updateUserSuccess = (userInfo) => ({
	type: loginTypes.UPDATE_USER_SUCCESS,
	payload: userInfo
});

export const updateUserError = (error) => ({
	type: loginTypes.UPDATE_USER_ERROR,
	payload: error
});

//update logged in user password
export const updatePasswordLoading = (loadingState = true) => ({
	type: loginTypes.UPDATE_PASSWORD_LOADING,
	payload: loadingState
});

export const updatePasswordSuccess = (userInfo) => ({
	type: loginTypes.UPDATE_PASSWORD_SUCCESS,
	payload: userInfo
});

export const updatePasswordError = (error) => ({
	type: loginTypes.UPDATE_PASSWORD_ERROR,
	payload: error
});

//update logged in user image
export const updateImageLoading = (loadingState = true) => ({
	type: loginTypes.UPDATE_IMAGE_LOADING,
	payload: loadingState
});

export const updateImageSuccess = (userInfo) => ({
	type: loginTypes.UPDATE_IMAGE_SUCCESS,
	payload: userInfo
});

export const updateImageError = (error) => ({
	type: loginTypes.UPDATE_IMAGE_ERROR,
	payload: error
});
