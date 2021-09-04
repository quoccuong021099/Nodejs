const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// http logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  hbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => res.render("home"));

app.get("/news", (req, res) => res.render("news"));

app.get("/search", (req, res) => {
  return res.render("search");
});

app.post("/search", (req, res) => {
  console.log("req", req.body);
  return res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
