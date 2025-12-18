const express = require("express");
const path = require("path");
const app = express();
const port  = 8080;


app.set("view engine", "ejs");

app.set("views", "./views")

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index")
});

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});