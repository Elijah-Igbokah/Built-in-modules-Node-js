/**
 * The dgram module in Node.js provides an implementation of UDP (User Datagram Protocol) sockets. 
 * It allows you to create both UDP clients and servers for sending and receiving datagrams.
 */


/**Example;
 * dgram.createSocket(type[, callback]): Creates a new socket object of the specified type. 
 * The type can be 'udp4' for IPv4 or 'udp6' for IPv6.
 */ 
const dgram = require('dgram');

// Create a UDP server socket
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Received message: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.bind(3000, () => {
  console.log('Server is listening on port 3000');
});

/**
 * socket.send(msg, offset, length, port, address[, callback]): 
 * Sends a UDP message to the specified address and port.
 */
const dgram = require('dgram');

// Create a UDP client socket
const client = dgram.createSocket('udp4');

const message = 'Hello, server!';
const port = 3000;
const address = 'localhost';

client.send(message, 0, message.length, port, address, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Message sent to server');
  }

  client.close();
});
