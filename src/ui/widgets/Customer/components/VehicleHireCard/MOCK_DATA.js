import GIGM from 'assets/img/GIGMLogo.png';
import car from 'assets/img/toppng.png';

export const mockData_VehicleHireCard = {
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
};
