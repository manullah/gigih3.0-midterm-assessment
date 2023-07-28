const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./utils/config");
const database = require("./utils/database");
const router = require("./router");

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", router);

app.listen(config.PORT, () => {
  console.log(`Server Started at ${config.PORT}`);
});
