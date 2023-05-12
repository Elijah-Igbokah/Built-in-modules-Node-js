/*
* The jsonwebtoken module allows you to generate and verify JSON Web Tokens (JWTs), 
which are widely used for authentication and authorization purposes. With this module, 
you can create secure tokens, verify their authenticity, and extract information from 
the tokens using provided functions.
*/

// Example;
const jwt = require('jsonwebtoken');

const payload = { userId: 1234 };
const secretKey = 'mySecretKey';

const token = jwt.sign(payload, secretKey);
console.log('Generated token:', token);

const decoded = jwt.verify(token, secretKey);
console.log('Decoded token:', decoded);
