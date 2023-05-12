
/*
  The cluster module helps in utilizing multiple CPU cores by creating child processes
  to handle incoming requests.
  It allows you to distribute the load across the available cores, 
  improving the performance and scalability of your application.
 */

import { isMaster, fork, on } from 'cluster';
import { createServer } from 'http';
const numCPUs = require('os').cpus().length;

if (isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    fork();
  }

  on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, world!');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
