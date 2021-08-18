import tripsTypes from '../../types/tripsTypes';

/** Create Trip */
export const createTripLoading = (loadingState = true) => ({
	type: tripsTypes.CREATE_TRIP_LOADING,
	payload: loadingState
});

export const createTripSuccess = (trip) => ({
	type: tripsTypes.CREATE_TRIP_SUCCESS,
	payload: trip
});

export const createTripErrors = (error) => ({
	type: tripsTypes.CREATE_TRIP_ERROR,
	payload: error
});

export const clearCreateTripErrors = () => ({
	type: tripsTypes.CLEAR_CREATE_TRIP_ERRORS
});

/** Update Trip */
export const updateTripLoading = (loadingState = true) => ({
	type: tripsTypes.UPDATE_TRIP_LOADING,
	payload: loadingState
});

export const updateTripSuccess = (trip) => ({
	type: tripsTypes.UPDATE_TRIP_SUCCESS,
	payload: trip
});

export const updateTripErrors = (error) => ({
	type: tripsTypes.UPDATE_TRIP_ERROR,
	payload: error
});

export const clearUpdateTripErrors = () => ({
	type: tripsTypes.CLEAR_UPDATE_TRIP_ERRORS
});

/** Fetch All Trips */
export const fetchAllTripsLoading = (loadingState = true) => ({
	type: tripsTypes.FETCH_ALL_TRIPS_LOADING,
	payload: loadingState
});

export const fetchAllTripsSuccess = (trips) => ({
	type: tripsTypes.FETCH_ALL_TRIPS_SUCCESS,
	payload: trips
});

export const fetchAllTripsErrors = (error) => ({
	type: tripsTypes.FETCH_ALL_TRIPS_ERROR,
	payload: error
});

export const clearFetchAllTripsErrors = () => ({
	type: tripsTypes.CLEAR_FETCH_ALL_TRIPS_ERRORS
});

/** Fetch Single Trip */
export const fetchSingleTripLoading = (loadingState = true) => ({
	type: tripsTypes.FETCH_SINGLE_TRIP_LOADING,
	payload: loadingState
});

export const fetchSingleTripSuccess = (tripInfo) => ({
	type: tripsTypes.FETCH_SINGLE_TRIP_SUCCESS,
	payload: tripInfo
});

export const fetchSingleTripErrors = (error) => ({
	type: tripsTypes.FETCH_SINGLE_TRIP_ERROR,
	payload: error
});

export const clearFetchSingleTripErrors = () => ({
	type: tripsTypes.CLEAR_FETCH_SINGLE_TRIP_ERRORS
});

/** Save Trip */
export const saveTripLoading = (loadingState = true) => ({
	type: tripsTypes.SAVE_TRIP_LOADING,
	payload: loadingState
});

export const saveTripSuccess = () => ({
	type: tripsTypes.SAVE_TRIP_SUCCESS,
	payload: true
});

export const saveTripErrors = (error) => ({
	type: tripsTypes.SAVE_TRIP_ERROR,
	payload: error
});

export const clearSaveTripErrors = () => ({
	type: tripsTypes.CLEAR_SAVE_TRIP_ERRORS
});

/** UnSave Trip */
export const unSaveTripLoading = (loadingState = true) => ({
	type: tripsTypes.UNSAVE_TRIP_LOADING,
	payload: loadingState
});

export const unSaveTripSuccess = (trip) => ({
	type: tripsTypes.UNSAVE_TRIP_SUCCESS,
	payload: true
});

export const unSaveTripErrors = (error) => ({
	type: tripsTypes.UNSAVE_TRIP_ERROR,
	payload: error
});

export const clearUnSaveTripErrors = () => ({
	type: tripsTypes.CLEAR_UNSAVE_TRIP_ERRORS
});
