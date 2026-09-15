const fs = require("fs");
const { printData } = require("../services/users.service.js");
const { userModel } = require("../models/users.model.js");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
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
      res.json({ message: "users added successfully", data: "" });
    })
    .catch((err) => {
      console.log("error when adding users", err);
      res.json({ message: "error occurred while adding users", err: err });
    });
};

const updateUser = (req, res) => {
  userModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "user not found" });
      }

      res.json({ message: "user updated successfully", data: data });
    })
    .catch((err) => {
      console.log("error when updating user", err);
      res
        .status(400)
        .json({ message: "error occurred while updating user", err: err });
    });
};

const deleteUser = (req, res) => {
  userModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "user not found" });
      }

      res.json({ message: "user deleted successfully", data: data });
    })
    .catch((err) => {
      console.log("error when deleting user", err);
      res
        .status(400)
        .json({ message: "error occurred while deleting user", err: err });
    });
};

const loginUser = (req, res) => {
  //logic
  const userEmail = req.body.email;
  const userPass = req.body.password;
  // if (userEmail && userPass) {
  //   //2- find
  // }
  //1-
  if (!userEmail || !userPass) {
    return res.status(403).json({ message: " PLZ,ENTER EMAIL && PASSWORD" });
  }
  //2-find -- [{}]--findOne ---{}
  userModel
    .findOne({ email: userEmail })
    .then((userDB) => {
      if (!userDB) {
        return res.status(403).json({ message: "INVALID EMAIL OR PASSWORD" });
      }
      //3- check pass
      bcrypt
        .compare(userPass, userDB.password)
        .then((valid) => {
          if (!valid) {
            return res.status(403).json({ message: "INVALID EMAIL OR PASS" });
          }
          // two pass is true >> email is true

          //4- genrate access token
          var token = jwt.sign(
            { id: userDB._id, email: userDB.email },
            "secret-sign-nti-g19",
          );
          res
            .status(200)
            .json({ message: "U LOGGED SUCESSFULLY ", token: token });
        })
        .catch((err) => {
          console.log("err in compare db", err);
          res.status(500).json({ message: "error catched , try again " });
        });
    })
    .catch((err) => {
      console.log("error when filter user", err);
      res.status(500).json({ msg: "error catched , try again " });
    });
};

module.exports = { getUsers, addUsers, updateUser, deleteUser, loginUser };
