/** @format */

import { APIService } from '../../../config/apiConfig';
import {
	clearCreatePromoCodeErrors,
	clearFetchAllPromoCodesErrors,
	clearFetchSinglePromoCodeErrors,
	clearUpdatePromoCodeErrors,
	createPromoCodeErrors,
	createPromoCodeLoading,
	createPromoCodeSuccess,
	fetchAllPromoCodesErrors,
	fetchAllPromoCodesLoading,
	fetchAllPromoCodesSuccess,
	fetchSinglePromoCodeErrors,
	fetchSinglePromoCodeLoading,
	fetchSinglePromoCodeSuccess,
	updatePromoCodeErrors,
	updatePromoCodeLoading,
	updatePromoCodeSuccess
} from './promoCodes.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const createPromoCode = (payload) => async (dispatch) => {
	dispatch(clearCreatePromoCodeErrors());
	dispatch(createPromoCodeLoading());
	try {
		const response = await APIService.post('/create-promo-code', { ...payload });
		if (response.data.status === 'Success') {
			const promoCode = response.data.data.promocode;
			dispatch(createPromoCodeLoading(false));
			dispatch(createPromoCodeSuccess(promoCode));
			dispatch(fetchAllPromoCodes());
			return { createPromoCodeStatus: true, message: 'Promo Code Created Successfully' };
		} else {
			dispatch(createPromoCodeLoading(false));
			return { createPromoCodeStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(createPromoCodeErrors(message));
		dispatch(createPromoCodeLoading(false));
		return { createPromoCodeStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const updatePromoCode = (id, payload) => async (dispatch) => {
	dispatch(clearUpdatePromoCodeErrors());
	dispatch(updatePromoCodeLoading());
	try {
		const response = await APIService.post(`/update-promo-code${id}`, { ...payload });
		if (response.data.status === 'Success') {
			const promoCode = response.data.data.promocode;
			dispatch(updatePromoCodeLoading(false));
			dispatch(updatePromoCodeSuccess(promoCode));
			return { message: 'Promo Code Updated Successfully' };
		} else {
			dispatch(updatePromoCodeLoading(false));
			return { updatePromoCodeStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(updatePromoCodeErrors(message));
		dispatch(updatePromoCodeLoading(false));
		return { updatePromoCodeStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

/** Fetch All Promo Codes */

export const fetchAllPromoCodes = () => async (dispatch) => {
	dispatch(clearFetchAllPromoCodesErrors());
	dispatch(fetchAllPromoCodesLoading());
	try {
		const response = await APIService.get(`/get-loggedin-user-promocodes`);
		if (response.data.status === 'Success') {
			const promoCodes = response.data.data.promocodes;
			dispatch(fetchAllPromoCodesLoading(false));
			dispatch(fetchAllPromoCodesSuccess(promoCodes));
			return { fetchPromoCodesStatus: true, message: 'All Promo Code Fetched Successfully' };
		} else {
			dispatch(fetchAllPromoCodesLoading(false));
			return { fetchPromoCodesStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(fetchAllPromoCodesErrors(message));
		dispatch(fetchAllPromoCodesLoading(false));
		return { fetchPromoCodesStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

/** Fetch Single Promo Code */

export const fetchSinglePromoCode = (id) => async (dispatch) => {
	dispatch(clearFetchSinglePromoCodeErrors());
	dispatch(fetchSinglePromoCodeLoading());
	try {
		const response = await APIService.get(`/get-promo-code${id}`);
		if (response.data.status === 'Success') {
			const promoCode = response.data.data.promocode;
			dispatch(fetchSinglePromoCodeLoading(false));
			dispatch(fetchSinglePromoCodeSuccess(promoCode));
			return { message: 'Promo Code Fetched Successfully' };
		} else {
			dispatch(fetchSinglePromoCodeLoading(false));
			return { fetchPromoCodeStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(fetchSinglePromoCodeErrors(message));
		dispatch(fetchSinglePromoCodeLoading(false));
		return { fetchPromoCodeStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
