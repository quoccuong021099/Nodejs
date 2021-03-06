const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes/index.js");
const db = require("./config/db");

const SortMiddleware = require("./app/middlewares/sortMiddleware");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

// custom middleware
app.use(SortMiddleware);

// http logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  hbs({
    extname: ".hbs",
    helpers: require("./helpers/handlebars"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
