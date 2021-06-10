import GIGM from '../../assets/img/GIGMLogo.png';
import cars from '../../assets/img/cars.jpg';
import car from '../../assets/img/toppng.png';

export const mockData_TranscoProfile = {
	companyHeader: {
		rating: 5.0,
		imgUrl: GIGM,
		companyName: 'God is Good Motors',
		reviewNumber: 2000
	},
	companyDescription: {
		description:
			"This rental includes Collision Damage Waiver with zero excess: if the car's bodywork, glass, wheels, interior, roof or undercarriage get damaged, you won't pay anything at all towards repairs covered by the policy. This cover is only valid if you stick to the terms of the rental agreement. It doesn't cover charges (e.g. for towing or off-road time), or anything in the car (e.g. child seats, GPS devices or personal belongings), or damage caused by any authorised driver&#39;s negligence.",
		imgUrl: cars,
		carInfo: {
			seater: '40 Seater',
			luggage: '1 large handbag per passenger',
			air: '4 Door',
			door: '4 Door'
		},
		contactInfo:
			"This rental includes Collision Damage Waiver with zero excess: if the car's bodywork, glass, wheels, interior, roof or undercarriage",
		parkAddress:
			"This rental includes Collision Damage Waiver with zero excess: if the car's bodywork, glass, wheels, interior, roof or undercarriage",
		emergencyNumber:
			"This rental includes Collision Damage Waiver with zero excess: if the car's bodywork, glass, wheels, interior, roof or undercarriage",
		adsAndSpecialPackages:
			"This rental includes Collision Damage Waiver with zero excess: if the car's bodywork, glass, wheels, interior, roof or undercarriage"
	},
	tripDetails: [
		{
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
		},
		{
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
		}
	],
	hireDetails: [
		{
			imgUrl: car,
			carName: 'Ford Focus or Similar',
			classType: 'Economy',
			fee: '100,000 / day',
			cancelType: 'Cancel up to 2 days to trip',
			availability: false,
			vehicleInfo: {
				seater: '5 seater car',
				luggage: '2 suuitcases',
				airCondition: 'AC available',
				carType: 'Automatic'
			},
			companyInfo: {
				imgUrl: GIGM,
				tripsCompleted: '24000 trips completed',
				rating: 5,
				reviewCount: 2000
			},
			tripInfo: ['Return trip available', 'VIP', 'Cancellation refund']
		},
		{
			imgUrl: car,
			carName: 'Ford Focus or Similar',
			classType: 'Economy',
			fee: '100,000 / day',
			cancelType: 'Cancel up to 2 days to trip',
			availability: false,
			vehicleInfo: {
				seater: '5 seater car',
				luggage: '2 suuitcases',
				airCondition: 'AC available',
				carType: 'Automatic'
			},
			companyInfo: {
				imgUrl: GIGM,
				tripsCompleted: '24000 trips completed',
				rating: 5,
				reviewCount: 2000
			},
			tripInfo: ['Return trip available', 'VIP', 'Cancellation refund']
		}
	]
};
