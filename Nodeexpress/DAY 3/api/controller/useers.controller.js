const fs = require("fs");
const { printData } = require("../services/users.service.js");
const { userModel } = require("../models/users.model.js");
//db.createCollection("users");
const getUsers = (req, res) => {
  //db.users.find({})
  //aggregate >> $lookup
  userModel
    .find()
    .then((data) => {
      console.log("data", data);
      res.json({ message: "users fetched successfully", data: data });
    })
    .catch((err) => {
      console.log("error when fetchind users", err);
      res.json({ message: "error occurred while fetching users", err: err });
    });
};

const addUsers = (req, res) => {
  console.log("body", req.body); //json
  //db.users.insertOne({})
  userModel
    .create(req.body)
    .then(() => {
      res.json({ message: "users added successfully" });
    })
    .catch((err) => {
      console.log("error when adding users", err);
      res.json({ message: "error occurred while adding users", err: err });
    });
};
// >>UPDATE USER >> findByIdAndUpdate
// >> DELETE USER >> findByIdAndDelete
module.exports = { getUsers, addUsers };
