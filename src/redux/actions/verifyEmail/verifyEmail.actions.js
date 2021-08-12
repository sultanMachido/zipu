/* eslint-disable no-unused-vars */
/** @format */
import toast from 'react-hot-toast';

import { APIService } from '../../../config/apiConfig';
import {
	clearVerifyEmailErrors,
	setErrFlag,
	verifyEmailError,
	verifyEmailLoading,
	verifyEmailSuccess
} from './verifyEmail.actionsCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const verifyUserEmail = (otp) => async (dispatch) => {
	dispatch(clearVerifyEmailErrors());
	dispatch(verifyEmailLoading());
	try {
		const verifyEmailRequest = await APIService.post('/verify-transco-email', { otp_code: otp });
		if (verifyEmailRequest.data.status === 'Success') {
			dispatch(verifyEmailLoading());
			dispatch(verifyEmailSuccess(verifyEmailRequest.data));
			return {
				verifyEmailStatus: true,
				tokenValid: true,
				message: 'Email Verification Successful'
			};
		} else {
			dispatch(verifyEmailLoading(false));
			return { verifyEmailStatus: false, message: verifyEmailRequest.message };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(verifyEmailError(message));
		dispatch(verifyEmailLoading(false));
		return { verifyEmailStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const verifyCustomerEmail = (otp) => async (dispatch) => {
	dispatch(clearVerifyEmailErrors());
	dispatch(verifyEmailLoading());

	try {
		const verifyEmailRequest = await APIService.post('/verify-customer-email', { otp_code: otp });

		if (verifyEmailRequest.data.status === 'Success') {
			toast.success('User Verified');
			dispatch(verifyEmailLoading());
			dispatch(verifyEmailSuccess(verifyEmailRequest.data));
			return {
				verifyEmailStatus: true,
				tokenValid: true,
				message: 'Email Verification Successful'
			};
		} else {
			dispatch(verifyEmailLoading(false));
			return { verifyEmailStatus: false, message: verifyEmailRequest.message };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		toast.error(message || 'Error Occured');
		dispatch(verifyEmailError(message));
		dispatch(verifyEmailLoading(false));
		return { verifyEmailStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const sendCustomerEmail = (email) => async (dispatch) => {
	await dispatch(clearVerifyEmailErrors());
	await dispatch(verifyEmailLoading());

	try {
		const verifyEmailRequest = await APIService.post('/send-verify-email-code', { email: email });
		if (verifyEmailRequest.data.status === 'Success') {
			toast.success('Verification code sent again');
			dispatch(verifyEmailLoading(false));
		} else {
			await dispatch(verifyEmailLoading(false));
			dispatch(verifyEmailError('Error occured sending email again'));
			return { verifyEmailStatus: false, message: verifyEmailRequest.message };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		toast.error(message || 'Error Occured');
		await dispatch(verifyEmailLoading(false));
		dispatch(verifyEmailError(message));
		// return { verifyEmailStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
