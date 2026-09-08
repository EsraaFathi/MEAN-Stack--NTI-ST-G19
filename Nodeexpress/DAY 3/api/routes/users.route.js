const express = require("express");
const userRouter = express.Router();
const { getUsers } = require("../controller/useers.controller.js");
const { addUsers } = require("../controller/useers.controller.js");
//--CRUD OPERATION-->>get,post,put,delete
userRouter.get("/", getUsers);

userRouter.post("/", addUsers);

// userRouter.put("/", updateUsers);

// userRouter.delete("/", deleteUsers);

module.exports = { userRouter };
