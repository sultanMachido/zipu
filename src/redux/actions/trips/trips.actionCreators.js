import tripsTypes from '../../types/tripsTypes';

/** Create Trip */
export const createTripLoading = (loadingState = true) => ({
  type: tripsTypes.CREATE_TRIP_LOADING,
  payload: loadingState,
});

export const createTripSuccess = (trip) => ({
  type: tripsTypes.CREATE_TRIP_SUCCESS,
  payload: trip,
});

export const createTripErrors = (error) => ({
  type: tripsTypes.CREATE_TRIP_ERROR,
  payload: error,
});

export const clearCreateTripErrors = () => ({
  type: tripsTypes.CLEAR_CREATE_TRIP_ERRORS,
});

/** Update Trip */
export const updateTripLoading = (loadingState = true) => ({
  type: tripsTypes.UPDATE_TRIP_LOADING,
  payload: loadingState,
});

export const updateTripSuccess = (trip) => ({
  type: tripsTypes.UPDATE_TRIP_SUCCESS,
  payload: trip,
});

export const updateTripErrors = (error) => ({
  type: tripsTypes.UPDATE_TRIP_ERROR,
  payload: error,
});

export const clearUpdateTripErrors = () => ({
  type: tripsTypes.CLEAR_UPDATE_TRIP_ERRORS,
});

/** Fetch All Trips */
export const fetchAllTripsLoading = (loadingState = true) => ({
  type: tripsTypes.FETCH_ALL_TRIPS_LOADING,
  payload: loadingState,
});

export const fetchAllTripsSuccess = (trips) => ({
  type: tripsTypes.FETCH_ALL_TRIPS_SUCCESS,
  payload: trips,
});

export const fetchAllTripsErrors = (error) => ({
  type: tripsTypes.FETCH_ALL_TRIPS_ERROR,
  payload: error,
});

export const clearFetchAllTripsErrors = () => ({
  type: tripsTypes.CLEAR_FETCH_ALL_TRIPS_ERRORS,
});

/** Fetch Single Trip */
export const fetchSingleTripLoading = (loadingState = true) => ({
  type: tripsTypes.FETCH_SINGLE_TRIP_LOADING,
  payload: loadingState,
});

export const fetchSingleTripSuccess = (userInfo) => ({
  type: tripsTypes.FETCH_SINGLE_TRIP_SUCCESS,
  payload: userInfo,
});

export const fetchSingleTripErrors = (error) => ({
  type: tripsTypes.FETCH_SINGLE_TRIP_ERROR,
  payload: error,
});

export const clearFetchSingleTripErrors = () => ({
  type: tripsTypes.CLEAR_FETCH_SINGLE_TRIP_ERRORS,
});