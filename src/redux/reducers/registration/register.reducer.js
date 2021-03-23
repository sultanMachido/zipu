/** @format */

import registerTypes from '../../types/registerTypes';

export const authInitialState = {
	isAuthenticated: false,
	transcoInfo: {},
	registerLoading: false,
	error: ''
};

export const registerReducer = (state = authInitialState, action) => {
	switch (action.type) {
		case registerTypes.REGISTER_ERROR:
			return {
				...state,
				error: action.payload
			};
		case registerTypes.CLEAR_REGISTER_ERRORS:
			return {
				...state,
				error: ''
			};
		case registerTypes.REGISTER_LOADING:
			return {
				...state,
				registerLoading: action.payload
			};
		case registerTypes.REGISTER_SUCCESS:
			return {
				...state,
				registerLoading: false,
				isAuthenticated: true,
				transcoInfo: action.payload
			};
		default:
			return state;
	}
};
