const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const app = express();
require("dotenv").config();

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", authRoutes);

//seed admin
// const { seedAdmin } = require('./seeders/admin')
// seedAdmin()

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
