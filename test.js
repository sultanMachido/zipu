/* eslint-disable no-unused-vars */
// let date = new Date('2021-03-13T12:19:25.000000Z').toLocaleDateString('en-gb', {
// 	year: 'numeric',
// 	month: 'long',
// 	day: 'numeric'
// });

const { default: Item } = require('antd/lib/list/Item');

// let day = new Date('2021-03-13T12:19:25.000000Z').getDay();

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fiday', 'Saturday'];

// let date1 = new Date('2021-03-13T12:19:25.000000Z').getDate();

// console.log(date);
// console.log(days[day]);
// console.log(date1);

// var datum = Date.parse('2021-08-04') / 1000;
// console.log(datum);

let seat_arrangement = [
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
];
seat_arrangement.map((item) => {
	item.map((col) => {
		console.log('col', col);
	});
});
