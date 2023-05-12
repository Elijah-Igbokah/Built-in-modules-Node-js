/*
The csv-parse module in Node.js facilitates the processing of CSV data by automatically converting it into JavaScript objects or arrays that can be easily manipulated. This module allows for the reading and manipulation of CSV data in a seamless and efficient manner.
*/
// Examples;
const fs = require('fs');
const csv = require('csv-parser');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  
