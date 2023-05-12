/**
 * The http module in Node.js allows for the creation of HTTP servers and making HTTP 
 * requests. It provides the ability to handle incoming HTTP requests, send HTTP 
 * responses, and make HTTP requests to external servers. Additionally, it 
 * facilitates the management of HTTP-related functionality such as headers and 
 * status codes.
 */


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, world!');
});

server.listen(3000);
