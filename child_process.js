/*
The child_process module in Node.js enables the creation and management of child processes. 
This module provides functions for spawning new processes, executing commands, 
and communicating with child processes using standard input/output.
*/
const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(stdout);
});
