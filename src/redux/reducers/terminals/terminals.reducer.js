import terminalsTypes from '../../types/terminalTypes';

export const terminalsInitialState = {
	getTerminalsLoading: false,
	getTerminalsSuccess: {},
	getTerminalserror: '',
	terminalCount: 0,

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
				getTerminalserror: action.payload,
				terminalCount: 0
			};
		case terminalsTypes.GET_TERMINALS_SUCCESS:
			return {
				...state,
				getTerminalsLoading: false,
				getTerminalsSuccess: action?.payload,
				terminalCount: action.payload.terminals.total
			};
		case terminalsTypes.GET_TERMINALS_LOADING:
			return {
				...state,
				getTerminalsLoading: action.payload,
				terminalCount: 0
			};

		case terminalsTypes.ADD_TERMINALS_LOADING:
			return {
				...state,
				addTerminalsLoading: action.payload
			};

		case terminalsTypes.ADD_TERMINALS_ERROR:
			return {
				...state,
				addTerminalsError: action.payload,
				addTerminalsLoading: false,
			};
		case terminalsTypes.ADD_TERMINALS_SUCCESS:
			return {
				...state,
				addTerminalsSuccess: action.payload,
				addTerminalsLoading: false,
			};
		default:
			return state;
	}
};
