export const trips = {
	status: 'Success',
	message: 'Trips retrieved successfully',
	data: {
		trips: {
			current_page: 1,
			data: [
				{
					id: 1,
					transco_id: 2,
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
					trip_date_time: '2021-03-15 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						{
							1: '1'
						}
					],
					disabled: 0,
					created_at: '2021-06-19T17:28:10.000000Z',
					updated_at: '2021-06-19T19:46:41.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Lagos',
					origin_city: null,
					destination_state: 'Enugu',
					destination_city: null,
					trip_date: null,
					trip_time: null,
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 2,
					transco_id: 2,
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
					trip_date_time: '2021-03-12 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						{
							1: '1'
						}
					],
					disabled: 0,
					created_at: '2021-06-19T17:28:10.000000Z',
					updated_at: '2021-06-19T17:28:10.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: null,
					origin_state: null,
					origin_city: null,
					destination_state: null,
					destination_city: null,
					trip_date: null,
					trip_time: null,
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 3,
					transco_id: 2,
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
					trip_date_time: '2021-03-13 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 1
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 1
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
					created_at: '2021-06-19T17:28:10.000000Z',
					updated_at: '2021-06-19T17:28:10.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: null,
					origin_state: null,
					origin_city: null,
					destination_state: null,
					destination_city: null,
					trip_date: null,
					trip_time: null,
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 4,
					transco_id: 2,
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
					trip_date_time: '2021-03-11 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 1
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 1
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
					created_at: '2021-06-24T10:09:52.000000Z',
					updated_at: '2021-06-24T10:09:52.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Enugu',
					origin_city: 'Lagos',
					destination_state: 'Lagos',
					destination_city: 'Lagos',
					trip_date: '2021-07-29',
					trip_time: null,
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 5,
					transco_id: 2,
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
					trip_date_time: '2021-03-12 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 1
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 1
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
					created_at: '2021-06-24T10:09:52.000000Z',
					updated_at: '2021-06-24T10:09:52.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Lagos',
					origin_city: 'Lagos',
					destination_state: 'Lagos',
					destination_city: 'Lagos',
					trip_date: '2021-07-29',
					trip_time: null,
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 6,
					transco_id: 2,
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
					trip_date_time: '2021-03-13 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 1
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 1
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
					created_at: '2021-06-24T10:09:52.000000Z',
					updated_at: '2021-06-24T10:09:52.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Enugu',
					origin_city: 'Lagos',
					destination_state: 'Lagos',
					destination_city: 'Lagos',
					trip_date: '2021-07-30',
					trip_time: '09:00:00',
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 7,
					transco_id: 2,
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
					trip_date_time: '2021-03-14 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 1
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 1
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
					created_at: '2021-06-24T18:57:18.000000Z',
					updated_at: '2021-06-24T18:57:18.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Lagos',
					origin_city: 'Lagos',
					destination_state: 'Enugu',
					destination_city: 'Enugu',
					trip_date: '2021-08-01',
					trip_time: '09:00:00',
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 8,
					transco_id: 2,
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
					trip_date_time: '2021-03-11 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 1
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 0
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
					created_at: '2021-07-19T12:49:05.000000Z',
					updated_at: '2021-07-23T18:45:16.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Enugu',
					origin_city: 'Enugu',
					destination_state: 'Lagos',
					destination_city: 'Lagos',
					trip_date: '2021-08-25',
					trip_time: '09:00:00',
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 9,
					transco_id: 2,
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
					trip_date_time: '2021-03-12 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 0
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 1
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
					created_at: '2021-07-19T12:49:05.000000Z',
					updated_at: '2021-07-23T18:45:36.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Lagos',
					origin_city: 'Lagos',
					destination_state: 'Enugu',
					destination_city: 'Lagos',
					trip_date: '2021-08-03',
					trip_time: '09:00:00',
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				},
				{
					id: 10,
					transco_id: 2,
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
					trip_date_time: '2021-03-13 09:00:00',
					status: 'Loading',
					has_promo: 0,
					promo_id: null,
					booking_status: 1,
					booked_seats: 8,
					available_seats: 6,
					total_seats: 14,
					reminder_status: 0,
					seat_arrangement: [
						[
							{
								seatNumber: 1,
								available: 0
							},
							{
								seatNumber: 2,
								available: 1
							}
						],
						[
							{
								seatNumber: 3,
								available: 1
							},
							{
								seatNumber: 4,
								available: 1
							},
							{
								seatNumber: 5,
								available: 1
							},
							{
								seatNumber: 6,
								available: 1
							}
						],
						[
							{
								seatNumber: 7,
								available: 0
							},
							{
								seatNumber: 8,
								available: 1
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
								available: 1
							},
							{
								seatNumber: 12,
								available: 1
							},
							{
								seatNumber: 13,
								available: 1
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
								available: 1
							},
							{
								seatNumber: 21,
								available: 1
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
					created_at: '2021-07-19T12:49:05.000000Z',
					updated_at: '2021-07-23T20:58:38.000000Z',
					customised_vehicle_name: 'Jet Mover',
					estimated_trip_time: '2 hours',
					pick_up_time_delay: '20 minutes',
					seating_rows_arrangement: '2,4,4,4,4,4,4,4,4,4',
					trip_type: 'seat booking',
					origin_state: 'Lagos',
					origin_city: 'Lagos',
					destination_state: 'Enugu',
					destination_city: 'Lagos',
					trip_date: '2021-08-01',
					trip_time: '09:00:00',
					trip_availability: 1,
					origin_terminal: {
						id: 1,
						name: 'Test terminal 1',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:02.000000Z',
						updated_at: '2021-06-19T16:41:02.000000Z'
					},
					destination_terminal: {
						id: 2,
						name: 'Test terminal 2',
						address: 'No 7',
						state: 'Lagos',
						city: 'Lagos',
						transco_id: 2,
						status: 1,
						created_at: '2021-06-19T16:41:25.000000Z',
						updated_at: '2021-06-19T16:41:25.000000Z'
					},
					vehicle: {
						id: 1,
						operation_type: 'Trips',
						vehicle_type: 'Bus',
						vehicle_make: 'Toyota hiace',
						color: null,
						plate_number: 'LAG 220BE',
						seat_arrangment: ['row1', ['anotherrow']],
						transco_id: 2,
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
						created_at: '2021-06-19T16:27:04.000000Z',
						updated_at: '2021-06-19T16:27:04.000000Z'
					}
				}
			],
			first_page_url: 'http://localhost:8000/api/v1/transcotrips/2?page=1',
			from: 1,
			last_page: 1,
			last_page_url: 'http://localhost:8000/api/v1/transcotrips/2?page=1',
			links: [
				{
					url: null,
					label: '&laquo; Previous',
					active: false
				},
				{
					url: 'http://localhost:8000/api/v1/transcotrips/2?page=1',
					label: '1',
					active: true
				},
				{
					url: null,
					label: 'Next &raquo;',
					active: false
				}
			],
			next_page_url: null,
			path: 'http://localhost:8000/api/v1/transcotrips/2',
			per_page: 15,
			prev_page_url: null,
			to: 10,
			total: 10
		},
		terminals: {
			1: {
				id: 1,
				name: 'Test terminal 1',
				address: 'No 7',
				state: 'Lagos',
				city: 'Lagos',
				transco_id: 2,
				status: 1,
				created_at: '2021-06-19T16:41:02.000000Z',
				updated_at: '2021-06-19T16:41:02.000000Z'
			},
			2: {
				id: 2,
				name: 'Test terminal 2',
				address: 'No 7',
				state: 'Lagos',
				city: 'Lagos',
				transco_id: 2,
				status: 1,
				created_at: '2021-06-19T16:41:25.000000Z',
				updated_at: '2021-06-19T16:41:25.000000Z'
			}
		},
		vehicles: {
			1: {
				id: 1,
				operation_type: 'Trips',
				vehicle_type: 'Bus',
				vehicle_make: 'Toyota hiace',
				color: null,
				plate_number: 'LAG 220BE',
				seat_arrangment: ['row1', ['anotherrow']],
				transco_id: 2,
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
				created_at: '2021-06-19T16:27:04.000000Z',
				updated_at: '2021-06-19T16:27:04.000000Z'
			}
		}
	}
};
