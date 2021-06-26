import businessDetailsTypes from '../../types/businessDetailsTypes';

export const businessDetailsTypesLoading = (loadingState = true) => ({
	type: businessDetailsTypes.BUSINESS_DETAILS_LOADING,
	payload: loadingState
});

export const businessDetailsTypesError = (error) => ({
	type: businessDetailsTypes.BUSINESS_DETAILS_ERROR,
	payload: error
});

export const clearBusinessDetailsTypesErrors = () => ({
	type: businessDetailsTypes.CLEAR_BUSINESS_DETAILS_ERRORS
});

export const businessDetailsTypesSuccess = (data) => ({
	type: businessDetailsTypes.BUSINESS_DETAILS_SUCCESS,
	payload: data
});
