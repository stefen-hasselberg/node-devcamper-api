const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// load env vars
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

// Route files

const bootcamps = require("./routes/bootcamps");

// middlerware
//const logger = require("./middleware/logger");
const morgan = require("morgan");

// instansate a express server
const app = express();

// Dev logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// app.use(logger);

// moute routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
