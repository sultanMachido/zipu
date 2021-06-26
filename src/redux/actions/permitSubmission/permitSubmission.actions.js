/** @format */

import { APIService } from '../../../config/apiConfig';
import {
	clearPermitSubmissionTypesErrors,
	permitSubmissionTypesError,
	permitSubmissionTypesLoading,
	permitSubmissionTypesSuccess
} from './permitSubmission.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const submitPermission = (permitSubmission) => async (dispatch) => {
	dispatch(clearPermitSubmissionTypesErrors());
	dispatch(permitSubmissionTypesLoading());
	try {
		const permitSubmissionRequest = await APIService.post('/cac-permit-update', {
			...permitSubmission
		});
		if (permitSubmissionRequest.data.status === 'Success') {
			dispatch(permitSubmissionTypesLoading());
			dispatch(permitSubmissionTypesSuccess(permitSubmissionRequest.data));
			return {
				permitSubmissionStatus: true,
				tokenValid: true,
				message: 'Successfully submitted permission data'
			};
		} else {
			dispatch(permitSubmissionTypesLoading(false));
			return { permitSubmissionStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(permitSubmissionTypesError(message));
		dispatch(permitSubmissionTypesLoading(false));
		return { permitSubmissionStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
