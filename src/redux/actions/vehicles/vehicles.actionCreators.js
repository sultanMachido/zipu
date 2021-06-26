import vehiclesTypes from '../../types/vehiclesTypes';

/** Create Trip */
export const createVehicleLoading = (loadingState = true) => ({
	type: vehiclesTypes.CREATE_VEHICLE_LOADING,
	payload: loadingState
});

export const createVehicleSuccess = (vehicle) => ({
	type: vehiclesTypes.CREATE_VEHICLE_SUCCESS,
	payload: vehicle
});

export const createVehicleErrors = (error) => ({
	type: vehiclesTypes.CREATE_VEHICLE_ERROR,
	payload: error
});

export const clearCreateVehicleErrors = () => ({
	type: vehiclesTypes.CLEAR_CREATE_VEHICLE_ERRORS
});

/** Update Vehicle */
export const updateVehicleLoading = (loadingState = true) => ({
	type: vehiclesTypes.UPDATE_VEHICLE_LOADING,
	payload: loadingState
});

export const updateVehicleSuccess = (vehicle) => ({
	type: vehiclesTypes.UPDATE_VEHICLE_SUCCESS,
	payload: vehicle
});

export const updateVehicleErrors = (error) => ({
	type: vehiclesTypes.UPDATE_VEHICLE_ERROR,
	payload: error
});

export const clearUpdateVehicleErrors = () => ({
	type: vehiclesTypes.CLEAR_UPDATE_VEHICLE_ERRORS
});

/** Fetch All Vehicles */
export const fetchAllVehiclesLoading = (loadingState = true) => ({
	type: vehiclesTypes.FETCH_ALL_VEHICLES_LOADING,
	payload: loadingState
});

export const fetchAllVehiclesSuccess = (trips) => ({
	type: vehiclesTypes.FETCH_ALL_VEHICLES_SUCCESS,
	payload: trips
});

export const fetchAllVehiclesErrors = (error) => ({
	type: vehiclesTypes.FETCH_ALL_VEHICLES_ERROR,
	payload: error
});

export const clearFetchAllVehiclesErrors = () => ({
	type: vehiclesTypes.CLEAR_FETCH_ALL_VEHICLES_ERRORS
});

/** Fetch Single Vehicle */
export const fetchSingleVehicleLoading = (loadingState = true) => ({
	type: vehiclesTypes.FETCH_SINGLE_VEHICLE_LOADING,
	payload: loadingState
});

export const fetchSingleVehicleSuccess = (vehicle) => ({
	type: vehiclesTypes.FETCH_SINGLE_VEHICLE_SUCCESS,
	payload: vehicle
});

export const fetchSingleVehicleErrors = (error) => ({
	type: vehiclesTypes.FETCH_SINGLE_VEHICLE_ERROR,
	payload: error
});

export const clearFetchSingleVehicleErrors = () => ({
	type: vehiclesTypes.CLEAR_FETCH_SINGLE_VEHICLE_ERRORS
});
