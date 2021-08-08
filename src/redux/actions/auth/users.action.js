import client from '../../utils/Api';
import moment from 'moment';
import ResolveErrorMessage from '../../utils/ResolveErrorMessage';
import { message } from 'antd';
import Swal from 'sweetalert2';

export const login = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'LOGIN_PENDING',
			loading: true,
			error: null
		});
		return client
			.post(`/auth/login`, payload)
			.then((response) => {
				const accessToken = response.data.jwt;
				const profile = response.data.user;
				window.localStorage.setItem('accessToken', accessToken);
				window.localStorage.setItem('_profile', JSON.stringify(profile));
				dispatch({
					type: 'LOGIN_SUCCESS',
					loading: false
				});
				return response;
			})
			.then((response) => {
				const isNewUser = response.data.isNew;
				if (isNewUser) {
					window.location.href = '/onboarding/complete';
				} else {
					window.location.href = '/dashboard';
				}
			})
			.catch((error) => {
				dispatch({
					type: 'LOGIN_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const register = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'REGISTER_PENDING',
			loading: true,
			error: null
		});
		return client
			.post(`/auth/register`, payload)
			.then((response) => {
				const accessToken = response.data.jwt;
				const profile = response.data.user;
				window.localStorage.setItem('accessToken', accessToken);
				window.localStorage.setItem('_profile', JSON.stringify(profile));
				dispatch({
					type: 'REGISTER_SUCCESS',
					loading: false
				});
				return response;
			})
			.then((response) => {
				const isNewUser = response.data.isNew;
				if (isNewUser) {
					window.location.href = '/onboarding/complete';
				} else {
					window.location.href = '/dashboard';
				}
			})
			.catch((error) => {
				const errorMsg = ResolveErrorMessage(error);
				dispatch({
					type: 'REGISTER_FAILED',
					loading: false,
					error: errorMsg
				});
			});
	};
};

export const refreshToken = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'REFRESH_TOKEN_PENDING',
			loading: true,
			error: null
		});
		return client
			.post(`/auth/refresh-token`, payload)
			.then((response) => {
				// const accessToken = response.data.jwt;
				// const profile = response.data.user;
				// window.localStorage.setItem('accessToken', accessToken);
				// window.localStorage.setItem('_profile', JSON.stringify(profile));
				dispatch({
					type: 'REFRESH_TOKEN_SUCCESS',
					loading: false
				});
				return response;
			})
			.catch((error) => {
				dispatch({
					type: 'REFRESH_TOKEN_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const requestPasswordReset = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'REQUEST_PASSWORD_RESET_PENDING',
			loading: true,
			error: null
		});
		return client
			.get(`/auth/password-reset?email=${payload.email}`)
			.then((response) => {
				dispatch({
					type: 'REQUEST_PASSWORD_RESET_SUCCESS',
					loading: false
				});
				message.success('Password reset request is successful, please check your mail');
				return response;
			})
			.catch((error) => {
				dispatch({
					type: 'REQUEST_PASSWORD_RESET_FAILED',
					loading: false,
					error:
						error?.response?.status === 404
							? 'Email does not exist'
							: error?.response?.data?.message
				});
			});
	};
};

export const completePasswordReset = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'COMPLETE_PASSWORD_RESET_PENDING',
			loading: true,
			error: null
		});
		return client
			.post(`/auth/password-reset`, payload)
			.then(async (response) => {
				dispatch({
					type: 'COMPLETE_PASSWORD_RESET_SUCCESS',
					loading: false
				});
				await Swal.fire(
					'Password Reset is Successful!',
					'Please log in with your new safe password!',
					'success'
				);
				window.location.href = '/login';
				return response;
			})
			.catch((error) => {
				dispatch({
					type: 'COMPLETE_PASSWORD_RESET_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const requestPasswordUpdate = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'REQUEST_PASSWORD_UPDATE_PENDING',
			loading: true,
			error: null
		});
		return client
			.post(`/password-update`, payload)
			.then(async (response) => {
				dispatch({
					type: 'COMPLETE_PASSWORD_UPDATE_SUCCESS',
					loading: false
				});
				await message.success('Password update is Successful!');
				return response;
			})
			.catch(async (error) => {
				dispatch({
					type: 'COMPLETE_PASSWORD_UPDATE_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
				await message.success(
					'Password update Failed!',
					error.response && error.response && error.response.data && error.response.data.message
				);
			});
	};
};

export const getAllAdminUsers = (keyword) => {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_ALL_USERS_PENDING',
			loading: true,
			error: null
		});
		return client
			.get(
				`/users?$order=-id&&$include=roles&$roles.id$[$ne]=user&$q=${keyword}&$searchFields=firstName%2C%20lastName%2C%20email`
			)
			.then((response) => {
				dispatch({
					type: 'FETCH_ALL_USERS_SUCCESS',
					loading: false,
					users: response.data.data
				});
			})
			.catch((error) => {
				dispatch({
					type: 'FETCH_ALL_USERS_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const getAllUsers = (keyword) => {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_ALL_USERS_PENDING',
			loading: true,
			error: null
		});
		return client
			.get(
				`/users?$order=-id&&$include=roles&$q=${keyword}&$searchFields=firstName%2C%20lastName%2C%20email`
			)
			.then((response) => {
				dispatch({
					type: 'FETCH_ALL_USERS_SUCCESS',
					loading: false,
					users: response.data.data
				});
			})
			.catch((error) => {
				dispatch({
					type: 'FETCH_ALL_USERS_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const createUser = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'CREATE_USER_PENDING',
			loading: true,
			error: null
		});
		return client
			.post(`/users`, payload)
			.then((response) => {
				dispatch({
					type: 'CREATE_USER_SUCCESS',
					loading: false
				});
			})
			.catch((error) => {
				dispatch({
					type: 'CREATE_USER_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const getUser = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'GET_USER_PENDING',
			loading: true,
			error: null
		});
		return client
			.get(`/users/${id}`)
			.then((response) => {
				const user = response.data;
				dispatch({
					type: 'GET_USER_SUCCESS',
					loading: false,
					user
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_USER_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const patchUser = (id, payload) => {
	return (dispatch) => {
		dispatch({
			type: 'PATCH_USER_PENDING',
			loading: true,
			error: null
		});
		return client
			.patch(`/users/${id}`, payload)
			.then((response) => {
				dispatch({
					type: 'PATCH_USER_SUCCESS',
					loading: false
				});
			})
			.catch((error) => {
				dispatch({
					type: 'PATCH_USER_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const getStore = (d) => {
	return (dispatch) => {
		dispatch({
			type: 'GET_STORE_PENDING',
			loading: true,
			error: null
		});
		return client
			.get(`/stores`)
			.then((response) => {
				const store = response.data.data[0];
				localStorage.setItem('STORE_INFO', JSON.stringify(store));
				dispatch({
					type: 'GET_STORE_SUCCESS',
					loading: false,
					store
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_STORE_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const checkStore = (url) => {
	return (dispatch) => {
		dispatch({
			type: 'GET_STORE_PENDING',
			loading: true,
			error: null
		});
		return client
			.get(`/store?url=${url}`)
			.then((response) => {
				const store = response.data;
				console.log('store check', store);
				// dispatch({
				//   type: "GET_STORE_SUCCESS",
				//   loading: false,
				//   store,
				// });
			})
			.catch((error) => {
				dispatch({
					type: 'GET_STORE_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const patchStore = (id, payload) => {
	return (dispatch) => {
		dispatch({
			type: 'PATCH_STORE_PENDING',
			loading: true,
			error: null
		});
		return client
			.patch(`/stores/${id}`, payload)
			.then(async (response) => {
				dispatch({
					type: 'PATCH_STORE_SUCCESS',
					loading: false
				});
				dispatch(getStore());
				await message.success('Store update is Successful!');
			})
			.catch(async (error) => {
				dispatch({
					type: 'PATCH_STORE_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
				await message.error('Store update failed!');
			});
	};
};

export const uploadFile = (payload) => {
	return (dispatch) => {
		dispatch({
			type: 'UPLOAD_FILE_PENDING',
			loading: true,
			error: null
		});
		return client
			.post(`/aws/s3/uploadFile`, payload, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((response) => {
				const { url } = response.data;
				dispatch({
					type: 'UPLOAD_FILE_SUCCESS',
					url,
					loading: false
				});
			})
			.catch((error) => {
				dispatch({
					type: 'UPLOAD_FILE_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const deleteUser = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'DELETE_USER_PENDING',
			loading: true,
			error: null
		});
		return client
			.delete(`/users/${id}`)
			.then((response) => {
				dispatch({
					type: 'DELETE_USER_SUCCESS',
					loading: false
				});
			})
			.catch((error) => {
				dispatch({
					type: 'DELETE_USER_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const deleteUsers = (query) => {
	return (dispatch) => {
		dispatch({
			type: 'DELETE_USER_PENDING',
			loading: true,
			error: null
		});
		return client
			.delete(`/users${query}`)
			.then((response) => {
				dispatch({
					type: 'DELETE_USER_SUCCESS',
					loading: false
				});
			})
			.catch((error) => {
				dispatch({
					type: 'DELETE_USER_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		window.localStorage.removeItem('accessToken');
		window.localStorage.removeItem('_profile');
		dispatch({
			type: 'LOGOUT_USER',
			user: null
		});
		window.location.replace('/');
	};
};

export const getDashboardStats = (dateRange) => {
	const { startDate, endDate, period } = dateRange;
	return (dispatch) => {
		dispatch({
			type: 'FETCH_DASHBOARD_STATS_PENDING',
			loading: true,
			error: null
		});
		const allTimeStartDate = moment('2018-01-01').format('YYYY-MM-DD');
		const allTimeEndDate = moment().endOf('year').format('YYYY-MM-DD');
		return client
			.get(
				`/stats?periodType=${period === 'all' ? 'custom' : period}${
					period === 'custom'
						? `&periodFrom=${startDate}&periodTo=${endDate}`
						: period === 'all'
						? `&periodFrom=${allTimeStartDate}&periodTo=${allTimeEndDate}`
						: ''
				}`
			)
			.then((response) => {
				dispatch({
					type: 'FETCH_DASHBOARD_STATS_SUCCESS',
					loading: false,
					stats: response.data.data
				});
			})
			.catch((error) => {
				dispatch({
					type: 'FETCH_DASHBOARD_STATS_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};

export const getTopItemsAnalytics = (periodType, periodCount) => {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_ITEMS_ANALYTICS_PENDING',
			loading: true,
			error: null
		});
		return client
			.get(`/analytics?periodType=${periodType}&periodCount=${periodCount || 2}`)
			.then((response) => {
				dispatch({
					type: 'FETCH_ITEMS_ANALYTICS_SUCCESS',
					loading: false,
					itemsAnalytics: response.data.data
				});
			})
			.catch((error) => {
				dispatch({
					type: 'FETCH_ITEMS_ANALYTICS_FAILED',
					loading: false,
					error:
						error.response && error.response && error.response.data && error.response.data.message
				});
			});
	};
};
