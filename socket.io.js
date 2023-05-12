/*
The socket.io module enables real-time, two-way communication between a server and clients using WebSockets. 
It simplifies building applications with features such as event-based messaging, broadcasting, 
and room-based communication.
*/
// Example;

const io = require('socket.io')(httpServer);

io.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('chat message', (message) => {
    console.log('Received message:', message);
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});
