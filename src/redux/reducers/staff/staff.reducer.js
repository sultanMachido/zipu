import staffTypes from '../../types/staffTypes';

export const staffInitialState = {
	getStaffLoading: false,
	getStaffSuccess: [],
	getStafferror: '',
	getStaffCount: 0,

	getSingleStaffLoading: false,
	getSingleStaffSuccess: {},
	getSingleStafferror: '',

	addStaffLoading: false,
	addStaffSuccess: {},
	addStaffError: '',

	editStaffLoading: false,
	editStaffSuccess: {},
	editStaffError: '',

	activateStaffError: '',
	activateStaffSuccess: {},
	activateStaffLoading: false,

	deActivateStaffError: '',
	deActivateStaffSuccess: {},
	deActivateStaffLoading: false
};

export const staffReducer = (state = staffInitialState, action) => {
	switch (action.type) {
		// GET ALL STAFF
		case staffTypes.GET_STAFF_ERROR:
			return {
				...state,
				getStafferror: action.payload
			};
		case staffTypes.GET_STAFF_SUCCESS:
			return {
				...state,
				getStaffLoading: false,
				getStaffSuccess: action?.payload?.data?.staffs.data,
				getStaffCount: action?.payload?.data?.staffs?.total
			};
		case staffTypes.GET_STAFF_LOADING:
			return {
				...state,
				getStaffLoading: action.payload
			};

		// GET STAFF
		case staffTypes.GET_SINGLE_STAFF_ERROR:
			return {
				...state,
				getSingleStafferror: action.payload
			};
		case staffTypes.GET_SINGLE_STAFF_SUCCESS:
			return {
				...state,
				getSingleStaffLoading: false,
				getSingleStaffSuccess: action?.payload?.data?.staff
			};
		case staffTypes.GET_SINGLE_STAFF_LOADING:
			return {
				...state,
				getSingleStaffLoading: action.payload
			};

		// case staffTypes.GET_SINGLE_STAFF_LOADING:
		// 	return {
		// 		...state,
		// 		getSingleStaffLoading: action.payload
		// 	};

		case staffTypes.CLEAR_SINGLE_STAFF_ERRORS:
			return {
				...state,
				getSingleStafferror: ''
			};

		// ADD STAFF
		case staffTypes.ADD_STAFF_ERROR:
			return {
				...state,
				addStaffError: action.payload
			};
		case staffTypes.ADD_STAFF_SUCCESS:
			return {
				...state,
				addStaffLoading: false,
				addStaffSuccess: action.payload
			};
		case staffTypes.ADD_STAFF_LOADING:
			return {
				...state,
				addStaffLoading: action.payload
			};

		// ACTIVATE STAFF
		case staffTypes.ACTIVATE_STAFF_ERROR:
			return {
				...state,
				activateStaffError: action.payload
			};
		case staffTypes.ACTIVATE_STAFF_SUCCESS:
			return {
				...state,
				activateStaffLoading: false,
				activateStaffSuccess: action.payload
			};
		case staffTypes.ACTIVATE_STAFF_LOADING:
			return {
				...state,
				activateStaffLoading: action.payload
			};

		// DEACTIVATE STAFF
		case staffTypes.DEACTIVATE_STAFF_ERROR:
			return {
				...state,
				deActivateStaffError: action.payload
			};
		case staffTypes.DEACTIVATE_STAFF_SUCCESS:
			return {
				...state,
				deActivateStaffLoading: false,
				deActivateStaffSuccess: action.payload
			};
		case staffTypes.DEACTIVATE_STAFF_LOADING:
			return {
				...state,
				deActivateStaffLoading: action.payload
			};

		default:
			return state;
	}
};
