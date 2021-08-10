/* eslint-disable import/no-anonymous-default-export */
const initialState = {
	user: null,
	business: null,
	users: [],
	error: null,
	loading: false,
	usersLoading: false,
	getUserLoading: false,
	getStoreLoading: true,
	createUserLoading: false,
	patchUserLoading: false,
	patchStoreLoading: false,
	deleteUserLoading: false,
	hasPatchedUser: false,
	hasPatchedStore: false,
	url: '',
	uploadFileLoading: false,
	hasUploadedFile: false,
	hasRequestedReset: false,
	hasResetPassword: false,
	loginError: null,
	registerError: null,
	requestPasswordResetError: false,
	hasCreatedUser: false,
	hasDeletedUser: false,
	statsLoading: true,
	itemsAnalytics: null,
	itemsAnalyticsLoading: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_PENDING':
			return { ...state, loading: action.loading };
		case 'LOGIN_SUCCESS':
			return { ...state, loading: action.loading, loginError: null };
		case 'LOGIN_FAILED':
			return { ...state, loading: action.loading, loginError: action.error };

		case 'REGISTER_PENDING':
			return { ...state, loading: action.loading };
		case 'REGISTER_SUCCESS':
			return { ...state, loading: action.loading, registerError: null };
		case 'REGISTER_FAILED':
			return {
				...state,
				loading: action.loading,
				registerError: action.error
			};

		case 'FETCH_ALL_USERS_PENDING':
			return {
				...state,
				hasCreatedUser: false,
				usersLoading: action.loading
			};
		case 'FETCH_ALL_USERS_SUCCESS':
			return {
				...state,
				hasCreatedUser: false,
				hasDeletedUser: false,
				users: action.users,
				usersLoading: action.loading,
				error: null
			};
		case 'FETCH_ALL_USERS_FAILED':
			return {
				...state,
				hasCreatedUser: false,
				usersLoading: action.loading,
				error: action.error
			};

		case 'GET_USER_PENDING':
			return { ...state, getUserLoading: action.loading };
		case 'GET_USER_SUCCESS':
			return {
				...state,
				user: action.user,
				getUserLoading: action.loading,
				error: null
			};
		case 'GET_USER_FAILED':
			return {
				...state,
				getUserLoading: action.loading,
				error: action.error
			};

		case 'CREATE_USER_PENDING':
			return { ...state, createUserLoading: action.loading };
		case 'CREATE_USER_SUCCESS':
			return {
				...state,
				hasCreatedUser: true,
				createUserLoading: action.loading,
				error: null
			};
		case 'CREATE_USER_FAILED':
			return {
				...state,
				createUserLoading: action.loading,
				error: action.error
			};

		case 'PATCH_USER_PENDING':
			return { ...state, patchUserLoading: action.loading };
		case 'PATCH_USER_SUCCESS':
			return {
				...state,
				hasPatchedUser: true,
				patchUserLoading: action.loading,
				error: null
			};
		case 'PATCH_USER_FAILED':
			return {
				...state,
				patchUserLoading: action.loading,
				error: action.error
			};

		case 'GET_STORE_PENDING':
			return { ...state, getStoreLoading: action.loading };
		case 'GET_STORE_SUCCESS':
			return {
				...state,
				store: action.store,
				getStoreLoading: action.loading,
				error: null
			};
		case 'GET_STORE_FAILED':
			return {
				...state,
				getStoreLoading: action.loading,
				error: action.error
			};

		case 'PATCH_STORE_PENDING':
			return { ...state, patchStoreLoading: action.loading };
		case 'PATCH_STORE_SUCCESS':
			return {
				...state,
				hasPatchedStore: true,
				patchStoreLoading: action.loading,
				error: null
			};
		case 'PATCH_STORE_FAILED':
			return {
				...state,
				patchStoreLoading: action.loading,
				error: action.error
			};

		case 'UPLOAD_FILE_PENDING':
			return { ...state, uploadFileLoading: action.loading };
		case 'UPLOAD_FILE_SUCCESS':
			return {
				...state,
				hasUploadedFile: true,
				url: action.url,
				uploadFileLoading: action.loading,
				error: null
			};
		case 'UPLOAD_FILE_FAILED':
			return {
				...state,
				uploadFileLoading: action.loading,
				error: action.error
			};

		case 'DELETE_USER_PENDING':
			return { ...state, deleteUserLoading: action.loading };
		case 'DELETE_USER_SUCCESS':
			return {
				...state,
				deleteUserLoading: action.loading,
				hasDeletedUser: true,
				error: null
			};
		case 'DELETE_USER_FAILED':
			return {
				...state,
				deleteUserLoading: action.loading,
				error: action.error
			};

		case 'REQUEST_PASSWORD_RESET_PENDING':
			return { ...state, hasRequestedReset: false, loading: action.loading };
		case 'REQUEST_PASSWORD_RESET_SUCCESS':
			return {
				...state,
				hasRequestedReset: true,
				loading: action.loading,
				requestPasswordResetError: null
			};
		case 'REQUEST_PASSWORD_RESET_FAILED':
			return {
				...state,
				hasRequestedReset: false,
				loading: action.loading,
				requestPasswordResetError: action.error
			};

		case 'COMPLETE_PASSWORD_RESET_PENDING':
			return { ...state, loading: action.loading };
		case 'REQUEST_PASSWORD_UPDATE_PENDING':
			return { ...state, loading: action.loading };

		case 'COMPLETE_PASSWORD_RESET_SUCCESS':
			return {
				...state,
				hasResetPassword: true,
				loading: action.loading,
				error: null
			};
		case 'COMPLETE_PASSWORD_UPDATE_SUCCESS':
			return {
				...state,
				hasResetPassword: true,
				loading: action.loading,
				error: null
			};
		case 'COMPLETE_PASSWORD_RESET_FAILED':
			return { ...state, loading: action.loading, error: action.error };
		case 'COMPLETE_PASSWORD_UPDATE_FAILED':
			return { ...state, loading: action.loading, error: action.error };

		case 'FETCH_DASHBOARD_STATS_PENDING':
			return { ...state, statsLoading: action.loading };
		case 'FETCH_DASHBOARD_STATS_SUCCESS':
			return {
				...state,
				stats: action.stats,
				statsLoading: action.loading,
				error: null
			};
		case 'FETCH_DASHBOARD_STATS_FAILED':
			return { ...state, statsLoading: action.loading, error: action.error };

		case 'FETCH_ITEMS_ANALYTICS_PENDING':
			return { ...state, itemsAnalyticsLoading: action.loading };
		case 'FETCH_ITEMS_ANALYTICS_SUCCESS':
			return {
				...state,
				itemsAnalytics: action.itemsAnalytics,
				itemsAnalyticsLoading: action.loading,
				error: null
			};
		case 'FETCH_ITEMS_ANALYTICS_FAILED':
			return {
				...state,
				itemsAnalyticsLoading: action.loading,
				error: action.error
			};

		case 'LOGOUT_USER':
			return { ...state, user: action.user };
		default:
			return state;
	}
};
