const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
function loadFile(file){
	return fs.readFileSync(file,'utf8');
}
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(loadFile('main.js'));
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

