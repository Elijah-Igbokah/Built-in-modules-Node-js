/**
 * The util module in Node.js provides various utility functions that are helpful for debugging, formatting, and working with objects. 
 * It offers several commonly used functions that extend the core JavaScript functionality.
 */

/**Example;
 * util.format(format[, ...args]): Returns a formatted string using a format specifier. 
 * It supports placeholders for values that are replaced by the provided arguments.
 */
    const util = require('util');

    const name = 'Aisha';
    const age = 30;

    const message = util.format('My name is %s and I am %d years old', name, age);
    console.log(message); // Output: 'My name is Aisha and I am 30 years old'

/**
 * util.inspect(object[, options]): Returns a string representation of an object. 
 * It is useful for debugging and printing objects with properties and values.
*/
  const util = require('util');

  const obj = { name: 'Aisha', age: 30 };

  console.log(util.inspect(obj)); // Output: '{ name: 'Aisha', age: 30 }'


/**
 * util.inherits(constructor, superConstructor): 
 * Inherit the prototype methods from one constructor into another.
 * It establishes prototype-based inheritance between constructor functions.
 */

    const util = require('util');
    const EventEmitter = require('events');

    function CustomEmitter() {
      EventEmitter.call(this);
    }

    util.inherits(CustomEmitter, EventEmitter);

    const emitter = new CustomEmitter();
    emitter.on('event', () => console.log('Event emitted'));
    emitter.emit('event'); // Output: 'Event emitted'
