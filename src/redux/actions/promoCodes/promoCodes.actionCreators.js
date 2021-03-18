import promoCodesTypes from '../../types/promoCodesTypes';

/** Create Promo Code */

export const createPromoCodeLoading = (loadingState = true) => ({
  type: promoCodesTypes.CREATE_PROMO_CODES_LOADING,
  payload: loadingState,
});

export const createPromoCodeSuccess = (userInfo) => ({
  type: promoCodesTypes.CREATE_PROMO_CODES_SUCCESS,
  payload: userInfo,
});

export const createPromoCodeErrors = (error) => ({
  type: promoCodesTypes.CREATE_PROMO_CODES_ERROR,
  payload: error,
});

export const clearCreatePromoCodeErrors = () => ({
  type: promoCodesTypes.CLEAR_CREATE_PROMO_CODES_ERRORS,
});

/** Update Promo Code */

export const updatePromoCodeLoading = (loadingState = true) => ({
  type: promoCodesTypes.UPDATE_PROMO_CODES_LOADING,
  payload: loadingState,
});

export const updatePromoCodeSuccess = (userInfo) => ({
  type: promoCodesTypes.UPDATE_PROMO_CODES_SUCCESS,
  payload: userInfo,
});

export const updatePromoCodeErrors = (error) => ({
  type: promoCodesTypes.UPDATE_PROMO_CODES_ERROR,
  payload: error,
});

export const clearUpdatePromoCodeErrors = () => ({
  type: promoCodesTypes.CLEAR_UPDATE_PROMO_CODES_ERRORS,
});

/** Fetch All Promo Codes */

export const fetchAllPromoCodesLoading = (loadingState = true) => ({
  type: promoCodesTypes.FETCH_ALL_PROMO_CODES_LOADING,
  payload: loadingState,
});

export const fetchAllPromoCodesSuccess = (promoCodes) => ({
  type: promoCodesTypes.FETCH_ALL_PROMO_CODES_SUCCESS,
  payload: promoCodes,
});

export const fetchAllPromoCodesErrors = (error) => ({
  type: promoCodesTypes.FETCH_ALL_PROMO_CODES_ERROR,
  payload: error,
});

export const clearFetchAllPromoCodesErrors = () => ({
  type: promoCodesTypes.CLEAR_FETCH_ALL_PROMO_CODES_ERRORS,
});

/** Fetch Single Promo Codes */

export const fetchSinglePromoCodeLoading = (loadingState = true) => ({
  type: promoCodesTypes.FETCH_SINGLE_PROMO_CODES_LOADING,
  payload: loadingState,
});

export const fetchSinglePromoCodeSuccess = (userInfo) => ({
  type: promoCodesTypes.FETCH_SINGLE_PROMO_CODES_SUCCESS,
  payload: userInfo,
});

export const fetchSinglePromoCodeErrors = (error) => ({
  type: promoCodesTypes.FETCH_SINGLE_PROMO_CODES_ERROR,
  payload: error,
});

export const clearFetchSinglePromoCodeErrors = () => ({
  type: promoCodesTypes.CLEAR_FETCH_SINGLE_PROMO_CODES_ERRORS,
});

