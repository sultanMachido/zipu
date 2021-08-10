/* eslint-disable no-duplicate-case */
/** @format */

import bookingsTypes from '../../types/bookingsTypes';

export const initialState = {
	bookings: [],
	filteredBookings: [],
	booking: null,
	createBookingLoading: false,
	updateBookingLoading: false,
	fetchAllBookingsLoading: false,
	fetchSingleBookingLoading: false,
	createBookingError: '',
	updateBookingError: '',
	fetchAllBookingsError: '',
	fetchSingleBookingError: ''
};

export const bookingsReducer = (state = initialState, action) => {
	switch (action.type) {
		/** Create Booking */
		case bookingsTypes.CREATE_BOOKINGS_ERROR:
			return {
				...state,
				createBookingError: action.payload
			};
		case bookingsTypes.CLEAR_CREATE_BOOKINGS_ERRORS:
			return {
				...state,
				createBookingError: ''
			};
		case bookingsTypes.CREATE_BOOKINGS_LOADING:
			return {
				...state,
				createBookingLoading: action.payload
			};
		case bookingsTypes.CREATE_BOOKINGS_SUCCESS:
			return {
				...state,
				createBookingLoading: false
			};

		/** Update Booking */
		// eslint-disable-next-line no-duplicate-case
		case bookingsTypes.UPDATE_BOOKINGS_ERROR:
			return {
				...state,
				updateBookingError: action.payload
			};
		case bookingsTypes.CLEAR_UPDATE_BOOKINGS_ERRORS:
			return {
				...state,
				updateBookingError: ''
			};
		case bookingsTypes.UPDATE_BOOKINGS_LOADING:
			return {
				...state,
				updateBookingLoading: action.payload
			};
		case bookingsTypes.UPDATE_BOOKINGS_SUCCESS:
			return {
				...state,
				updateBookingLoading: false
			};

		/** Fetch All Bookings */
		case bookingsTypes.FETCH_ALL_BOOKINGS_ERROR:
			return {
				...state,
				bookings: null,
				filteredBookings: null,
				fetchAllBookingsError: action.payload
			};
		case bookingsTypes.CLEAR_FETCH_ALL_BOOKINGS_ERRORS:
			return {
				...state,
				fetchAllBookingsError: ''
			};
		case bookingsTypes.FETCH_ALL_BOOKINGS_LOADING:
			return {
				...state,
				fetchAllBookingsLoading: action.payload
			};
		case bookingsTypes.FETCH_ALL_BOOKINGS_SUCCESS:
			return {
				...state,
				bookings: action.payload,
				filteredBookings: action.payload,
				fetchAllBookingsLoading: false
			};

		/** Filter All Bookings */
		case bookingsTypes.FILTER_BOOKINGS_SUCCESS:
			return {
				...state,
				filteredBookings: action.payload
			};

		/** Fetch Single Booking */
		case bookingsTypes.FETCH_SINGLE_BOOKING_ERROR:
			return {
				...state,
				booking: null,
				fetchBookingError: action.payload
			};
		case bookingsTypes.CLEAR_FETCH_SINGLE_BOOKING_ERRORS:
			return {
				...state,
				fetchBookingError: ''
			};
		case bookingsTypes.FETCH_SINGLE_BOOKING_LOADING:
			return {
				...state,
				fetchBookingLoading: action.payload
			};
		case bookingsTypes.FETCH_SINGLE_BOOKING_SUCCESS:
			return {
				...state,
				booking: action.payload,
				fetchBookingLoading: false
			};

		default:
			return state;
	}
};
