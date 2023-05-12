/* 
  This module offers functions for reading and writing files, creating and removing directories, 
  querying file information, and more. It provides an essential set of features for 
  any Node.js application that requires file system interaction, such as reading 
  configuration files, logging data, or serving static assets.
*/

// Example;
const fs = require('fs');

fs.readFile('/path/to/file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile('/path/to/new-file.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
