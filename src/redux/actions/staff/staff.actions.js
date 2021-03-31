import {
	clearStaffTErrors,
	getStaffLoading,
	getStaffSuccess,
	getStaffError,
	addStaffLoading,
	addStaffSuccess,
	addStaffError,
	editStaffLoading,
	editStaffSuccess,
	editStaffError,
	activateStaffError,
	activateStaffSuccess,
	activateStaffLoading,
	deActivateStaffError,
	deActivateStaffSuccess,
	deActivateStaffLoading
} from './staff.actionCreators';

import { APIService } from '../../../config/apiConfig';

const SOMETHING_WENT_WRONG = 'Something went wrong';

// get all staff
export const getStaff = ({ transco_id, pageSize, page }) => async dispatch => {
	dispatch(clearStaffTErrors());
	dispatch(getStaffLoading());
	try {
		const getStaffRequest = await APIService.get(`/transco-staffs?transco_id=${transco_id}&pagination_number=${pageSize}&page=${page}`);

		if (getStaffRequest.data.status === 'Success') {
			dispatch(getStaffLoading());
			dispatch(getStaffSuccess(getStaffRequest.data));
			return {
				getStaffStatus: true,
				tokenValid: true,
				message: 'Successfully fetched staff records'
			};
		} else {
			dispatch(getStaffLoading(false));
			return { getStaffStatus: false, message: SOMETHING_WENT_WRONG, data: getStaffRequest.data.data };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(getStaffError(message));
		dispatch(getStaffLoading(false));
		return { getStaffStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// add staff
export const addStaff = (staffRecord) => async dispatch => {
	dispatch(clearStaffTErrors());
	dispatch(addStaffLoading());
	try {
		const addStaffRequest = await APIService.post(`/addstaff`, { ...staffRecord });
		if (addStaffRequest.data.status === 'Success') {
			dispatch(addStaffLoading());
			dispatch(addStaffSuccess(addStaffRequest.data));
			return {
				addStaffStatus: true,
				tokenValid: true,
				message: 'Staff added successfully'
			};
		} else {
			dispatch(addStaffLoading(false));
			return { addStaffStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(addStaffError(message));
		dispatch(addStaffLoading(false));
		return { addStaffStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// edit staff
export const editStaff = (staffRecord) => async dispatch => {
	console.log(staffRecord)
	dispatch(clearStaffTErrors());
	dispatch(editStaffLoading());
	try {
		const editStaffRequest = await APIService.post(`/updatestaff/${staffRecord.staffId}`, { ...staffRecord });
		if (editStaffRequest.data.status === 'Success') {
			dispatch(editStaffLoading());
			dispatch(editStaffSuccess(editStaffRequest.data));
			return {
				editStaffStatus: true,
				tokenValid: true,
				message: 'Staff edited successfully'
			};
		} else {
			dispatch(editStaffLoading(false));
			return { editStaffStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(editStaffError(message));
		dispatch(editStaffLoading(false));
		return { editStaffStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// activate staff
export const activateStaff = staffId => async dispatch => {
	dispatch(clearStaffTErrors());
	dispatch(activateStaffLoading());
	try {
		const activateStaffRequest = await APIService.post(`/activatestaff/${staffId}`);
		if (activateStaffRequest.data.status === 'Success') {
			dispatch(activateStaffLoading());
			dispatch(activateStaffSuccess(activateStaffRequest.data));
			return {
				activateStaffStatus: true,
				tokenValid: true,
				message: 'Staff activated successfully'
			};
		} else {
			dispatch(activateStaffLoading(false));
			return { activateStaffStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(activateStaffError(message));
		dispatch(activateStaffLoading(false));
		return { activateStaffStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// deactivate staff
export const deActivateStaff = staffId => async dispatch => {
	dispatch(clearStaffTErrors());
	dispatch(deActivateStaffLoading());
	try {
		const deActivateStaffRequest = await APIService.post(`/activatestaff/${staffId}`);
		if (deActivateStaffRequest.data.status === 'Success') {
			dispatch(deActivateStaffLoading());
			dispatch(deActivateStaffSuccess(deActivateStaffRequest.data));
			return {
				deActivateStaffStatus: true,
				tokenValid: true,
				message: 'Staff deactivated successfully'
			};
		} else {
			dispatch(deActivateStaffLoading(false));
			return { deActivateStaffStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(deActivateStaffError(message));
		dispatch(deActivateStaffLoading(false));
		return { deActivateStaffStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
