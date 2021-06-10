import GIGM from '../../assets/img/GIGMLogo.png';

export const mockData_TripCard = {
	trips: [
		{
			id: 1,
			source: {
				time: '09:40 AM',
				address: 'Ojota moto park, Lagos'
			},
			destination: {
				time: '12:40 AM',
				address: 'New Garage Park, Akure'
			},
			estimatedTime: '4 hours'
		},
		{
			id: 2,
			source: {
				time: '09:40 AM',
				address: 'Ojota moto park, Lagos'
			},
			destination: {
				time: '12:40 AM',
				address: 'New Garage Park, Akure'
			},
			estimatedTime: '4 hours'
		}
	],

	companyInfo: {
		imgUrl: GIGM,
		tripsCompleted: '24000 trips completed',
		rating: 4,
		reviewCount: 2000
	},
	share: () => '',
	vehicleInfo: {
		seater: '40 seater',
		luggage: '1 hand luggage',
		airCondition: 'AC available',
		toilet: 'toilet available'
	},
	tripInfo: ['Return trip available', 'VIP', 'Cancellation refund'],
	priceInfo: {
		amount: 5500,
		vehicleType: 'GIG Jet plus',
		availableSeats: '4 seats left, book now!'
	}
};
