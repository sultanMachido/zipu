import terminalsTypes from '../../types/terminalTypes';

export const terminalsInitialState = {
	getTerminalsLoading: false,
	getTerminalsSuccess: [],
	getTerminalserror: '',

	addTerminalsLoading: false,
	addTerminalsSuccess: {},
	addTerminalsError: '',

	editTerminalsLoading: false,
	editTerminalsSuccess: {},
	editTerminalsError: ''
};

export const terminalsReducer = (state = terminalsInitialState, action) => {
	switch (action.type) {
		case terminalsTypes.GET_TERMINALS_ERROR:
			return {
				...state,
				getTerminalserror: action.payload
			};
		case terminalsTypes.GET_TERMINALS_SUCCESS:
			return {
				...state,
				getTerminalsLoading: false,
				getTerminalsSuccess: [...action?.payload?.data?.terminals]
			};
		case terminalsTypes.GET_TERMINALS_LOADING:
			return {
				...state,
				getTerminalsLoading: action.payload
			};
		case terminalsTypes.ADD_TERMINALS_ERROR:
			return {
				...state,
				addTerminalsError: action.payload
			};
		case terminalsTypes.ADD_TERMINALS_SUCCESS:
			return {
				...state,
				addTerminalsSuccess: action.payload
			};
		default:
			return state;
	}
};
