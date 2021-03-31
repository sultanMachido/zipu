import {
	clearTerminalsErrors,
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

import { APIService } from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const getTerminals = (data) => async (dispatch) => {
	const pageInt = parseInt(data?.page);
	dispatch(clearTerminalsErrors());
	dispatch(getTerminalsLoading());
	let getTerminalRequest;
	try {
		if (data?.pageSize) {

			getTerminalRequest = await APIService.get(`/terminals/transco/${data?.transco_id}?pagination_number=${data?.pageSize}&page=${pageInt}`);
		}
		else {
			getTerminalRequest = await APIService.get(`/terminals/transco/${data?.transco_id}`);
		}
		if (getTerminalRequest.data.status === 'Success') {
			dispatch(getTerminalsLoading());
			dispatch(getTerminalsSuccess(getTerminalRequest.data.data));
			return {
				getTerminalStatus: true,
				tokenValid: true,
				message: 'Successfully fetched Terminals record'
			};
		} else {
			dispatch(getTerminalsLoading(false));
			return { getTerminalStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(getTerminalsError(message));
		dispatch(getTerminalsLoading(false));
		return { getTerminalStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const addTerminal = (termialData) => async (dispatch) => {
	dispatch(clearTerminalsErrors());
	dispatch(addTerminalsLoading());
	try {
		const addTerminalRequest = await APIService.post(`/terminals/add`, { ...termialData });
		if (addTerminalRequest.data.status === 'Success') {
			dispatch(addTerminalsLoading());
			dispatch(addTerminalsSuccess(addTerminalRequest.data));
			return {
				addTerminalStatus: true,
				tokenValid: true,
				message: 'Terminal Successfully Created'
			};
		} else {
			dispatch(addTerminalsLoading(false));
			return { addTerminalStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(addTerminalsError(message));
		dispatch(addTerminalsLoading(false));
		return { addTerminalStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
}
