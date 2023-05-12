/*
The dns module in Node.js provides the capability to perform DNS (Domain Name Systemb)
lookups and hostname resolution. It offers functions for resolving domain names to 
IP addresses and vice versa, retrieving information about DNS records, and performing
other DNS-related operations. With this module, developers can effectively manage 
DNS-related operations within their Node.js applications.
 */



const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
  console.log('Address:', address);
});
