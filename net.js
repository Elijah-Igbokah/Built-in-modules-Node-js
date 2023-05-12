/**
 * The net module in Node.js provides an asynchronous network API for creating TCP (Transmission Control Protocol) servers and clients. 
 * It allows you to establish network connections and exchange data over TCP.
 */

/* Example;
 *net.createServer([options][, connectionListener]): Creates a new TCP server.
*/
    const net = require('net');

    const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
    });

    server.listen(3000, () => {
    console.log('Server is listening on port 3000');
    });

/**
  * net.connect(options[, connectionListener]): Creates a new TCP client connection.
*/
        const net = require('net');

        const client = net.connect(3000, 'localhost', () => {
        console.log('Connected to server');
        
        client.write('Hello, server!');
        });
        
        client.on('data', (data) => {
        console.log(`Received data from server: ${data}`);
        
        // Close the connection
        client.end();
        });
        
        client.on('end', () => {
        console.log('Disconnected from server');
        });
        