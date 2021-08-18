import test from 'jest';

import reducers from '../../reducers';

test('reducers', () => {
	let state;
	state = reducers(
		{
			register: { isAuthenticated: false, transcoInfo: {}, registerLoading: false, error: '' },
			verifyEmail: {
				otpData: {},
				otpDataLoading: false,
				otpVerified: false,
				otpErrFlag: false,
				error: ''
			},
			login: {
				isAuthenticated: true,
				token: '382|Y5lzlczedzHUgMatocn5hQw0NISa3wqg1JBWHpe5',
				userInfo: {
					id: 84,
					name: 'Ifeanyi',
					title: 'Dr',
					email: 'collins.onlyson@gmail.com',
					date_of_birth: '2021-05-06',
					nationality: 'Nigeria',
					gender: 'male',
					address: 'Lekki phase 1',
					email_verified_at: null,
					transco_id: null,
					phone: '08038619711',
					user_type: 'customer',
					status: 1,
					disabled: 0,
					admin_level: 0,
					state: 'Anambra',
					position: null,
					modules: null,
					created_at: '2021-06-29T03:44:15.000000Z',
					updated_at: '2021-08-14T23:15:27.000000Z',
					image:
						'https://backend.zipu.ng//storage/uploads/users/profile_picture/profile-picture-84_1627159456.jpg'
				},
				loginLoading: false,
				error: ''
			},
			promoCodes: {
				promoCodes: [],
				promoCode: null,
				createPromoCodeLoading: false,
				updatePromoCodeLoading: false,
				fetchAllPromoCodesLoading: false,
				fetchSinglePromoCodeLoading: false,
				createPromoCodeError: '',
				updatePromoCodeError: '',
				fetchAllPromoCodesError: '',
				fetchSinglePromoCodeError: ''
			},
			trips: {
				trips: [],
				trip: null,
				createTripLoading: false,
				updateTripLoading: false,
				fetchAllTripsLoading: false,
				fetchSingleTripLoading: false,
				createTripError: '',
				updateTripError: '',
				fetchAllTripsError: '',
				fetchSingleTripError: ''
			},
			bookings: {
				bookings: [],
				filteredBookings: [],
				booking: null,
				createBookingLoading: false,
				updateBookingLoading: false,
				fetchAllBookingsLoading: false,
				fetchSingleBookingLoading: false,
				createBookingError: '',
				updateBookingError: '',
				fetchAllBookingsError: '',
				fetchSingleBookingError: ''
			},
			transportTypes: {
				isAuthenticated: false,
				transcoInfo: {},
				transportTypeLoading: false,
				error: ''
			},
			permitSubmission: {
				isAuthenticated: false,
				transcoInfo: {},
				permitSubmissionLoading: false,
				error: ''
			},
			businessDetails: {
				isAuthenticated: false,
				transcoInfo: {},
				businessDetailsLoading: false,
				error: ''
			},
			vehicles: {
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
			},
			staffData: {
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
			},
			terminals: {
				getTerminalsLoading: false,
				getTerminalsSuccess: {},
				getTerminalserror: '',
				terminalCount: 0,
				addTerminalsLoading: false,
				addTerminalsSuccess: {},
				addTerminalsError: '',
				editTerminalsLoading: false,
				editTerminalsSuccess: {},
				editTerminalsError: '',
				getOneTerminlaLoading: false,
				getOneTerminlaSuccess: {},
				getOneTerminlaError: ''
			},
			customer: {
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
			}
		},
		{
			type: 'GET_USER_SUCCESS',
			payload: {
				id: 84,
				name: 'Ifeanyi',
				title: 'Dr',
				email: 'collins.onlyson@gmail.com',
				date_of_birth: '2021-05-06',
				nationality: 'Nigeria',
				gender: 'male',
				address: 'Lekki phase 1',
				email_verified_at: null,
				transco_id: null,
				phone: '08038619711',
				user_type: 'customer',
				status: 1,
				disabled: 0,
				admin_level: 0,
				state: 'Anambra',
				position: null,
				modules: null,
				created_at: '2021-06-29T03:44:15.000000Z',
				updated_at: '2021-08-14T23:15:27.000000Z',
				image:
					'https://backend.zipu.ng//storage/uploads/users/profile_picture/profile-picture-84_1627159456.jpg'
			}
		}
	);
	expect(state).toEqual({
		register: { isAuthenticated: false, transcoInfo: {}, registerLoading: false, error: '' },
		verifyEmail: {
			otpData: {},
			otpDataLoading: false,
			otpVerified: false,
			otpErrFlag: false,
			error: ''
		},
		login: {
			isAuthenticated: true,
			token: '382|Y5lzlczedzHUgMatocn5hQw0NISa3wqg1JBWHpe5',
			userInfo: {
				id: 84,
				name: 'Ifeanyi',
				title: 'Dr',
				email: 'collins.onlyson@gmail.com',
				date_of_birth: '2021-05-06',
				nationality: 'Nigeria',
				gender: 'male',
				address: 'Lekki phase 1',
				email_verified_at: null,
				transco_id: null,
				phone: '08038619711',
				user_type: 'customer',
				status: 1,
				disabled: 0,
				admin_level: 0,
				state: 'Anambra',
				position: null,
				modules: null,
				created_at: '2021-06-29T03:44:15.000000Z',
				updated_at: '2021-08-14T23:15:27.000000Z',
				image:
					'https://backend.zipu.ng//storage/uploads/users/profile_picture/profile-picture-84_1627159456.jpg'
			},
			loginLoading: false,
			error: ''
		},
		promoCodes: {
			promoCodes: [],
			promoCode: null,
			createPromoCodeLoading: false,
			updatePromoCodeLoading: false,
			fetchAllPromoCodesLoading: false,
			fetchSinglePromoCodeLoading: false,
			createPromoCodeError: '',
			updatePromoCodeError: '',
			fetchAllPromoCodesError: '',
			fetchSinglePromoCodeError: ''
		},
		trips: {
			trips: [],
			trip: null,
			createTripLoading: false,
			updateTripLoading: false,
			fetchAllTripsLoading: false,
			fetchSingleTripLoading: false,
			createTripError: '',
			updateTripError: '',
			fetchAllTripsError: '',
			fetchSingleTripError: ''
		},
		bookings: {
			bookings: [],
			filteredBookings: [],
			booking: null,
			createBookingLoading: false,
			updateBookingLoading: false,
			fetchAllBookingsLoading: false,
			fetchSingleBookingLoading: false,
			createBookingError: '',
			updateBookingError: '',
			fetchAllBookingsError: '',
			fetchSingleBookingError: ''
		},
		transportTypes: {
			isAuthenticated: false,
			transcoInfo: {},
			transportTypeLoading: false,
			error: ''
		},
		permitSubmission: {
			isAuthenticated: false,
			transcoInfo: {},
			permitSubmissionLoading: false,
			error: ''
		},
		businessDetails: {
			isAuthenticated: false,
			transcoInfo: {},
			businessDetailsLoading: false,
			error: ''
		},
		vehicles: {
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
		},
		staffData: {
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
		},
		terminals: {
			getTerminalsLoading: false,
			getTerminalsSuccess: {},
			getTerminalserror: '',
			terminalCount: 0,
			addTerminalsLoading: false,
			addTerminalsSuccess: {},
			addTerminalsError: '',
			editTerminalsLoading: false,
			editTerminalsSuccess: {},
			editTerminalsError: '',
			getOneTerminlaLoading: false,
			getOneTerminlaSuccess: {},
			getOneTerminlaError: ''
		},
		customer: {
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
		}
	});
});
