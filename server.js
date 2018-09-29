var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello You! this is sample app created using kube. \nCheck out https://usekube.co\n\n ');
};
var www = http.createServer(handleRequest);
www.listen(80);