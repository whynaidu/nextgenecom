require("dotenv").config();
require("./config/db")();

const express = require("express");
const app = express();
var cors = require("cors");

const users = require("./routes/user");
const product = require("./routes/product");
const attributes = require("./routes/attributes");
const banner = require("./routes/bannerimages");

app.use(express.json());
app.use(cors());

app.use("/users", users);
app.use("/products", product);
app.use("/attributes", attributes);
app.use("/banner", banner);

app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
