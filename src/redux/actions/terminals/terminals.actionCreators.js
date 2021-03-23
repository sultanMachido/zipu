import terminalsTypes from '../../types/terminalTypes';

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

export const clearTerminalsTErrors = () => ({
	type: terminalsTypes.CLEAR_TERMINALS_ERRORS
});
