/**
 * A middleware module for handling file uploads in web applications. 
 * It simplifies the process of accepting file uploads from clients, handling multipart form data, 
 * and storing files on the server.
 */

const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const app = express();

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('Uploaded file:', req.file);
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
