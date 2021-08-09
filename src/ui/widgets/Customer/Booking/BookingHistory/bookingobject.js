export const bookingObject = [
	{
		id: 47,
		user_id: null,
		email: 'collins.onlyson@gmail.com',
		trip_id: 1,
		name: 'Ifeanyi Ifeanyi',
		first_name: 'Ifeanyi',
		last_name: 'Ifeanyi',
		phone: '08038619711',
		address: 'Ebeano',
		next_of_kin_name: 'Even',
		next_of_kin_phone: '08052364712',
		no_of_adults: 1,
		no_of_children: 0,
		pick_up_service: 1,
		pick_up_location: 'Enugu',
		trip_type: 'seat-booking',
		round_trip: 0,
		round_trip_leg: null,
		amount: 2000,
		round_trip_amount: 0,
		total_amount: 2100,
		paid_status: 1,
		trip_status: null,
		reference: '76808P8',
		transaction_id: null,
		booked_with_promo: 0,
		promo_id: null,
		discount_amount: 0,
		payment_confirmed_at: '2021-07-30 23:37:36',
		payment_confirmed_by: null,
		linked_trip_id: null,
		payment_gateway: 'flutterwave',
		seat_number: '1',
		seat_hold_type: 'permanent',
		hold_expires_at: '2021-07-30 23:50:55',
		main_trip: 1,
		created_at: '2021-07-30T23:35:55.000000Z',
		updated_at: '2021-07-30T23:37:36.000000Z',
		trip: {
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
			}
		},
		payment: {
			id: 24,
			email: 'collins.onlyson@gmail.com',
			reference: '76808P8',
			transaction_id: '2378206',
			payment_link: 'https://ravemodal-dev.herokuapp.com/v3/hosted/pay/9cbab434c4a13f8ed02d',
			amount: 2100,
			status: 1,
			payment_gateway: 'flutterwave',
			paid_for: null,
			description: 'Payment for Zipu trip: 76808P8',
			completed_at: null,
			paygate_status: 'successful',
			created_at: '2021-07-30T23:36:18.000000Z',
			updated_at: '2021-07-30T23:37:36.000000Z'
		}
	}
];
