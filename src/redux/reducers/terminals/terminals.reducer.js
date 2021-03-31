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
	editTerminalsError: '',

	getOneTerminlaLoading: false,
	getOneTerminlaSuccess: {},
	getOneTerminlaError: '',
};

export const terminalsReducer = (state = terminalsInitialState, action) => {
	switch (action.type) {

		// get terminals
		case terminalsTypes.GET_TERMINALS_LOADING:
			return {
				...state,
				getTerminalsLoading: action.payload,
				terminalCount: 0
			};
		case terminalsTypes.GET_TERMINALS_SUCCESS:
			return {
				...state,
				getTerminalsLoading: false,
				getTerminalsSuccess: action?.payload,
				terminalCount: action.payload.terminals.total
			};
		case terminalsTypes.GET_TERMINALS_ERROR:
			return {
				...state,
				getTerminalserror: action.payload,
				terminalCount: 0
			};


		// add terminals
		case terminalsTypes.ADD_TERMINALS_LOADING:
			return {
				...state,
				addTerminalsLoading: action.payload
			};
		case terminalsTypes.ADD_TERMINALS_SUCCESS:
			return {
				...state,
				addTerminalsSuccess: action.payload,
				addTerminalsLoading: false,
			};
		case terminalsTypes.ADD_TERMINALS_ERROR:
			return {
				...state,
				addTerminalsError: action.payload,
				addTerminalsLoading: false,
			};


		// get single terminal
		case terminalsTypes.GET_ONE_TERMINAL_LOADING:
			return {
				...state,
				getOneTerminlaLoading: action.payload
			};

		case terminalsTypes.GET_ONE_TERMINAL_SUCCESS:
			return {
				...state,
				getOneTerminlaSuccess: action.payload,
				getOneTerminlaLoading: false,
			};
		case terminalsTypes.GET_ONE_TERMINAL_ERROR:
			return {
				...state,
				getOneTerminlaError: action.payload,
				getOneTerminlaLoading: false,
			};

		default:
			return state;
	}
};
