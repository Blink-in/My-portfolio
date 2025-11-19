
const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());

 

app.use(bodyParser.json());

 const Contact = require("./module/contactModule.js")
 const contactRoute = require("./route/contactRoute.js");


 app.use("/api/portfolio", contactRoute)
// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("database connected");
  })

  .catch(() => {
    console.log("database not connected");
  });

// Start the server
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
