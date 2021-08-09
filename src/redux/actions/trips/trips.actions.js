/* eslint-disable prettier/prettier */
/** @format */

import toast from 'react-hot-toast';

import { APIService } from '../../../config/apiConfig';
import {
	clearCreateTripErrors,
	clearFetchAllTripsErrors,
	clearFetchSingleTripErrors,
	clearUpdateTripErrors,
	createTripErrors,
	createTripLoading,
	createTripSuccess,
	fetchAllTripsErrors,
	fetchAllTripsLoading,
	fetchAllTripsSuccess,
	fetchSingleTripErrors,
	fetchSingleTripLoading,
	fetchSingleTripSuccess,
	updateTripErrors,
	updateTripLoading,
	updateTripSuccess
} from './trips.actionCreators';

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
		} else {
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
		} else {
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
		} else {
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
		} else {
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

export const searchTrips = (payload) => async (dispatch) => {
	console.log('Callung search trips');
	dispatch(clearFetchAllTripsErrors());
	dispatch(fetchAllTripsLoading());
	try {
		// const response = await APIService.get(
		// 	`/search-trip?origin_state=${payload.origin}&destination_state=${payload.destination}&trip_date=${payload.date}`
		// );]
		const response = await APIService.get(
			`/search-trip?origin_state=${payload.origin}&destination_state=${payload.destination}&trip_date=${payload.date}`
		);
		if (response.data.status === 'Success') {
			console.log('Callung search successs');

			const promoCodes = response.data.data.promocodes;
			dispatch(fetchAllTripsLoading(false));
			dispatch(fetchAllTripsSuccess());
			return { fetchTripsStatus: true, message: 'All Trips Fetched Successfully' };
		} else {
			console.log('Callung search error');

			dispatch(fetchAllTripsErrors('Error occured fetching Trips'));
			dispatch(fetchAllTripsLoading(false));
			return { fetchTripsStatus: false, message: 'hi' };
		}
	} catch (error) {
		console.log('Callung search failed');
		const message = error.response?.data?.message;
		toast.error(message || 'Error Occured');
		dispatch(fetchAllTripsErrors(message));
		dispatch(fetchAllTripsLoading(false));
		return { fetchTripsStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const searchGroupedTrips = (payload) => async (dispatch) => {
	dispatch(clearFetchAllTripsErrors());
	dispatch(fetchAllTripsLoading());
	try {
		const response = await APIService.get(
			`/search-trips-grouped?origin_state=${payload.origin}&destination_state=${payload.destination}&round_trip=${payload.round_trip}`
		);
		if (response.data.status === 'Success') {
			const responseObj = response.data.data;
			const tripsObj = responseObj[Object.keys(responseObj)[0]][1];
			dispatch(fetchAllTripsLoading(false));
			dispatch(fetchAllTripsSuccess(tripsObj));
			return { fetchTripsStatus: true, message: 'All Trips Fetched Successfully' };
		} else {
			dispatch(fetchAllTripsErrors('Error occured fetching Trips'));
			dispatch(fetchAllTripsLoading(false));
			return { fetchTripsStatus: false, message: 'hi' };
		}
	} catch (error) {
		console.log('Callung search failed');
		const message = error.response?.data?.message;
		toast.error(message || 'Error Occured');
		dispatch(fetchAllTripsErrors(message));
		dispatch(fetchAllTripsLoading(false));
		return { fetchTripsStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
