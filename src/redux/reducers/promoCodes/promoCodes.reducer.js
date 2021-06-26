/** @format */

import promoCodesTypes from '../../types/promoCodesTypes';

export const initialState = {
	promoCodes: [],
	promoCode: null,
	createPromoCodeLoading: false,
	updatePromoCodeLoading: false,
	fetchAllPromoCodesLoading: false,
	fetchSinglePromoCodeLoading: false,
	createPromoCodeError: '',
	updatePromoCodeError: '',
	fetchAllPromoCodesError: '',
	fetchSinglePromoCodeError: ''
};

export const promoCodesReducer = (state = initialState, action) => {
	switch (action.type) {
		/** Create Promo Code */
		case promoCodesTypes.CREATE_PROMO_CODES_ERROR:
			return {
				...state,
				createPromoCodeError: action.payload
			};
		case promoCodesTypes.CLEAR_CREATE_PROMO_CODES_ERRORS:
			return {
				...state,
				createPromoCodeError: ''
			};
		case promoCodesTypes.CREATE_PROMO_CODES_LOADING:
			return {
				...state,
				createPromoCodeLoading: action.payload
			};
		case promoCodesTypes.CREATE_PROMO_CODES_SUCCESS:
			return {
				...state,
				createPromoCodeLoading: false
			};

		/** Update Promo Code */
		case promoCodesTypes.UPDATE_PROMO_CODES_ERROR:
			return {
				...state,
				updatePromoCodeError: action.payload
			};
		case promoCodesTypes.CLEAR_UPDATE_PROMO_CODES_ERRORS:
			return {
				...state,
				updatePromoCodeError: ''
			};
		case promoCodesTypes.UPDATE_PROMO_CODES_LOADING:
			return {
				...state,
				updatePromoCodeLoading: action.payload
			};
		case promoCodesTypes.UPDATE_PROMO_CODES_SUCCESS:
			return {
				...state,
				updatePromoCodeLoading: false
			};

		/** Fetch All Promo Codes */
		case promoCodesTypes.FETCH_ALL_PROMO_CODES_ERROR:
			return {
				...state,
				promoCodes: null,
				fetchAllPromoCodesError: action.payload
			};
		case promoCodesTypes.CLEAR_FETCH_ALL_PROMO_CODES_ERRORS:
			return {
				...state,
				fetchAllPromoCodesError: ''
			};
		case promoCodesTypes.FETCH_ALL_PROMO_CODES_LOADING:
			return {
				...state,
				fetchAllPromoCodesLoading: action.payload
			};
		case promoCodesTypes.FETCH_ALL_PROMO_CODES_SUCCESS:
			console.log('action..', action);
			return {
				...state,
				promoCodes: action.payload,
				fetchAllPromoCodesLoading: false
			};

		/** Fetch Single Promo Code */
		case promoCodesTypes.FETCH_SINGLE_PROMO_CODES_ERROR:
			return {
				...state,
				promoCode: null,
				fetchSinglePromoCodeError: action.payload
			};
		case promoCodesTypes.CLEAR_FETCH_SINGLE_PROMO_CODES_ERRORS:
			return {
				...state,
				fetchSinglePromoCodeError: ''
			};
		case promoCodesTypes.FETCH_SINGLE_PROMO_CODES_LOADING:
			return {
				...state,
				fetchSinglePromoCodeLoading: action.payload
			};
		case promoCodesTypes.FETCH_SINGLE_PROMO_CODES_SUCCESS:
			return {
				...state,
				promoCode: action.payload,
				fetchSinglePromoCodeLoading: false
			};

		default:
			return state;
	}
};
