import transportTypes from '../../types/transportTypes';

export const transportTypesInitialState = {
  isAuthenticated: false,
  transcoInfo: {},
  transportTypeLoading: false,
  error: '',
};

export const transportReducer = (state = transportTypesInitialState, action) => {
  switch (action.type) {
    case transportTypes.TRANSPORT_TYPE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case transportTypes.CLEAR_TRANSPORT_TYPE_ERRORS:
      return {
        ...state,
        error: '',
      };
    case transportTypes.TRANSPORT_TYPE_LOADING:
      return {
        ...state,
        transportTypeLoading: action.payload,
      };
    case transportTypes.TRANSPORT_TYPE_SUCCESS:
      return {
        ...state,
        transportTypeLoading: false,
        isAuthenticated: true,
        transcoInfo: action.payload,
      };
    default:
      return state;
  }
};

