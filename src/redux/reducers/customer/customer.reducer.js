import customerTypes from '../../types/customerTypes';

export const customerInitialState = {
	getCustomerLoading: false,
	getCustomerSuccess: [],
	getCustomererror: '',
	getCustomerCount: 0,

	getSingleCustomerLoading: false,
	getSingleCustomerSuccess: {},
	getSingleCustomererror: '',

	addCustomerLoading: false,
	addCustomerSuccess: {},
	addCustomerError: '',

	editCustomerLoading: false,
	editCustomerSuccess: {},
	editCustomerError: '',

	activateCustomerError: '',
	activateCustomerSuccess: {},
	activateCustomerLoading: false,

	deActivateCustomerError: '',
	deActivateCustomerSuccess: {},
	deActivateCustomerLoading: false,

	fetchCustomerSavedTripsError: '',
	fetchCustomerSavedTripsSuccess: [],
	fetchCustomerSavedTripsLoading: true
};

export const customerReducer = (state = customerInitialState, action) => {
	switch (action.type) {
		// GET ALL CUSTOMER
		case customerTypes.GET_CUSTOMER_ERROR:
			return {
				...state,
				getCustomererror: action.payload
			};
		case customerTypes.GET_CUSTOMER_SUCCESS:
			return {
				...state,
				getCustomerLoading: false,
				getCustomerSuccess: action?.payload?.data?.customers.data,
				getCustomerCount: action?.payload?.data?.customers?.total
			};
		case customerTypes.GET_CUSTOMER_LOADING:
			return {
				...state,
				getCustomerLoading: action.payload
			};

		// GET CUSTOMER
		case customerTypes.GET_SINGLE_CUSTOMER_ERROR:
			return {
				...state,
				getSingleCustomererror: action.payload
			};
		case customerTypes.GET_SINGLE_CUSTOMER_SUCCESS:
			return {
				...state,
				getSingleCustomerLoading: false,
				getSingleCustomerSuccess: action?.payload?.data?.customer
			};
		case customerTypes.GET_SINGLE_CUSTOMER_LOADING:
			return {
				...state,
				getSingleCustomerLoading: action.payload
			};

		// case customerTypes.GET_SINGLE_CUSTOMER_LOADING:
		// 	return {
		// 		...state,
		// 		getSingleCustomerLoading: action.payload
		// 	};

		case customerTypes.CLEAR_SINGLE_CUSTOMER_ERRORS:
			return {
				...state,
				getSingleCustomererror: ''
			};

		// ADD CUSTOMER
		case customerTypes.ADD_CUSTOMER_ERROR:
			return {
				...state,
				addCustomerError: action.payload
			};
		case customerTypes.ADD_CUSTOMER_SUCCESS:
			return {
				...state,
				addCustomerLoading: false,
				addCustomerSuccess: action.payload
			};
		case customerTypes.ADD_CUSTOMER_LOADING:
			return {
				...state,
				addCustomerLoading: action.payload
			};

		// ACTIVATE CUSTOMER
		case customerTypes.ACTIVATE_CUSTOMER_ERROR:
			return {
				...state,
				activateCustomerError: action.payload
			};
		case customerTypes.ACTIVATE_CUSTOMER_SUCCESS:
			return {
				...state,
				activateCustomerLoading: false,
				activateCustomerSuccess: action.payload
			};
		case customerTypes.ACTIVATE_CUSTOMER_LOADING:
			return {
				...state,
				activateCustomerLoading: action.payload
			};

		// DEACTIVATE CUSTOMER
		case customerTypes.DEACTIVATE_CUSTOMER_ERROR:
			return {
				...state,
				deActivateCustomerError: action.payload
			};
		case customerTypes.DEACTIVATE_CUSTOMER_SUCCESS:
			return {
				...state,
				deActivateCustomerLoading: false,
				deActivateCustomerSuccess: action.payload
			};
		case customerTypes.DEACTIVATE_CUSTOMER_LOADING:
			return {
				...state,
				deActivateCustomerLoading: action.payload
			};

		// FETCH CUSTOMER SAVED TRIPS
		case customerTypes.FETCH_CUSTOMER_SAVED_TRIPS_ERROR:
			return {
				...state,
				fetchCustomerSavedTripsError: action.payload
			};
		case customerTypes.FETCH_CUSTOMER_SAVED_TRIPS_SUCCESS:
			return {
				...state,
				fetchCustomerSavedTripsLoading: false,
				fetchCustomerSavedTripsSuccess: action.payload
			};
		case customerTypes.FETCH_CUSTOMER_SAVED_TRIPS_LOADING:
			return {
				...state,
				fetchCustomerSavedTripsLoading: action.payload
			};

		default:
			return state;
	}
};
