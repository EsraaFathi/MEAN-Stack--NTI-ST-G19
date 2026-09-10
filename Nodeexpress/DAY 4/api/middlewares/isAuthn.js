const { error } = require("console");
var jwt = require("jsonwebtoken");

const { promisify } = require("util");

const isAuthn = (req, res, next) => {
  //logic
  const token = req.headers.esraa;
  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ msg: "U ARENOT UTHNTICATED,TOKEN IS NOT PROIVDEd" });
  }

  promisify(jwt.verify)(token, "secret-sign-nti-g19")
    .then((decode) => {
      if (!decode) {
        return res.status(401).json({ msg: "TOKEN IS NOT VALID" });
      }
      console.log(decode);
      // check  roles >> authrization >>
      next();
    })
    .catch((error) => {
      console.log("err in verify token", error);
      res.status(500).json({ msg: "TOKEN IS NOT VALID", err: error });
    });
};
module.exports = { isAuthn };
