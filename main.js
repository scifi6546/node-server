const http = require('http');
const file = require('./file.js');
const api = require('./api.js');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  if(req.url.startsWith("/api/")){
    api.process(req,res);
    return;
  }
  //get index.css
  if(req.url=="/index.css"){
    res.setHeader('Content-Type', 'text/css');
    res.end(file.load('html/index.css'));
    return;
  }
  //get main.js
  if(req.url=='/index.js'){
    res.setHeader('Content-Type','application/javascript');
    res.end(file.load('html/index.js'));
    return;
  }
  //get jquery
  if(req.url=='/jquery'){
    res.setHeader('Content-Type','application/javascript');
    res.end(file.load('node_modules/jquery/dist/jquery.min.js'));
    return;
  }
    res.setHeader('Content-Type', 'text/html');
    res.end(file.load('./html/index.html'));
    return;
  

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

