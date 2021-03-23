import {
	clearTerminalsTErrors,
	getTerminalsLoading,
	getTerminalsSuccess,
	getTerminalsError,
	addTerminalsLoading,
	addTerminalsSuccess,
	addTerminalsError,
	editTerminalsLoading,
	editTerminalsSuccess,
	editTerminalsError
} from './terminals.actionCreators';

import {APIService} from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const getTerminals = transco_id => async dispatch => {
	dispatch(clearTerminalsTErrors());
	dispatch(getTerminalsLoading());
	try {
		const getTerminalRequest = await APIService.get(`/terminals/transco/1`);
		if (getTerminalRequest.data.status === 'Success') {
			dispatch(getTerminalsLoading());
			dispatch(getTerminalsSuccess(getTerminalRequest.data));
			return {
				getTerminalStatus: true,
				tokenValid: true,
				message: 'Successfully fetched Terminals record'
			};
		} else {
			dispatch(getTerminalsLoading(false));
			return {getTerminalStatus: false, message: SOMETHING_WENT_WRONG};
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(getTerminalsError(message));
		dispatch(getTerminalsLoading(false));
		return {getTerminalStatus: false, message: message || SOMETHING_WENT_WRONG};
	}
};
