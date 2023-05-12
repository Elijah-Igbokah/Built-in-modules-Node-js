/*
 *It provides an API for interacting with the operating system in a Node.js application.
 *It offers functions for getting information about the system like the CPU architecture, available memory, network interfaces, and more.
*/

const os = require('os');

console.log('Hostname:', os.hostname());
console.log('OS Type:', os.type());
console.log('OS Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('Network Interfaces:', os.networkInterfaces());
