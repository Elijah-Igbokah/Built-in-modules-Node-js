/**
 *A widely used NoSQL database that provides a module for interacting with MongoDB databases. 
 *It offers a convenient and efficient way to perform database operations, such as CRUD operations,
 * indexing, aggregation, and more
 */
 

// Examples;
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }

  const db = client.db(dbName);

  // Perform database operations
  db.collection('users').find({}).toArray((err, result) => {
    if (err) {
      console.error('Failed to fetch users:', err);
      return;
    }

    console.log(result);
    client.close();
  });
});
