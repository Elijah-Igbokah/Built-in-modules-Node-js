/*
 The events module implements an event-driven programming paradigm. It provides the EventEmitter class,
 which allows you to create custom events, emit events, and register event listeners to handle those events.
*/


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.emit('greet', 'Aisha'); // Output: Hello, Aisha!
