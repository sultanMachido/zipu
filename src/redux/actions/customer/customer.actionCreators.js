import customerTypes from '../../types/customerTypes';

// clear customer error
export const clearCustomerTErrors = () => ({
	type: customerTypes.CLEAR_CUSTOMER_ERRORS
});

// get customer
export const getCustomerLoading = (loadingState = true) => ({
	type: customerTypes.GET_CUSTOMER_LOADING,
	payload: loadingState
});

export const getCustomerSuccess = (data) => ({
	type: customerTypes.GET_CUSTOMER_SUCCESS,
	payload: data
});

export const getCustomerError = (error) => ({
	type: customerTypes.GET_CUSTOMER_ERROR,
	payload: error
});

// get single customer
export const getSingleCustomerLoading = (loadingState = true) => ({
	type: customerTypes.GET_SINGLE_CUSTOMER_LOADING,
	payload: loadingState
});

export const getSingleCustomerSuccess = (data) => ({
	type: customerTypes.GET_SINGLE_CUSTOMER_SUCCESS,
	payload: data
});

export const getSingleCustomerError = (error) => ({
	type: customerTypes.GET_SINGLE_CUSTOMER_ERROR,
	payload: error
});

export const clearSingleCustomerTErrors = () => ({
	type: customerTypes.CLEAR_SINGLE_CUSTOMER_ERRORS
});

// add customer
export const addCustomerLoading = (loadingState = true) => ({
	type: customerTypes.ADD_CUSTOMER_LOADING,
	payload: loadingState
});

export const addCustomerSuccess = (data) => ({
	type: customerTypes.ADD_CUSTOMER_SUCCESS,
	payload: data
});

export const addCustomerError = (error) => ({
	type: customerTypes.ADD_CUSTOMER_ERROR,
	payload: error
});

// edit customer
export const editCustomerLoading = (loadingState = true) => ({
	type: customerTypes.EDIT_CUSTOMER_LOADING,
	payload: loadingState
});

export const editCustomerSuccess = (data) => ({
	type: customerTypes.EDIT_CUSTOMER_SUCCESS,
	payload: data
});

export const editCustomerError = (error) => ({
	type: customerTypes.EDIT_CUSTOMER_ERROR,
	payload: error
});

// activate customer
export const activateCustomerLoading = (loadingState = true) => ({
	type: customerTypes.ACTIVATE_CUSTOMER_LOADING,
	payload: loadingState
});

export const activateCustomerSuccess = (data) => ({
	type: customerTypes.ACTIVATE_CUSTOMER_SUCCESS,
	payload: data
});

export const activateCustomerError = (error) => ({
	type: customerTypes.ACTIVATE_CUSTOMER_ERROR,
	payload: error
});

// deactivate customer
export const deActivateCustomerLoading = (loadingState = true) => ({
	type: customerTypes.DEACTIVATE_CUSTOMER_LOADING,
	payload: loadingState
});

export const deActivateCustomerSuccess = (data) => ({
	type: customerTypes.DEACTIVATE_CUSTOMER_SUCCESS,
	payload: data
});

export const deActivateCustomerError = (error) => ({
	type: customerTypes.DEACTIVATE_CUSTOMER_ERROR,
	payload: error
});

// fetch customer saved trips
export const fetchCustomerSavedTripsLoading = (loadingState = true) => ({
	type: customerTypes.FETCH_CUSTOMER_SAVED_TRIPS_LOADING,
	payload: loadingState
});

export const fetchCustomerSavedTripsSuccess = (data) => ({
	type: customerTypes.FETCH_CUSTOMER_SAVED_TRIPS_SUCCESS,
	payload: data
});

export const fetchCustomerSavedTripsError = (error) => ({
	type: customerTypes.FETCH_CUSTOMER_SAVED_TRIPS_ERROR,
	payload: error
});
