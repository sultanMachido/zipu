import { APIService } from '../../../config/apiConfig';
import {
	activateStaffError,
	activateStaffLoading,
	activateStaffSuccess,
	addStaffError,
	addStaffLoading,
	addStaffSuccess,
	clearSingleStaffTErrors,
	clearStaffTErrors,
	deActivateStaffError,
	deActivateStaffLoading,
	deActivateStaffSuccess,
	editStaffError,
	editStaffLoading,
	editStaffSuccess,
	getSingleStaffError,
	getSingleStaffLoading,
	getSingleStaffSuccess,
	getStaffError,
	getStaffLoading,
	getStaffSuccess
} from './staff.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

// get all staff
export const getStaffs =
	({ transco_id, pageSize, page }) =>
	async (dispatch) => {
		dispatch(clearStaffTErrors());
		dispatch(getStaffLoading());
		try {
			const getStaffRequest = await APIService.get(
				`/transco-staffs?transco_id=${transco_id}&pagination_number=${pageSize}&page=${page}`
			);

			if (getStaffRequest.data.status === 'Success') {
				dispatch(getStaffLoading());
				dispatch(getStaffSuccess(getStaffRequest.data));
				return {
					getStaffStatus: true,
					message: 'Successfully fetched staff records'
				};
			} else {
				dispatch(getStaffLoading(false));
				return {
					getStaffStatus: false,
					message: SOMETHING_WENT_WRONG,
					data: getStaffRequest.data.data
				};
			}
		} catch (error) {
			const message = error.response?.data?.message;
			dispatch(getStaffError(message));
			dispatch(getStaffLoading(false));
			return { getStaffStatus: false, message: message || SOMETHING_WENT_WRONG };
		}
	};

// get single staff
export const getSingleStaff = (staffId) => async (dispatch) => {
	dispatch(clearSingleStaffTErrors());
	dispatch(getSingleStaffLoading());
	try {
		const getSingleStaffRequest = await APIService.get(`/transco-staff/${staffId}`);

		if (getSingleStaffRequest.data.status === 'Success') {
			dispatch(getSingleStaffLoading());
			dispatch(getSingleStaffSuccess(getSingleStaffRequest.data));
			return {
				getSingleStaffStatus: true,
				message: 'Successfully fetched staff record'
			};
		} else {
			dispatch(getSingleStaffLoading(false));
			return {
				getSingleStaffStatus: false,
				message: SOMETHING_WENT_WRONG,
				data: getSingleStaffRequest.data.data
			};
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(getSingleStaffError(message));
		dispatch(getSingleStaffLoading(false));
		return { getSingleStaffStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};

// add staff
export const addStaff = (staffRecord) => async (dispatch) => {
	dispatch(clearStaffTErrors());
	dispatch(addStaffLoading());
	try {
		const addStaffRequest = await APIService.post(`/addstaff`, { ...staffRecord });
		if (addStaffRequest.data.status === 'Success') {
			dispatch(addStaffLoading());
			dispatch(addStaffSuccess(addStaffRequest.data));
			return {
				addStaffStatus: true,
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
export const editStaff = (staffRecord) => async (dispatch) => {
	console.log(staffRecord);
	dispatch(clearStaffTErrors());
	dispatch(editStaffLoading());
	try {
		const editStaffRequest = await APIService.post(`/updatestaff/${staffRecord.staffId}`, {
			...staffRecord
		});
		if (editStaffRequest.data.status === 'Success') {
			dispatch(editStaffLoading());
			dispatch(editStaffSuccess(editStaffRequest.data));
			return {
				editStaffStatus: true,
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
export const activateStaff = (data) => async (dispatch) => {
	dispatch(clearStaffTErrors());
	dispatch(activateStaffLoading());
	try {
		const activateStaffRequest = await APIService.post(`/activatestaff/${data?.staffId}`, {
			password: data?.password
		});
		if (activateStaffRequest.data.status === 'Success') {
			dispatch(activateStaffLoading());
			dispatch(activateStaffSuccess(activateStaffRequest.data));
			return {
				activateStaffStatus: true,
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
export const deActivateStaff = (data) => async (dispatch) => {
	dispatch(clearStaffTErrors());
	dispatch(deActivateStaffLoading());
	try {
		const deActivateStaffRequest = await APIService.post(`/deactivatestaff/${data?.staffId}`, {
			password: data?.password
		});
		if (deActivateStaffRequest.data.status === 'Success') {
			dispatch(deActivateStaffLoading());
			dispatch(deActivateStaffSuccess(deActivateStaffRequest.data));
			return {
				deActivateStaffStatus: true,
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
