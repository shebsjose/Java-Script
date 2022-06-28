var http = require('http');

 http.createServer(function (res, req) {
    console.log("hello");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
}).listen(2000); 