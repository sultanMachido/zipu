/** @format */

import { message } from 'antd';
import toast from 'react-hot-toast';

import { APIService } from '../../../config/apiConfig';
import {
	clearRegisterErrors,
	registerError,
	registerLoading,
	registerSuccess
} from './register.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const registerUser = (transacoData) => async (dispatch) => {
	dispatch(clearRegisterErrors());
	dispatch(registerLoading());
	try {
		const registerRequest = await APIService.post('/register-transco', { ...transacoData });
		if (registerRequest.data.status === 'Success') {
			localStorage.setItem('zipuJWTToken', registerRequest.data.data.token.plainTextToken);
			localStorage.setItem('zipuUser', JSON.stringify(registerRequest.data.data.user));
			localStorage.setItem('transcoId', registerRequest.data.data.user.transco_id);
			dispatch(registerLoading());
			dispatch(registerSuccess(registerRequest.data));
			return { registerStatus: true, tokenValid: true, message: 'Registration successful' };
		} else {
			dispatch(registerLoading(false));
			return { registerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(registerError(message));
		dispatch(registerLoading(false));
		return { registerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const registerCustomer = (customerData) => async (dispatch) => {
	dispatch(clearRegisterErrors());
	dispatch(registerLoading());
	try {
		const registerRequest = await APIService.post('/register-customer', { ...customerData });

		if (registerRequest.data.status === 'Success') {
			toast.success('Registration successful,check your email for verification');
			localStorage.setItem('zipuJWTToken', registerRequest.data.data.token.plainTextToken);
			localStorage.setItem('zipuUser', JSON.stringify(registerRequest.data.data.user));
			dispatch(registerLoading());
			dispatch(registerSuccess(registerRequest.data));
			return { registerStatus: true, tokenValid: true, message: 'Registration successful' };
		} else {
			toast.success('Registration successful,check your email for verification');
			dispatch(registerLoading(false));
			toast.error('Error occured');
			return { registerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(registerError(message));
		dispatch(registerLoading(false));
		return { registerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const requestPasswordReset = (email) => async (dispatch) => {
	dispatch(clearRegisterErrors());
	dispatch(registerLoading());
	try {
		const passwordRequest = await APIService.post('/password/email', { email: email });
		if (passwordRequest.data.status === 'Success') {
			toast.success('Registration successful,check your email for verification');
			dispatch(registerLoading(false));
			return { registerStatus: true, tokenValid: true, message: 'Registration successful' };
		} else {
			return { registerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		toast.error(message || 'Error occured');
		return { registerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const completePasswordReset = (payload) => async (dispatch) => {
	dispatch(clearRegisterErrors());
	dispatch(registerLoading());
	try {
		const completeRequest = await APIService.post('/reset-forgot-password', { ...payload });
		if (completeRequest.data.status === 'Success') {
			toast.success('Password reset succesful');
			return { registerStatus: true, tokenValid: true, message: 'Registration successful' };
		} else {
			toast.error('Password reset failed');
			return { registerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		toast.error(message || 'Password reset not succesful');
		return { registerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
