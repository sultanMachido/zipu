/** @format */

import permitSubmissionTypes from '../../types/permitSubmissionTypes';

export const permitSubmissionTypesLoading = (loadingState = true) => ({
	type: permitSubmissionTypes.PERMIT_SUBMISSION_LOADING,
	payload: loadingState
});

export const permitSubmissionTypesError = (error) => ({
	type: permitSubmissionTypes.PERMIT_SUBMISSION_ERROR,
	payload: error
});

export const clearPermitSubmissionTypesErrors = () => ({
	type: permitSubmissionTypes.CLEAR_PERMIT_SUBMISSION_ERRORS
});

export const permitSubmissionTypesSuccess = (data) => ({
	type: permitSubmissionTypes.PERMIT_SUBMISSION_SUCCESS,
	payload: data
});
