// Create web server
// Set up the server to listen on port 3000
// Create a route that accepts POST requests to /comments
// When a POST request is made to /comments, read the data from the request body and write it to the comments.json file
// Respond to the request with a 201 status code and a JSON object with a success property

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/comments') {
    const writable = fs.createWriteStream('comments.json');
    req.pipe(writable);
    req.on('end', () => {
      res.writeHead(201, {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify({ success: true }));
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});