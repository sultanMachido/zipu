import terminalsTypes from '../../types/terminalTypes';

// get terminals
export const getTerminalsLoading = (loadingState = true) => ({
	type: terminalsTypes.GET_TERMINALS_LOADING,
	payload: loadingState
});

export const getTerminalsSuccess = data => ({
	type: terminalsTypes.GET_TERMINALS_SUCCESS,
	payload: data
});

export const getTerminalsError = error => ({
	type: terminalsTypes.GET_TERMINALS_ERROR,
	payload: error
});

// add terminals
export const addTerminalsLoading = (loadingState = true) => ({
	type: terminalsTypes.ADD_TERMINALS_LOADING,
	payload: loadingState
});

export const addTerminalsSuccess = data => ({
	type: terminalsTypes.ADD_TERMINALS_SUCCESS,
	payload: data
});

export const addTerminalsError = error => ({
	type: terminalsTypes.ADD_TERMINALS_ERROR,
	payload: error
});


// edit terminals
export const editTerminalsLoading = (loadingState = true) => ({
	type: terminalsTypes.EDIT_TERMINALS_LOADING,
	payload: loadingState
});

export const editTerminalsSuccess = data => ({
	type: terminalsTypes.EDIT_TERMINALS_SUCCESS,
	payload: data
});

export const editTerminalsError = error => ({
	type: terminalsTypes.EDIT_TERMINALS_ERROR,
	payload: error
});

export const clearTerminalsErrors = () => ({
	type: terminalsTypes.CLEAR_TERMINALS_ERRORS
});

// get single terminal
export const getSingleTerminalLoading = (loadingState = true) => ({
	type: terminalsTypes.GET_ONE_TERMINAL_LOADING,
	payload: loadingState
});

export const getSingleTerminaSuccess = data => ({
	type: terminalsTypes.GET_ONE_TERMINAL_SUCCESS,
	payload: data
});

export const getSingleTerminaError = error => ({
	type: terminalsTypes.GET_ONE_TERMINAL_ERROR,
	payload: error
});
