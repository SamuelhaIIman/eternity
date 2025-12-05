// Import the HTTP module
const http = require('http');

const server = http.createServer((req, res) => {
  // Set status code and multiple headers
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  res.end('<h1>Hello, World!</h1>');
});

// Define the port to listen on const PORT = 3000;
const PORT = 3000;
// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});