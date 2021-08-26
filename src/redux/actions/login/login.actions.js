import { message } from 'antd';
import toast from 'react-hot-toast';
import { GiConsoleController } from 'react-icons/gi';

import { APIService } from '../../../config/apiConfig';
import {
	clearLoginErrors,
	getUserLoading,
	getUserSuccess,
	loginError,
	loginLoading,
	loginSuccess,
	logOutUserSuccess,
	tokenSuccess,
	updateImageLoading,
	updatePasswordLoading,
	updateUserLoading
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
		const loginRequest = await APIService.post('/login-customer', { ...userData });
		if (loginRequest.data.status === 'Success') {
			localStorage.setItem('zipuJWTToken', loginRequest.data.data.token.plainTextToken);
			localStorage.setItem('zipuUser', JSON.stringify(loginRequest.data.data.user));
			dispatch(loginLoading(false));
			dispatch(loginSuccess(loginRequest.data.data.user));
			dispatch(tokenSuccess(loginRequest.data.data.token.plainTextToken));
			toast.success('Login Succesfull');
			return { loginStatus: true, tokenValid: true, message: 'Login successful' };
		} else {
			dispatch(loginLoading(false));
			return { loginStatus: false, message: 'hi' };
		}
	} catch (error) {
		toast.error('Login Failed');
		const message = JSON.stringify(error.response?.data?.message);
		dispatch(loginError(message));
		dispatch(loginLoading(false));
		return { loginStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const getAuthenticatedCustomer = () => async (dispatch) => {
	dispatch(clearLoginErrors());
	dispatch(getUserLoading());
	try {
		const loginRequest = await APIService.get('/get-user');
		if (loginRequest.data.status === 'Success') {
			localStorage.setItem('zipuUser', JSON.stringify(loginRequest.data.data.user));
			// console.log(loginRequest.data.data.user);
			dispatch(getUserLoading(false));
			dispatch(getUserSuccess(loginRequest.data.data.user));
			toast.success('Login Succesfull');
			return { loginStatus: true, tokenValid: true, message: 'User retrieved' };
		} else {
			dispatch(getUserLoading(false));
			return { loginStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = JSON.stringify(error.response?.data?.message);
		dispatch(loginError(message));
		dispatch(getUserLoading(false));
		return { loginStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const updateAuthenticatedCustomer = (customerData) => async (dispatch) => {
	dispatch(clearLoginErrors());
	dispatch(updateUserLoading());
	try {
		const updateRequest = await APIService.post('/update-profile', { ...customerData });
		if (updateRequest.data.status === 'Success') {
			message.success('User updated suceesfully');
			localStorage.setItem('zipuUser', JSON.stringify(updateRequest.data.data.user));
			dispatch(updateUserLoading(false));
			dispatch(loginSuccess(updateRequest.data.data.user));
			return { loginStatus: true, tokenValid: true, message: 'User retrieved' };
		} else {
			dispatch(updateUserLoading(false));
			return { loginStatus: false, message: 'hi' };
		}
	} catch (error) {
		const errMsg = JSON.stringify(error.response?.data?.message);
		dispatch(loginError(errMsg));
		dispatch(updateUserLoading(false));
		message.error('Error occured updating user');
		return { loginStatus: false, message: errMsg || SOMETHING_WENT_WRONG };
	}
};

export const updateAuthenticatedCustomerPassword = (customerData) => async (dispatch) => {
	dispatch(clearLoginErrors());
	dispatch(updatePasswordLoading());
	try {
		const updateRequest = await APIService.post('/update-password', { ...customerData });
		if (updateRequest.data.status === 'Success') {
			message.success('User updated suceesfully');
			dispatch(updatePasswordLoading(false));
			localStorage.clear();
		} else {
			dispatch(updatePasswordLoading(false));
			return { loginStatus: false, message: 'hi' };
		}
	} catch (error) {
		const errMsg = JSON.stringify(error.response?.data?.message);
		dispatch(loginError(errMsg));
		dispatch(updatePasswordLoading(false));
		message.error('Error occured updating user');
		return { loginStatus: false, message: errMsg || SOMETHING_WENT_WRONG };
	}
};

export const updateAuthenticatedCustomerImage = (payload) => async (dispatch) => {
	dispatch(clearLoginErrors());
	dispatch(updateImageLoading());
	try {
		const updateRequest = await APIService.post(`/update-user-image`, payload, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
		if (updateRequest.data.status === 'Success') {
			message.success('User updated suceesfully');
			localStorage.setItem('zipuUser', JSON.stringify(updateRequest.data.data.user));
			dispatch(updateImageLoading(false));
			dispatch(loginSuccess(updateRequest.data.data.user));
			return { loginStatus: true, tokenValid: true, message: 'User retrieved' };
		} else {
			dispatch(updateUserLoading(false));
			return { loginStatus: false, message: 'hi' };
		}
	} catch (error) {
		const errMsg = JSON.stringify(error.response?.data?.message);
		dispatch(loginError(errMsg));
		dispatch(updateImageLoading(false));
		message.error('Error occured updating user');
		return { loginStatus: false, message: errMsg || SOMETHING_WENT_WRONG };
	}
};

export const logUserOut = () => {
	console.log('log user');
	localStorage.clear();
	location.reload();
};
// (history = null) =>
