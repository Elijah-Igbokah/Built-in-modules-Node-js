/**
 * The zlib module in Node.js allows for compression and decompression of data using the zlib library. 
 * It supports widely used compression formats such as gzip, deflate, and raw compression.
 */

/**
 * Examples: zlib.gzip(input[, options], callback): Compresses a given input data using gzip compression.
*/
        const zlib = require('zlib');

        const input = 'Hello, world!';

        zlib.gzip(input, (error, compressedData) => {
        if (error) {
            console.error(error);
            return;
        }

        console.log(compressedData.toString('base64'));
        });

/**
 * zlib.inflate(buffer[, options], callback): Decompresses a given deflate-compressed buffer.
 */
    const zlib = require('zlib');

    const compressedData = Buffer.from('eJwrSS0u0FITCooALjECvQ==', 'base64');

    zlib.inflate(compressedData, (error, decompressedData) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(decompressedData.toString());
    });







