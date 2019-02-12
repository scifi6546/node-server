const http = require('http');
const file = require('./file.js');
const api = require('./api.js');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if(req.url.startsWith("/api/")){
    api.process(req,res);
  }
  if(req.url=="/index.css"){
    res.setHeader('Content-Type', 'text/css');
    res.end(file.load('index.css'));
    return;
  }else{

    res.setHeader('Content-Type', 'text/html');
    res.end(file.load('index.html'));
    return;
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

