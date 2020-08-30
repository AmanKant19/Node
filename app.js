
var http =require("http");

http.createServer(function (request,response) {
	response.writeHead(200,{'ContentType':'text/plain'})

	response.end('Hello world\n');
	// body...
}).listen(8081);


console.log('running');

