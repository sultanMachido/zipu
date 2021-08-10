let date = new Date('2021-03-13T12:19:25.000000Z').toLocaleDateString('en-gb', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});

let day = new Date('2021-03-13T12:19:25.000000Z').getDay();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fiday', 'Saturday'];

let date1 = new Date('2021-03-13T12:19:25.000000Z').getDate();

console.log(date);
console.log(days[day]);
console.log(date1);

var datum = Date.parse('2021-08-04') / 1000;
console.log(datum);
