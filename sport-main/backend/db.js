const mongoose = require("mongoose");
require("dotenv").config();

function connectDb() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected!"))
    .catch(err=>console.log(err))
}

module.exports = connectDb;
