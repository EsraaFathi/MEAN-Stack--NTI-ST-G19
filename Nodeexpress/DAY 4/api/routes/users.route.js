const express = require("express");
const userRouter = express.Router();
const { isAuthn } = require("../middlewares/isAuthn.js");
const {
  getUsers,
  addUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controller/useers.controller.js");
//--CRUD OPERATION-->>get,post,put,delete
userRouter.get("/", getUsers);

userRouter.post("/", addUsers);
userRouter.post("/login", loginUser);

userRouter.put("/:id", isAuthn, updateUser);

userRouter.delete("/:id", isAuthn, deleteUser);

module.exports = { userRouter };
