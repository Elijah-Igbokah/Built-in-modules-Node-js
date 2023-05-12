/*
 * The moment module is a popular date and time manipulation library for Node.js. 
 * It provides a simple and convenient API for parsing,
 * formatting, manipulating, and displaying dates and times in various formats.
*/


// Example (formattiong dates and times)
const moment = require('moment');

const now = moment();
console.log(now.format('YYYY-MM-DD')); // Output: 2023-05-12
console.log(now.format('HH:mm:ss')); // Output: 14:30:00

// Example (Manipulating Date and Time)
const moment = require('moment');

const date  = moment('2023-05-12', 'YYYY-MM-DD');
console.log(date.add(1, 'week').format('YYYY-MM-DD')); // Output: 2023-05-19
console.log(date.subtract(1, 'day').format('YYYY-MM-DD')); // Output: 2023-05-18

// Example(Calculating Durations)
const moment = require('moment');

const start = moment('2023-05-12 10:00', 'YYYY-MM-DD HH:mm');
const end = moment('2023-05-12 14:30', 'YYYY-MM-DD HH:mm');
const duration = moment.duration(end.diff(start));
console.log(duration.asHours()); // Output: 4.5



