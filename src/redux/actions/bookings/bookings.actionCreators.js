import bookingsTypes from '../../types/bookingsTypes';

/** Create Booking */
export const createBookingLoading = (loadingState = true) => ({
	type: bookingsTypes.CREATE_BOOKING_LOADING,
	payload: loadingState
});

export const createBookingSuccess = (booking) => ({
	type: bookingsTypes.CREATE_BOOKING_SUCCESS,
	payload: booking
});

export const createBookingErrors = (error) => ({
	type: bookingsTypes.CREATE_BOOKING_ERROR,
	payload: error
});

export const clearCreateBookingErrors = () => ({
	type: bookingsTypes.CLEAR_CREATE_BOOKING_ERRORS
});

/** Update Booking */
export const updateBookingLoading = (loadingState = true) => ({
	type: bookingsTypes.UPDATE_BOOKING_LOADING,
	payload: loadingState
});

export const updateBookingSuccess = (booking) => ({
	type: bookingsTypes.UPDATE_BOOKING_SUCCESS,
	payload: booking
});

export const updateBookingErrors = (error) => ({
	type: bookingsTypes.UPDATE_BOOKING_ERROR,
	payload: error
});

export const clearUpdateBookingErrors = () => ({
	type: bookingsTypes.CLEAR_UPDATE_BOOKING_ERRORS
});

/** Fetch All Bookings */
export const fetchAllBookingsLoading = (loadingState = true) => ({
	type: bookingsTypes.FETCH_ALL_BOOKINGS_LOADING,
	payload: loadingState
});

export const fetchAllBookingsSuccess = (bookings) => ({
	type: bookingsTypes.FETCH_ALL_BOOKINGS_SUCCESS,
	payload: bookings
});

export const fetchAllBookingsErrors = (error) => ({
	type: bookingsTypes.FETCH_ALL_BOOKINGS_ERROR,
	payload: error
});

export const clearFetchAllBookingsErrors = () => ({
	type: bookingsTypes.CLEAR_FETCH_ALL_BOOKINGS_ERRORS
});

/** Fetch Single Booking */
export const fetchSingleBookingLoading = (loadingState = true) => ({
	type: bookingsTypes.FETCH_SINGLE_BOOKING_LOADING,
	payload: loadingState
});

export const fetchSingleBookingSuccess = (userInfo) => ({
	type: bookingsTypes.FETCH_SINGLE_BOOKING_SUCCESS,
	payload: userInfo
});

export const fetchSingleBookingErrors = (error) => ({
	type: bookingsTypes.FETCH_SINGLE_BOOKING_ERROR,
	payload: error
});

export const clearFetchSingleBookingErrors = () => ({
	type: bookingsTypes.CLEAR_FETCH_SINGLE_BOOKING_ERRORS
});

/** Filter All Bookings */
export const filterCustomerBookings = (bookings) => ({
	type: bookingsTypes.FILTER_BOOKINGS_SUCCESS,
	payload: bookings
});
