/*
The crypto module in Node.js provides cryptographic functions that can be used for
securing data. It includes functions for creating hashes, encrypting and decrypting data, generating secure random numbers, and more.
*/

// Example (Hashing);

const crypto = require('crypto');

const data = 'Hello, World!';
const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log('Hash:', hash);

// Example(Encryption and Decryption);

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const plaintext = 'Sensitive data';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(plaintext, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted:', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

console.log('Decrypted:', decrypted);
