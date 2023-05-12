/*
A widely-used HTTP client library in Node.js, this tool streamlines the process of making HTTP requests. 
It provides support for promises and presents a user-friendly API for sending HTTP requests, 
handling responses, and managing request configurations.
*/

// Example;

const axios = require('axios');

axios.get('https://api.example.com/users')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
