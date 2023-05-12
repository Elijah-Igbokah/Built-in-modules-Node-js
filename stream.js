/**
 * stream: The stream module provides an API for implementing streaming data in Node.js. 
 * It offers a foundation for working with streams, 
 * which allow for efficient processing of large amounts of data.
 */

/**
 * Example: Readable string:
 * Readable Streams: Readable streams represent a source from which data can be read. 
 * They emit 'data' events when new data is available and a 'end' event when there is no more data.
 */
        const fs = require('fs');
        const readableStream = fs.createReadStream('file.txt');

        readableStream.on('data', (chunk) => {
        console.log(chunk);
        });

        readableStream.on('end', () => {
        console.log('No more data');
        });

/**
 * Writable Streams: Writable streams represent a destination to which data can be written. 
 * They have a write() method to write data and an end() method to signal the end of writing
 */
        const fs = require('fs');
        const writableStream = fs.createWriteStream('output.txt');

        writableStream.write('Hello, world!');
        writableStream.end();

/**
 * Duplex Streams: Duplex streams are both readable and writable.
 * They combine the features of readable and writable streams, allowing for bidirectional data flow.
 */
        const { Duplex } = require('stream');

        const duplexStream = new Duplex({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        },

        read(size) {
            this.push('Received data');
            this.push(null);
        }
        });

        process.stdin.pipe(duplexStream).pipe(process.stdout);

