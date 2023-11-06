// mongodb atlas
// usename : Quangbinh
// password : bAYzohS4WtsNfi6I

const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
var methodOverride = require("method-override");
const route = require("./routes");
const app = express();

const db = require("./config/db");
// connect database
db.connect();

const port = 3000;
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

// template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(morgan("combined"));

route(app);

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});
