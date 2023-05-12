/**
 * The timers module in Node.js provides functions for scheduling the execution of code at specific intervals.
 * It includes functions to create timers, schedule one-time and recurring callbacks, and control the execution of timers.
 */

// Examples

/**
 * setTimeout(callback, delay[, ...args]): Schedules the execution of a callback function after a specified delay (in milliseconds).
*/
const timeoutId = setTimeout(() => {
    console.log('Timeout callback executed');
  }, 2000);

/**
 * setInterval(callback, delay[, ...args]): Schedules the repeated execution of a callback function with a fixed delay between each execution.
 */
const intervalId = setInterval(() => {
    console.log('Interval callback executed');
  }, 1000);

  
  
  