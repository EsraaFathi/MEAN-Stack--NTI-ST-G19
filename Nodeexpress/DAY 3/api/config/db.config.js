const mongoose = require("mongoose");
const { MONGO_LINK } = require("./env.config.js");
const connectDB = () => {
  return mongoose
    .connect(MONGO_LINK)
    .then(() => console.log("connected to db sucessfully !"))
    .catch((err) => console.log("error from db", err));
};
module.exports = { connectDB };
