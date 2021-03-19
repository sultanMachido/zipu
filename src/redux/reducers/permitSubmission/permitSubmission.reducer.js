import permitSubmission from '../../types/permitSubmissionTypes';

export const permitSubmissionInitialState = {
  isAuthenticated: false,
  transcoInfo: {},
  permitSubmissionLoading: false,
  error: '',
};

export const permitSubmissionReducer = (state = permitSubmissionInitialState, action) => {
  switch (action.type) {
    case permitSubmission.PERMIT_SUBMISSION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case permitSubmission.CLEAR_PERMIT_SUBMISSION_ERRORS:
      return {
        ...state,
        error: '',
      };
    case permitSubmission.PERMIT_SUBMISSION_LOADING:
      return {
        ...state,
        permitSubmissionLoading: action.payload,
      };
    case permitSubmission.PERMIT_SUBMISSION_SUCCESS:
      return {
        ...state,
        permitSubmissionLoading: false,
        isAuthenticated: true,
        transcoInfo: action.payload,
      };
    default:
      return state;
  }
};

