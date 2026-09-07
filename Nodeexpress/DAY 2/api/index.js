///==NODE JS >>USING FRAMEWORK>> EXPRESS JS -- NEST JS
const express = require("express");
const app = express();
const fs = require("fs");
//  http req>> 1-url  2- methode[get-read,post-add,put/patch-update,delete]  3- body{ //data }  4- headers{ extra info}
//backend >> restfull api >> 1- recive req from front && send res to front
//

app.use(express.json()); //middleware >> to parse json data from req.body
//*--ROUTES--(path)//endpoints-->>collection of routes
//-users>>get,post,put,delete, doctors>>get,post,put,delete// patients>>get,post,put,delete// rooms>>get,post,put,delete// appointments>>get,post,put,delete

//TOOLS >>>TEST API  >> postman , dog api ,swagger , extenstion
app.get("/users", (req, res) => {
  //logic
  fs.readFile("./data.json", "utf8", (error, data) => {
    if (data) {
      console.log(data);
      res.send(data);
    }
    if (error) {
      console.log(error);
    }
  });
  console.log("method", req.method);
});

app.post("/users", (req, res) => {
  //logic
  console.log("body", req.body); //js{}

  //   const jsData = JSON.parse(req.body); //json >>js obj {}
  //   console.log("jsData", jsData);
  //   const jsonData = JSON.stringfy(jsData); // js >> json obj {}
  fs.writeFile("./data.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      //logic
      console.log("File written successfully");
      res.send("post method");
    }
  });
});
//app.get//post//put//delete

//2-- send query to db  && recive res from db

app.listen(5000, () => {
  //logic
  console.log(`my app listening on port 5000 successfully`);
});

///======MODULES >> CUSTOM MODULES //packages>> NPM // node package manager
//=====npm init -y >>package.json >>dependencies>>express -- devdependencies>>nodemon
//====EXPRESS JS >>NEST JS >>MERN STACK
//==create server >> listen to port >> recive req from front >> send res to front
//URL STRC
//localhost:5000/users >>get,post,put,delete
//RESTFULL API >> 1- recive req from front && send res to front ,,2-- send query to db  && recive res from db

//ROUTES--path --endpoints >> collection of routes >>users>>get,post,put,delete, doctors>>get,post,put,delete// patients>>get,post,put,delete// rooms>>get,post,put,delete// appointments>>get,post,put,delete
// /users >>get,post
//>> POSTMAN >> TEST API
//TASK >> PUT ,, DELETE

/////====day 3
// FOLDER STRUC --- CONNECT DB >> CRUD OPERATION
