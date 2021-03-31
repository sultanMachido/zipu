/** @format */

import {
  createTripLoading, clearCreateTripErrors, createTripErrors, createTripSuccess,
  updateTripLoading, clearUpdateTripErrors, updateTripErrors, updateTripSuccess,
  fetchAllTripsLoading, clearFetchAllTripsErrors, fetchAllTripsErrors, fetchAllTripsSuccess,
  fetchSingleTripLoading, clearFetchSingleTripErrors, fetchSingleTripErrors, fetchSingleTripSuccess,
} from './trips.actionCreators';

import { APIService } from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const createTrip = (payload) => async (dispatch) => {
  dispatch(clearCreateTripErrors());
  dispatch(createTripLoading());
  try {
    const response = await APIService.post('/create-trip', { ...payload });
    if (response.data.status === 'Success') {
      const promoCode = response.data.data.promocode;
      dispatch(createTripLoading(false));
      dispatch(createTripSuccess(promoCode));
      dispatch(fetchAllTrips());
      return { createTripStatus: true, message: 'Trip Created Successfully' };
    }
    else {
      dispatch(createTripLoading(false));
      return { createTripStatus: false, message: 'hi' };
    }
  } catch (error) {
    const message = error.response?.data?.message;
    dispatch(createTripErrors(message));
    dispatch(createTripLoading(false));
    return { createTripStatus: false, message: message || SOMETHING_WENT_WRONG };
  }
};

export const updateTrip = (id, payload) => async (dispatch) => {
  dispatch(clearUpdateTripErrors());
  dispatch(updateTripLoading());
  try {
    const response = await APIService.post(`/update-promo-code${id}`, { ...payload });
    if (response.data.status === 'Success') {
      const promoCode = response.data.data.promocode;
      dispatch(updateTripLoading(false));
      dispatch(updateTripSuccess(promoCode));
      return { message: 'Trip Updated Successfully' };
    }
    else {
      dispatch(updateTripLoading(false));
      return { updateTripStatus: false, message: 'hi' };
    }
  } catch (error) {
    const message = error.response?.data?.message;
    dispatch(updateTripErrors(message));
    dispatch(updateTripLoading(false));
    return { updateTripStatus: false, message: message || SOMETHING_WENT_WRONG };
  }
};

/** Fetch All Promo Codes */

export const fetchAllTrips = (transcoId) => async (dispatch) => {
  dispatch(clearFetchAllTripsErrors());
  dispatch(fetchAllTripsLoading());
  try {
    const response = await APIService.get(`/transcotrips/${transcoId}`);
    if (response.data.status === 'Success') {
      const promoCodes = response.data.data.promocodes;
      dispatch(fetchAllTripsLoading(false));
      dispatch(fetchAllTripsSuccess(promoCodes));
      return { fetchTripsStatus: true, message: 'All Trips Fetched Successfully' };
    }
    else {
      dispatch(fetchAllTripsLoading(false));
      return { fetchTripsStatus: false, message: 'hi' };
    }
  } catch (error) {
    const message = error.response?.data?.message;
    dispatch(fetchAllTripsErrors(message));
    dispatch(fetchAllTripsLoading(false));
    return { fetchTripsStatus: false, message: message || SOMETHING_WENT_WRONG };
  }
};

/** Fetch Single Promo Code */

export const fetchSingleTrip = (id) => async (dispatch) => {
  dispatch(clearFetchSingleTripErrors());
  dispatch(fetchSingleTripLoading());
  try {
    const response = await APIService.get(`/get-promo-code${id}`);
    if (response.data.status === 'Success') {
      const promoCode = response.data.data.promocode;
      dispatch(fetchSingleTripLoading(false));
      dispatch(fetchSingleTripSuccess(promoCode));
      return { message: 'Promo Code Fetched Successfully' };
    }
    else {
      dispatch(fetchSingleTripLoading(false));
      return { fetchTripStatus: false, message: 'hi' };
    }
  } catch (error) {
    const message = error.response?.data?.message;
    dispatch(fetchSingleTripErrors(message));
    dispatch(fetchSingleTripLoading(false));
    return { fetchTripStatus: false, message: message || SOMETHING_WENT_WRONG };
  }
};

