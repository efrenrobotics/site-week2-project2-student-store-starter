// dependencies
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const storeRouter = require("./routes/stores");

// create express application
const app = express();

// mounting middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// mount store router
app.use("/", storeRouter);

module.exports = app;
