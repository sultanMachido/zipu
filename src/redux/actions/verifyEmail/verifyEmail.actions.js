/** @format */

import {
  verifyEmailLoading,
  verifyEmailError,
  clearVerifyEmailErrors,
  verifyEmailSuccess
} from './verifyEmail.actionsCreators';

import { APIService } from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const verifyUserEmail = (otp) => async (dispatch) => {
  dispatch(clearVerifyEmailErrors());
  dispatch(verifyEmailLoading());
  try {
    const verifyEmailRequest = await APIService.post('/verify-transco-email', { otp_code: otp });
    if (verifyEmailRequest.data.status === 'Success') {
      dispatch(verifyEmailLoading());
      dispatch(verifyEmailSuccess(verifyEmailRequest.data));
      return { verifyEmailStatus: true, tokenValid: true, message: 'Email Verification Successful' };
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

