const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const handleRequest = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('hw01/index.html', null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
};

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});