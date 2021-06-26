/** @format */

import vehiclesTypes from '../../types/vehiclesTypes';

export const initialState = {
	vehicles: [],
	vehicle: null,
	createVehicleLoading: false,
	updateVehicleLoading: false,
	fetchAllVehiclesLoading: false,
	fetchSingleVehicleLoading: false,
	createVehicleError: '',
	updateVehicleError: '',
	fetchAllVehiclesError: '',
	fetchSingleVehicleError: ''
};

export const vehiclesReducer = (state = initialState, action) => {
	switch (action.type) {
		/** Create Vehicle */
		case vehiclesTypes.CREATE_VEHICLE_ERROR:
			return {
				...state,
				createVehicleError: action.payload
			};
		case vehiclesTypes.CLEAR_CREATE_VEHICLE_ERRORS:
			return {
				...state,
				createVehicleError: ''
			};
		case vehiclesTypes.CREATE_VEHICLE_LOADING:
			return {
				...state,
				createVehicleLoading: action.payload
			};
		case vehiclesTypes.CREATE_VEHICLE_SUCCESS:
			return {
				...state,
				createVehicleLoading: false
			};

		/** Update Vehicle */
		case vehiclesTypes.UPDATE_VEHICLE_ERROR:
			return {
				...state,
				updateVehicleError: action.payload
			};
		case vehiclesTypes.CLEAR_UPDATE_VEHICLE_ERRORS:
			return {
				...state,
				updateVehicleError: ''
			};
		case vehiclesTypes.UPDATE_VEHICLE_LOADING:
			return {
				...state,
				updateVehicleLoading: action.payload
			};
		case vehiclesTypes.UPDATE_VEHICLE_SUCCESS:
			return {
				...state,
				updateVehicleLoading: false
			};

		/** Fetch All Vehicles */
		case vehiclesTypes.FETCH_ALL_VEHICLES_ERROR:
			return {
				...state,
				vehicles: null,
				fetchAllVehiclesError: action.payload
			};
		case vehiclesTypes.CLEAR_FETCH_ALL_VEHICLES_ERRORS:
			return {
				...state,
				fetchAllVehiclesError: ''
			};
		case vehiclesTypes.FETCH_ALL_VEHICLES_LOADING:
			return {
				...state,
				fetchAllVehiclesLoading: action.payload
			};
		case vehiclesTypes.FETCH_ALL_VEHICLES_SUCCESS:
			return {
				...state,
				vehicles: action.payload,
				fetchAllVehiclesLoading: false
			};

		/** Fetch Single Vehicle */
		case vehiclesTypes.FETCH_SINGLE_VEHICLE_ERROR:
			return {
				...state,
				vehicle: null,
				fetchVehicleError: action.payload
			};
		case vehiclesTypes.CLEAR_FETCH_SINGLE_VEHICLE_ERRORS:
			return {
				...state,
				fetchVehicleError: ''
			};
		case vehiclesTypes.FETCH_SINGLE_VEHICLE_LOADING:
			return {
				...state,
				fetchVehicleLoading: action.payload
			};
		case vehiclesTypes.FETCH_SINGLE_VEHICLE_SUCCESS:
			return {
				...state,
				vehicle: action.payload,
				fetchVehicleLoading: false
			};

		default:
			return state;
	}
};
