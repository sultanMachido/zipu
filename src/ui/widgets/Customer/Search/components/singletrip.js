export const trip = {
	id: 1,
	transco_id: 1,
	user_id: 1,
	vehicle_id: 1,
	trip_class: 'regular',
	origin_terminal_id: 1,
	destination_terminal_id: 2,
	information: 'This is the information about this trip',
	cost: 2000,
	allowed_luggage_space_per_customer: 5,


	extra_luggage_cost_per_kg: 1000,


	allows_pickup: 'yes',
	pickup_cost: 100,


	trip_date_time: '2021-07-27 09:00:00',
	status: 'Loading',
	has_promo: 1,
	promo_id: 1,
	booking_status: 1,
	booked_seats: 8,
	available_seats: 6,
	total_seats: 14,
	reminder_status: 0,
	seat_arrangement: [
		[
			{
				seatNumber: 1,
				available: 1
			},
			{
				seatNumber: 2,
				available: 1
			}
		],
		[
			{
				seatNumber: 3,
				available: 0
			},
			{
				seatNumber: 4,
				available: 0
			},
			{
				seatNumber: 5,
				available: 0
			},
			{
				seatNumber: 6,
				available: 0
			}
		],
		[
			{
				seatNumber: 7,
				available: 0
			},
			{
				seatNumber: 8,
				available: 0
			},
			{
				seatNumber: 9,
				available: 0
			},
			{
				seatNumber: 10,
				available: 0
			}
		],
		[
			{
				seatNumber: 11,
				available: 0
			},
			{
				seatNumber: 12,
				available: 0
			},
			{
				seatNumber: 13,
				available: 0
			},
			{
				seatNumber: 14,
				available: 0
			}
		],
		[
			{
				seatNumber: 15,
				available: 0
			},
			{
				seatNumber: 16,
				available: 0
			},
			{
				seatNumber: 17,
				available: 0
			},
			{
				seatNumber: 18,
				available: 0
			}
		],
		[
			{
				seatNumber: 19,
				available: 0
			},
			{
				seatNumber: 20,
				available: 0
			},
			{
				seatNumber: 21,
				available: 0
			},
			{
				seatNumber: 22,
				available: 0
			}
		],
		[
			{
				seatNumber: 23,
				available: 0
			},
			{
				seatNumber: 24,
				available: 0
			},
			{
				seatNumber: 25,
				available: 0
			},
			{
				seatNumber: 26,
				available: 0
			}
		],
		[
			{
				seatNumber: 27,
				available: 0
			},
			{
				seatNumber: 28,
				available: 0
			},
			{
				seatNumber: 29,
				available: 0
			},
			{
				seatNumber: 30,
				available: 0
			}
		]
	],
	disabled: 0,
	created_at: '2021-03-31T14:57:49.000000Z',
	updated_at: '2021-07-30T23:56:57.000000Z',
	customised_vehicle_name: null,
	estimated_trip_time: null,
	pick_up_time_delay: null,
	seating_rows_arrangement: null,
	trip_type: null,
	origin_state: 'Lagos',
	origin_city: 'Lagos',
	destination_state: 'Enugu',
	destination_city: 'Enugu',
	trip_date: '2021-08-09',
	trip_time: '09:00:00',
	trip_availability: 1,
	transco: {
		id: 1,
		email: 'gugg@gmail.com',
		name: 'GUGG Motors',
		phone: '08054558588',
		state: 'Benue',
		city: 'Ado',
		address: null,
		picture:
			'https://backend.zipu.ng//storage/uploads/transcos/comapny_picture/company-picture-1_1617379577.jpg',
		icon: 'https://backend.zipu.ng//storage/uploads/transcos/icons/company-icon1_1617379481.jpg',
		number_of_staff: null,
		number_of_terminals: null,
		number_of_buses: null,
		cac: 'https://backend.zipu.ng//storage/uploads/transcos/cac/company-cac-1_1617351677.pdf',
		permit:
			'https://backend.zipu.ng//storage/uploads/transcos/permit/company-permit-1_1617351677.pdf',
		bank: 'First Bank',
		account_name: 'GUGG LTD',
		account_number: '10345674833',
		bank_code: null,
		privacy_policy:
			'https://backend.zipu.ng//storage/uploads/transcos/privacy_policy/company-privacy-policy-1_1617351677.pdf',
		customer_care_policy:
			'https://backend.zipu.ng//storage/uploads/transcos/customer_care_cpolicy/company-customer-care-policy-1_1617351677.pdf',
		company_size: 50,
		operations: null,
		reservation_window: null,
		email_verified: 0,
		verified: 0,
		primary_admin: 1,
		transport_type: null,
		status: 1,
		created_at: '2021-02-15T17:42:46.000000Z',
		updated_at: '2021-04-02T16:10:01.000000Z'
	},
	origin_terminal: {
		id: 1,
		name: 'Ogbete Test Terminal',
		address: 'Ogbete marke',
		state: 'Enugu',
		city: 'Enugu East',
		transco_id: 1,
		status: 1,
		created_at: '2021-03-13T12:19:25.000000Z',
		updated_at: '2021-03-13T20:40:38.000000Z'
	},
	destination_terminal: {
		id: 2,
		name: 'Imo Test Terminal',
		address: 'Obodo mmadu',
		state: 'Imo',
		city: 'Owerri North',
		transco_id: 1,
		status: 1,
		created_at: '2021-03-13T14:39:55.000000Z',
		updated_at: '2021-03-13T14:39:55.000000Z'
	},
	vehicle: {
		id: 1,
		operation_type: 'Trips',
		vehicle_type: 'Bus',
		vehicle_make: 'Toyota hiace',
		color: null,
		plate_number: 'LAG 22OBE',
		seat_arrangment: null,
		transco_id: 1,
		status: 1,
		capacity: null,
		seats_available: 14,
		luggage_space: '20kg',
		luggage_capacity: null,
		doors: '2',
		ac_available: 1,
		extra_leg_space: 0,
		toilet: 0,
		theft_insurance: 0,
		booking_status: 0,
		created_at: '2021-03-11T19:34:03.000000Z',
		updated_at: '2021-03-11T19:34:03.000000Z'
	}
};
