var http = require('http');

var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'html'});
	res.end(index);
}).listen(80);

console.log('running');
