import { APIService } from '../../../config/apiConfig';
import {
	activateCustomerError,
	activateCustomerLoading,
	activateCustomerSuccess,
	addCustomerError,
	addCustomerLoading,
	addCustomerSuccess,
	clearCustomerTErrors,
	clearSingleCustomerTErrors,
	deActivateCustomerError,
	deActivateCustomerLoading,
	deActivateCustomerSuccess,
	editCustomerError,
	editCustomerLoading,
	editCustomerSuccess,
	fetchCustomerSavedTripsError,
	fetchCustomerSavedTripsLoading,
	fetchCustomerSavedTripsSuccess,
	getCustomerError,
	getCustomerLoading,
	getCustomerSuccess,
	getSingleCustomerError,
	getSingleCustomerLoading,
	getSingleCustomerSuccess
} from './customer.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

// get all customer
export const getCustomers =
	({ transco_id, pageSize, page }) =>
	async (dispatch) => {
		dispatch(clearCustomerTErrors());
		dispatch(getCustomerLoading());
		try {
			const getCustomerRequest = await APIService.get(
				`/transco-customers?transco_id=${transco_id}&pagination_number=${pageSize}&page=${page}`
			);

			if (getCustomerRequest.data.status === 'Success') {
				dispatch(getCustomerLoading());
				dispatch(getCustomerSuccess(getCustomerRequest.data));
				return {
					getCustomerStatus: true,
					message: 'Successfully fetched customer records'
				};
			} else {
				dispatch(getCustomerLoading(false));
				return {
					getCustomerStatus: false,
					message: SOMETHING_WENT_WRONG,
					data: getCustomerRequest.data.data
				};
			}
		} catch (error) {
			const message = error.response?.data?.message;
			dispatch(getCustomerError(message));
			dispatch(getCustomerLoading(false));
			return { getCustomerStatus: false, message: message || SOMETHING_WENT_WRONG };
		}
	};

// get single customer
export const getSingleCustomer = (customerId) => async (dispatch) => {
	dispatch(clearSingleCustomerTErrors());
	dispatch(getSingleCustomerLoading());
	try {
		const getSingleCustomerRequest = await APIService.get(`/transco-customer/${customerId}`);

		if (getSingleCustomerRequest.data.status === 'Success') {
			dispatch(getSingleCustomerLoading());
			dispatch(getSingleCustomerSuccess(getSingleCustomerRequest.data));
			return {
				getSingleCustomerStatus: true,
				message: 'Successfully fetched customer record'
			};
		} else {
			dispatch(getSingleCustomerLoading(false));
			return {
				getSingleCustomerStatus: false,
				message: SOMETHING_WENT_WRONG,
				data: getSingleCustomerRequest.data.data
			};
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(getSingleCustomerError(message));
		dispatch(getSingleCustomerLoading(false));
		return { getSingleCustomerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// add customer
export const addCustomer = (customerRecord) => async (dispatch) => {
	dispatch(clearCustomerTErrors());
	dispatch(addCustomerLoading());
	try {
		const addCustomerRequest = await APIService.post(`/addcustomer`, { ...customerRecord });
		if (addCustomerRequest.data.status === 'Success') {
			dispatch(addCustomerLoading());
			dispatch(addCustomerSuccess(addCustomerRequest.data));
			return {
				addCustomerStatus: true,
				message: 'Customer added successfully'
			};
		} else {
			dispatch(addCustomerLoading(false));
			return { addCustomerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(addCustomerError(message));
		dispatch(addCustomerLoading(false));
		return { addCustomerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// edit customer
export const editCustomer = (customerRecord) => async (dispatch) => {
	console.log(customerRecord);
	dispatch(clearCustomerTErrors());
	dispatch(editCustomerLoading());
	try {
		const editCustomerRequest = await APIService.post(
			`/updatecustomer/${customerRecord.customerId}`,
			{
				...customerRecord
			}
		);
		if (editCustomerRequest.data.status === 'Success') {
			dispatch(editCustomerLoading());
			dispatch(editCustomerSuccess(editCustomerRequest.data));
			return {
				editCustomerStatus: true,
				message: 'Customer edited successfully'
			};
		} else {
			dispatch(editCustomerLoading(false));
			return { editCustomerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(editCustomerError(message));
		dispatch(editCustomerLoading(false));
		return { editCustomerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// activate customer
export const activateCustomer = (data) => async (dispatch) => {
	dispatch(clearCustomerTErrors());
	dispatch(activateCustomerLoading());
	try {
		const activateCustomerRequest = await APIService.post(`/activatecustomer/${data?.customerId}`, {
			password: data?.password
		});
		if (activateCustomerRequest.data.status === 'Success') {
			dispatch(activateCustomerLoading());
			dispatch(activateCustomerSuccess(activateCustomerRequest.data));
			return {
				activateCustomerStatus: true,
				message: 'Customer activated successfully'
			};
		} else {
			dispatch(activateCustomerLoading(false));
			return { activateCustomerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(activateCustomerError(message));
		dispatch(activateCustomerLoading(false));
		return { activateCustomerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// deactivate customer
export const deActivateCustomer = (data) => async (dispatch) => {
	dispatch(clearCustomerTErrors());
	dispatch(deActivateCustomerLoading());
	try {
		const deActivateCustomerRequest = await APIService.post(
			`/deactivatecustomer/${data?.customerId}`,
			{
				password: data?.password
			}
		);
		if (deActivateCustomerRequest.data.status === 'Success') {
			dispatch(deActivateCustomerLoading());
			dispatch(deActivateCustomerSuccess(deActivateCustomerRequest.data));
			return {
				deActivateCustomerStatus: true,
				message: 'Customer deactivated successfully'
			};
		} else {
			dispatch(deActivateCustomerLoading(false));
			return { deActivateCustomerStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(deActivateCustomerError(message));
		dispatch(deActivateCustomerLoading(false));
		return { deActivateCustomerStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// get single customer saved trips
export const getCustomerSavedTrips = () => async (dispatch) => {
	dispatch(fetchCustomerSavedTripsLoading());
	try {
		const fetchCustomerSavedTripsRequest = await APIService.get(`/user-saved-trips`);

		if (fetchCustomerSavedTripsRequest.data.status === 'Success') {
			dispatch(fetchCustomerSavedTripsLoading(false));
			dispatch(
				fetchCustomerSavedTripsSuccess(fetchCustomerSavedTripsRequest?.data.data.savedtrips)
			);
			return {
				fetchCustomerSavedTripsStatus: true,
				message: 'Successfully fetched customer saved trips'
			};
		} else {
			dispatch(fetchCustomerSavedTripsLoading(false));
			return {
				fetchCustomerSavedTripsStatus: false,
				message: SOMETHING_WENT_WRONG,
				data: fetchCustomerSavedTripsRequest.data.data
			};
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(fetchCustomerSavedTripsError(message));
		dispatch(fetchCustomerSavedTripsLoading(false));
		return { fetchCustomerSavedTripsStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
