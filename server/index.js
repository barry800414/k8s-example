const http = require('http');
const os = require('os');

console.log("server starting...");
let count = 0;

const handler = function(request, response) {
  count += 1;
  console.log("Received request from " + request.connection.remoteAddress + `  count:${count}`); 
  response.writeHead(200);
  response.end("v1: You've hit " + os.hostname() + "\n");
};
const www = http.createServer(handler);
www.listen(8080);