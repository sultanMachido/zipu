/** @format */

import { APIService } from '../../../config/apiConfig';
import {
	clearCreateVehicleErrors,
	clearFetchAllVehiclesErrors,
	clearFetchSingleVehicleErrors,
	clearUpdateVehicleErrors,
	createVehicleErrors,
	createVehicleLoading,
	createVehicleSuccess,
	fetchAllVehiclesErrors,
	fetchAllVehiclesLoading,
	fetchAllVehiclesSuccess,
	fetchSingleVehicleErrors,
	fetchSingleVehicleLoading,
	fetchSingleVehicleSuccess,
	updateVehicleErrors,
	updateVehicleLoading,
	updateVehicleSuccess
} from './vehicles.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const createVehicle = (payload) => async (dispatch) => {
	dispatch(clearCreateVehicleErrors());
	dispatch(createVehicleLoading());
	try {
		const response = await APIService.post('/vehicles/add', { ...payload });
		if (response.data.status === 'Success') {
			const vehicle = response.data.data.vehicle;
			dispatch(createVehicleLoading(false));
			dispatch(createVehicleSuccess(vehicle));
			return { createVehicleStatus: true, message: 'Vehicle Created Successfully' };
		} else {
			dispatch(createVehicleLoading(false));
			return { createVehicleStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(createVehicleErrors(message));
		dispatch(createVehicleLoading(false));
		return { createVehicleStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

export const updateVehicle = (id, payload) => async (dispatch) => {
	dispatch(clearUpdateVehicleErrors());
	dispatch(updateVehicleLoading());
	try {
		const response = await APIService.put(`/vehicles/${id}`, { ...payload });
		if (response.data.status === 'Success') {
			const vehicle = response.data.data.vehicle;
			dispatch(updateVehicleLoading(false));
			dispatch(updateVehicleSuccess(vehicle));
			return { updateVehicleStatus: true, message: 'Vehicle Updated Successfully' };
		} else {
			dispatch(updateVehicleLoading(false));
			return { updateVehicleStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(updateVehicleErrors(message));
		dispatch(updateVehicleLoading(false));
		return { updateVehicleStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

/** Fetch All Promo Codes */

export const fetchAllVehicles = (transcoId) => async (dispatch) => {
	dispatch(clearFetchAllVehiclesErrors());
	dispatch(fetchAllVehiclesLoading());
	try {
		const response = await APIService.get(`/vehicles/transco/${transcoId}`);
		if (response.data.status === 'Success') {
			const vehicles = response.data.data.vehicles;
			dispatch(fetchAllVehiclesLoading(false));
			dispatch(fetchAllVehiclesSuccess(vehicles));
			return { fetchVehiclesStatus: true, message: 'All Vehicles Fetched Successfully' };
		} else {
			dispatch(fetchAllVehiclesLoading(false));
			return { fetchVehiclesStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(fetchAllVehiclesErrors(message));
		dispatch(fetchAllVehiclesLoading(false));
		return { fetchVehiclesStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

/** Fetch Single Promo Code */

export const fetchSingleVehicle = (id) => async (dispatch) => {
	dispatch(clearFetchSingleVehicleErrors());
	dispatch(fetchSingleVehicleLoading());
	try {
		const response = await APIService.get(`/vehicles/${id}`);
		if (response.data.status === 'Success') {
			const vehicle = response.data.data.vehicle;
			dispatch(fetchSingleVehicleLoading(false));
			dispatch(fetchSingleVehicleSuccess(vehicle));
			return { message: 'Vehicle Fetched Successfully' };
		} else {
			dispatch(fetchSingleVehicleLoading(false));
			return { fetchVehicleStatus: false, message: 'hi' };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(fetchSingleVehicleErrors(message));
		dispatch(fetchSingleVehicleLoading(false));
		return { fetchVehicleStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
