/** @format */

import {
  transportTypeLoading,
  transportTypeError,
  clearTransportTypeErrors,
  transportTypeSuccess
} from './transportType.actionCreators';

import { APIService } from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const selectTransportType = (transportType) => async (dispatch) => {
  dispatch(clearTransportTypeErrors());
  dispatch(transportTypeLoading());
  try {
    const transportTypeRequest = await APIService.post('/update-transport-type', { ...transportType });
    if (transportTypeRequest.data.status === 'Success') {
      dispatch(transportTypeLoading());
      dispatch(transportTypeSuccess(transportTypeRequest.data));
      return { transportTypeStatus: true, tokenValid: true, message: 'Successfully selected transport type' };
    } else {
      dispatch(transportTypeLoading(false));
      return { transportTypeStatus: false, message: SOMETHING_WENT_WRONG };
    }
  } catch (error) {
    const message = error.response?.data?.message;
    dispatch(transportTypeError(message));
    dispatch(transportTypeLoading(false));
    return { transportTypeStatus: false, message: message || SOMETHING_WENT_WRONG };
  }
};

