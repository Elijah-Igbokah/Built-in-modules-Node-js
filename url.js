/**
 * The url module in Node.js provides utilities for working with URLs. It allows you to parse, 
 * format, resolve, and manipulate URLs.
 *To use the url module, you can require it in your Node.js code using const url = require('url');.
 */

 /**Examples:
  * url.parse(urlString[, parseQueryString[, slashesDenoteHost]]): 
  * It Parses a URL string and returns an object containing its components.
  */
    const url = require('url');

    const urlString = 'https://www.example.com/path?query=string';
    const parsedUrl = url.parse(urlString, true);
 
    console.log(parsedUrl.protocol); // Output: 'https:'
    console.log(parsedUrl.host); // Output: 'www.example.com'
    console.log(parsedUrl.pathname); // Output: '/path'
    console.log(parsedUrl.query); // Output: { query: 'string' }
    
/**
 * url.format(urlObject): Takes a URL object and returns the corresponding formatted URL string.
 */

    const url = require('url');

    const urlObject = {
    protocol: 'https:',
    hostname: 'www.example.com',
    pathname: '/path',
    query: { query: 'string' }
    };

    const formattedUrl = url.format(urlObject);
    console.log(formattedUrl); // Output: 'https://www.example.com/path?query=string'
