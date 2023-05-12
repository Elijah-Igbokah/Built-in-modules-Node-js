/**
The querystring module in Node.js simplifies working with query strings by providing an API for parsing and 
formatting them. With it, you can easily convert query strings into objects and vice versa, as well as perform 
operations such as URL encoding and decoding.
 */

// Example
const querystring = require('querystring');

const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Formatted Query String:', qs);

const parsed = querystring
