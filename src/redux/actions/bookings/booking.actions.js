/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/** @format */

import toast from 'react-hot-toast';

import { APIService } from '../../../config/apiConfig';
import {
	clearCreateBookingErrors,
	clearFetchAllBookingsErrors,
	clearFetchSingleBookingErrors,
	clearUpdateBookingErrors,
	createBookingErrors,
	createBookingLoading,
	createBookingSuccess,
	fetchAllBookingsErrors,
	fetchAllBookingsLoading,
	fetchAllBookingsSuccess,
	fetchSingleBookingErrors,
	fetchSingleBookingLoading,
	fetchSingleBookingSuccess,
	filterCustomerBookings,
	updateBookingErrors,
	updateBookingLoading,
	updateBookingSuccess
} from './bookings.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const createBooking = (payload) => async (dispatch) => {
	dispatch(clearCreateBookingErrors());
	dispatch(createBookingLoading());
	try {
		const response = await APIService.post('/create-booking', { ...payload });
		if (response.data.status === 'Success') {
			const promoCode = response.data.data.promocode;
			dispatch(createBookingLoading(false));
			dispatch(createBookingSuccess(promoCode));
			dispatch(fetchCustomerBookingHistory());
			return { createBookingStatus: true, message: 'Booking Created Successfully' };
		} else {
			dispatch(createBookingLoading(false));
			return { createBookingStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(createBookingErrors(message));
		dispatch(createBookingLoading(false));
		return { createBookingStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const updateBooking = (id, payload) => async (dispatch) => {
	dispatch(clearUpdateBookingErrors());
	dispatch(updateBookingLoading());
	try {
		const response = await APIService.post(`/update-promo-code${id}`, { ...payload });
		if (response.data.status === 'Success') {
			const promoCode = response.data.data.promocode;
			dispatch(updateBookingLoading(false));
			dispatch(updateBookingSuccess(promoCode));
			return { message: 'Booking Updated Successfully' };
		} else {
			dispatch(updateBookingLoading(false));
			return { updateBookingStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(updateBookingErrors(message));
		dispatch(updateBookingLoading(false));
		return { updateBookingStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

/** Fetch All Promo Codes */

export const fetchCustomerBookingHistory = () => async (dispatch) => {
	dispatch(clearFetchAllBookingsErrors());
	dispatch(fetchAllBookingsLoading());
	try {
		const response = await APIService.get(`/user-bookings`);
		if (response.data.status === 'Success') {
			const userBookings = response.data?.data?.bookings;
			dispatch(fetchAllBookingsLoading(false));
			dispatch(fetchAllBookingsSuccess(userBookings));
			return { fetchBookingsStatus: true, message: 'All Bookings Fetched Successfully' };
		} else {
			dispatch(fetchAllBookingsLoading(false));
			return { fetchBookingsStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(fetchAllBookingsErrors(message));
		dispatch(fetchAllBookingsLoading(false));
		return { fetchBookingsStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

/** Fetch Single Promo Code */

export const fetchSingleBooking = (id) => async (dispatch) => {
	dispatch(clearFetchSingleBookingErrors());
	dispatch(fetchSingleBookingLoading());
	try {
		const response = await APIService.get(`/get-promo-code${id}`);
		if (response.data.status === 'Success') {
			const promoCode = response.data.data.promocode;
			dispatch(fetchSingleBookingLoading(false));
			dispatch(fetchSingleBookingSuccess(promoCode));
			return { message: 'Promo Code Fetched Successfully' };
		} else {
			dispatch(fetchSingleBookingLoading(false));
			return { fetchBookingStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(fetchSingleBookingErrors(message));
		dispatch(fetchSingleBookingLoading(false));
		return { fetchBookingStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const searchBookings = (payload) => async (dispatch) => {
	console.log('Callung search bookings');
	dispatch(clearFetchAllBookingsErrors());
	dispatch(fetchAllBookingsLoading());
	try {
		// const response = await APIService.get(
		// 	`/search-booking?origin_state=${payload.origin}&destination_state=${payload.destination}&booking_date=${payload.date}`
		// );]
		const response = await APIService.get(
			`/search-booking?origin_state=${payload.origin}&destination_state=${payload.destination}&booking_date=${payload.date}`
		);
		if (response.data.status === 'Success') {
			console.log('Callung search successs');

			const promoCodes = response.data.data.promocodes;
			dispatch(fetchAllBookingsLoading(false));
			dispatch(fetchAllBookingsSuccess());
			return { fetchBookingsStatus: true, message: 'All Bookings Fetched Successfully' };
		} else {
			console.log('Callung search error');

			dispatch(fetchAllBookingsErrors('Error occured fetching Bookings'));
			dispatch(fetchAllBookingsLoading(false));
			return { fetchBookingsStatus: false, message: 'hi' };
		}
	} catch (error) {
		console.log('Callung search failed');
		const message = error.response?.data?.message;
		toast.error(message || 'Error Occured');
		dispatch(fetchAllBookingsErrors(message));
		dispatch(fetchAllBookingsLoading(false));
		return { fetchBookingsStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const searchGroupedBookings = (payload) => async (dispatch) => {
	dispatch(clearFetchAllBookingsErrors());
	dispatch(fetchAllBookingsLoading());
	try {
		const response = await APIService.get(
			`/search-bookings-grouped?origin_state=${payload.origin}&destination_state=${payload.destination}&round_booking=${payload.round_booking}`
		);
		if (response.data.status === 'Success') {
			const responseObj = response.data.data;
			const bookingsObj = responseObj[Object.keys(responseObj)[0]][1];
			dispatch(fetchAllBookingsLoading(false));
			dispatch(fetchAllBookingsSuccess(bookingsObj));
			return { fetchBookingsStatus: true, message: 'All Bookings Fetched Successfully' };
		} else {
			dispatch(fetchAllBookingsErrors('Error occured fetching Bookings'));
			dispatch(fetchAllBookingsLoading(false));
			return { fetchBookingsStatus: false, message: 'hi' };
		}
	} catch (error) {
		console.log('Callung search failed');
		const message = error.response?.data?.message;
		toast.error(message || 'Error Occured');
		dispatch(fetchAllBookingsErrors(message));
		dispatch(fetchAllBookingsLoading(false));
		return { fetchBookingsStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const filterCustomerBookingHistory = (bookings) => async (dispatch) => {
	dispatch(filterCustomerBookings(bookings));
};
