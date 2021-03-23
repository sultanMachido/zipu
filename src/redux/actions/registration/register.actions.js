/** @format */

import {
	registerLoading,
	clearRegisterErrors,
	registerError,
	registerSuccess
} from './register.actionCreators';

import {APIService} from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const registerUser = transacoData => async dispatch => {
	dispatch(clearRegisterErrors());
	dispatch(registerLoading());
	try {
		const registerRequest = await APIService.post('/register-transco', {...transacoData});
		if (registerRequest.data.status === 'Success') {
			localStorage.setItem('zipuJWTToken', registerRequest.data.data.token.plainTextToken);
			dispatch(registerLoading());
			dispatch(registerSuccess(registerRequest.data));
			return {registerStatus: true, tokenValid: true, message: 'Registration successful'};
		} else {
			dispatch(registerLoading(false));
			return {registerStatus: false, message: SOMETHING_WENT_WRONG};
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(registerError(message));
		dispatch(registerLoading(false));
		return {registerStatus: false, message: message || SOMETHING_WENT_WRONG};
	}
};
