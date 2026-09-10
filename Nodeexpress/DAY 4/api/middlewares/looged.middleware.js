function myMiddleware(req, res, next) {
  //logic >> apply on any req || res
  console.log("myMiddleware", req.method);

  next(); //next middleware
}
module.exports = { myMiddleware };
