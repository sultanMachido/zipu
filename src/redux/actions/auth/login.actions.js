import { APIService } from '../../../config/apiConfig';
import {
	clearLoginErrors,
	loginError,
	loginLoading,
	loginSuccess,
	logOutUserSuccess
} from './login.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const loginUser = (userData) => async (dispatch) => {
	dispatch(clearLoginErrors());
	dispatch(loginLoading());
	try {
		const loginRequest = await APIService.post('/login-transco', { ...userData });
		if (loginRequest.data.status === 'Success') {
			localStorage.setItem('zipuJWTToken', loginRequest.data.data.token.plainTextToken);
			localStorage.setItem('zipuUser', JSON.stringify(loginRequest.data.data.user));
			localStorage.setItem('transcoId', loginRequest.data.data.user.transco_id);
			dispatch(loginLoading(false));
			dispatch(loginSuccess(loginRequest.data.data.user));
			return { loginStatus: true, tokenValid: true, message: 'Login successful' };
		} else {
			dispatch(loginLoading(false));
			return { loginStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(loginError(message));
		dispatch(loginLoading(false));
		return { loginStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const loginCustomer = (userData) => async (dispatch) => {
	dispatch(clearLoginErrors());
	dispatch(loginLoading());
	try {
		const loginRequest = await APIService.post('/login--customer', { ...userData });
		if (loginRequest.data.status === 'Success') {
			localStorage.setItem('zipuJWTToken', loginRequest.data.data.token.plainTextToken);
			localStorage.setItem('zipuUser', JSON.stringify(loginRequest.data.data.user));
			localStorage.setItem('transcoId', loginRequest.data.data.user.transco_id);
			dispatch(loginLoading(false));
			dispatch(loginSuccess(loginRequest.data.data.user));
			return { loginStatus: true, tokenValid: true, message: 'Login successful' };
		} else {
			dispatch(loginLoading(false));
			return { loginStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(loginError(message));
		dispatch(loginLoading(false));
		return { loginStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const logUserOut =
	(history = null) =>
	async (dispatch) => {
		try {
			localStorage.clear();
			if (history) {
				history.push('/login');
				window.location.reload();
			}
			return dispatch(logOutUserSuccess());
		} catch (error) {
			return { signedOut: false, error: error.message };
		}
	};
