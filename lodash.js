
/*
 * A utility library that provides helpful functions for manipulating arrays,
 * objects, strings, and other data types. 
 * It offers numerous functions for tasks like filtering, sorting, mapping, and reducing data.
*/


// Example;
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log('Sum:', sum);

const filtered = _.filter(numbers, (num) => num > 2);
console.log('Filtered:', filtered);

