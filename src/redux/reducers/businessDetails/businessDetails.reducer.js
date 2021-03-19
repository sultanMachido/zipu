import businessDetails from '../../types/businessDetailsTypes';

export const businessDetailsInitialState = {
  isAuthenticated: false,
  transcoInfo: {},
  businessDetailsLoading: false,
  error: '',
};

export const businessDetailsReducer = (state = businessDetailsInitialState, action) => {
  switch (action.type) {
    case businessDetails.BUSINESS_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case businessDetails.CLEAR_BUSINESS_DETAILS_ERRORS:
      return {
        ...state,
        error: '',
      };
    case businessDetails.BUSINESS_DETAILS_LOADING:
      return {
        ...state,
        businessDetailsLoading: action.payload,
      };
    case businessDetails.BUSINESS_DETAILS_SUCCESS:
      return {
        ...state,
        businessDetailsLoading: false,
        isAuthenticated: true,
        transcoInfo: action.payload,
      };
    default:
      return state;
  }
};

