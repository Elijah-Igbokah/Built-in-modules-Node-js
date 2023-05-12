/**
 * The path module is a built-in module in Node.js that provides utilities for working with file and directory paths. 
 * It offers functions to manipulate and interact with file paths in a platform-independent manner.
 */
// Examples

/* path.join
 *Joins multiple path segments together, resolving any relative paths and returning the concatenated path.
 */

const path = require('path');

const filePath = path.join('/path/to', 'file.txt');
console.log(filePath); // Output: /path/to/file.txt

/*path.resolve
 * Resolves an absolute path by resolving the given path segments relative to the current working directory.
*/

const path = require('path');

const absolutePath = path.resolve('path', 'to', 'file.txt');
console.log(absolutePath); // Output: /current/working/directory/path/to/file.txt

/**path.basement
 * Joins multiple path segments together, resolving any relative paths and returning the concatenated path.
 */

const path = require('path');

const filename = path.basename('/path/to/file.txt');
console.log(filename); // Output: file.txt

const filenameWithoutExt = path.basename('/path/to/file.txt', '.txt');
console.log(filenameWithoutExt); // Output: file
