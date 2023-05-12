/**
Express is a web application framework for Node.js that simplifies the process of 
building APIs and web applications. It provides a rich set of features for routing, 
handling middleware, and managing HTTP requests and responses. 
Express is widely used for creating scalable and robust web applications due to its 
ease of use, flexibility, and versatility.
 */


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

