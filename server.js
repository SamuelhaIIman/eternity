// Import the HTTP module
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" })
  fs.readFile("./public/index.html", (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write("Error: File Not Found")
    } else {
      res.write(data)
    }
    res.end()
  })
});


const PORT = 3000;
server.listen(PORT, (err) => {
  if (err) {
    console.log("Something went wrong!", err)
  } else {
    console.log(`Server running at http://localhost:${PORT}/`);
  }
});