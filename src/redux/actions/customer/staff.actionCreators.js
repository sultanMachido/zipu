import staffTypes from '../../types/staffTypes';

// clear staff error
export const clearStaffTErrors = () => ({
	type: staffTypes.CLEAR_STAFF_ERRORS
});

// get staff
export const getStaffLoading = (loadingState = true) => ({
	type: staffTypes.GET_STAFF_LOADING,
	payload: loadingState
});

export const getStaffSuccess = (data) => ({
	type: staffTypes.GET_STAFF_SUCCESS,
	payload: data
});

export const getStaffError = (error) => ({
	type: staffTypes.GET_STAFF_ERROR,
	payload: error
});

// get single staff
export const getSingleStaffLoading = (loadingState = true) => ({
	type: staffTypes.GET_SINGLE_STAFF_LOADING,
	payload: loadingState
});

export const getSingleStaffSuccess = (data) => ({
	type: staffTypes.GET_SINGLE_STAFF_SUCCESS,
	payload: data
});

export const getSingleStaffError = (error) => ({
	type: staffTypes.GET_SINGLE_STAFF_ERROR,
	payload: error
});

export const clearSingleStaffTErrors = () => ({
	type: staffTypes.CLEAR_SINGLE_STAFF_ERRORS
});

// add staff
export const addStaffLoading = (loadingState = true) => ({
	type: staffTypes.ADD_STAFF_LOADING,
	payload: loadingState
});

export const addStaffSuccess = (data) => ({
	type: staffTypes.ADD_STAFF_SUCCESS,
	payload: data
});

export const addStaffError = (error) => ({
	type: staffTypes.ADD_STAFF_ERROR,
	payload: error
});

// edit staff
export const editStaffLoading = (loadingState = true) => ({
	type: staffTypes.EDIT_STAFF_LOADING,
	payload: loadingState
});

export const editStaffSuccess = (data) => ({
	type: staffTypes.EDIT_STAFF_SUCCESS,
	payload: data
});

export const editStaffError = (error) => ({
	type: staffTypes.EDIT_STAFF_ERROR,
	payload: error
});

// activate staff
export const activateStaffLoading = (loadingState = true) => ({
	type: staffTypes.ACTIVATE_STAFF_LOADING,
	payload: loadingState
});

export const activateStaffSuccess = (data) => ({
	type: staffTypes.ACTIVATE_STAFF_SUCCESS,
	payload: data
});

export const activateStaffError = (error) => ({
	type: staffTypes.ACTIVATE_STAFF_ERROR,
	payload: error
});

// deactivate staff
export const deActivateStaffLoading = (loadingState = true) => ({
	type: staffTypes.DEACTIVATE_STAFF_LOADING,
	payload: loadingState
});

export const deActivateStaffSuccess = (data) => ({
	type: staffTypes.DEACTIVATE_STAFF_SUCCESS,
	payload: data
});

export const deActivateStaffError = (error) => ({
	type: staffTypes.DEACTIVATE_STAFF_ERROR,
	payload: error
});
