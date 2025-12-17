const express = require("express");
const app = express();
const port  = 8080;

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.set("view engine", "ejs");
app.use(express.static("public"))

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});