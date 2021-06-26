/** @format */

import transportTypes from '../../types/transportTypes';

export const transportTypeLoading = (loadingState = true) => ({
	type: transportTypes.TRANSPORT_TYPE_LOADING,
	payload: loadingState
});

export const transportTypeError = (error) => ({
	type: transportTypes.TRANSPORT_TYPE_ERROR,
	payload: error
});

export const clearTransportTypeErrors = () => ({
	type: transportTypes.CLEAR_TRANSPORT_TYPE_ERRORS
});

export const transportTypeSuccess = (userInfo) => ({
	type: transportTypes.TRANSPORT_TYPE_SUCCESS,
	payload: userInfo
});
