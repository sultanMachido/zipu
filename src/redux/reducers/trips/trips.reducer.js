/** @format */

import tripsTypes from '../../types/tripsTypes';

export const initialState = {
  trips: [],
  trip: null,
  createTripLoading: false,
  updateTripLoading: false,
  fetchAllTripsLoading: false,
  fetchSingleTripLoading: false,
  createTripError: '',
  updateTripError: '',
  fetchAllTripsError: '',
  fetchSingleTripError: ''
};

export const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    /** Create Trip */
    case tripsTypes.CREATE_TRIPS_ERROR:
      return {
        ...state,
        createTripError: action.payload,
      };
    case tripsTypes.CLEAR_CREATE_TRIPS_ERRORS:
      return {
        ...state,
        createTripError: '',
      };
    case tripsTypes.CREATE_TRIPS_LOADING:
      return {
        ...state,
        createTripLoading: action.payload,
      };
    case tripsTypes.CREATE_TRIPS_SUCCESS:
      return {
        ...state,
        createTripLoading: false
      };

    /** Update Trip */
    case tripsTypes.CREATE_TRIPS_ERROR:
      return {
        ...state,
        updateTripError: action.payload,
      };
    case tripsTypes.CLEAR_CREATE_TRIPS_ERRORS:
      return {
        ...state,
        updateTripError: '',
      };
    case tripsTypes.CREATE_TRIPS_LOADING:
      return {
        ...state,
        updateTripLoading: action.payload,
      };
    case tripsTypes.CREATE_TRIPS_SUCCESS:
      return {
        ...state,
        updateTripLoading: false
      };

    /** Fetch All Trips */
    case tripsTypes.FETCH_ALL_TRIPS_ERROR:
      return {
        ...state,
        trips: null,
        fetchAllTripsError: action.payload,
      };
    case tripsTypes.CLEAR_FETCH_ALL_TRIPS_ERRORS:
      return {
        ...state,
        fetchAllTripsError: '',
      };
    case tripsTypes.FETCH_ALL_TRIPS_LOADING:
      return {
        ...state,
        fetchAllTripsLoading: action.payload,
      };
    case tripsTypes.FETCH_ALL_TRIPS_SUCCESS:
      return {
        ...state,
        trips: action.payload,
        fetchAllTripsLoading: false
      };

    /** Fetch Single Trip */
    case tripsTypes.FETCH_SINGLE_TRIP_ERROR:
      return {
        ...state,
        trip: null,
        fetchTripError: action.payload,
      };
    case tripsTypes.CLEAR_FETCH_SINGLE_TRIP_ERRORS:
      return {
        ...state,
        fetchTripError: '',
      };
    case tripsTypes.FETCH_SINGLE_TRIP_LOADING:
      return {
        ...state,
        fetchTripLoading: action.payload,
      };
    case tripsTypes.FETCH_SINGLE_TRIP_SUCCESS:
      return {
        ...state,
        trip: action.payload,
        fetchTripLoading: false
      };

    default:
      return state;
  }
};

