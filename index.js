const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;


const server = http.createServer((request, response) => {
	response.writeHead('200', {'Content-Type':'text/plain'});
	response.write('UWindsor AI Club!\n');
});

server.listen(port, hostname, ()=> {
	console.log("The server is running on host " + hostname + ", and port number " + port + '.');
})
