const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
  res.end("Salut comment ça va ?");
});

server.listen(8000);