// setTimeout(() => {
//   console.log("DAY 1 NDE JS ");
// }, 3000);

//**---------MODULES>>>built in // custom */
// const obj = require("./customModule.js");
// console.log(obj);
// obj.sum(10, 20);
// obj.multiply(10, 20);
///--------es6 --destruction--------
// const { sum, multiply } = require("./customModule.js");
// sum(10, 20);
// multiply(10, 20);
//======IMPORT ES6========
// import { sum, multiply } from "./customModule.js"; // sum(10, 20);
// multiply(10, 20);
// sum(10, 20);

//**---------FILE SYSTEM MODULES>>>built in--fs */
const fs = require("fs");
//---CRUD---
//*------READ FILE ------->>readfileSync ,, readfile>>Async
// fs.readFileSync("pathfile","encodingType //utf8");
// const data = fs.readFileSync("./data.txt", "utf8");
// console.log(data);
// console.log("File read successfully");
//code

// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (data) {
//     console.log(data);
//   }
//   if (error) {
//     console.log(error);
//   }
// });

// console.log("File read successfully");

//*------WRITE FILE ---add---->>writefileSync ,, writefile>>Async
// fs.writeFileSync(
//   "./data.txt",
//   "Hello, this is a new content added to the file.",
// );
// console.log("File written successfully");

// fs.writeFile(
//   "./data.txt",
//   "22222222222222222222222222Hello, this is a new content added to the file.",
//   (err) => {
//     if (err) {
//       console.error("Error writing file:", err);
//     } else {
//       //logic
//       console.log("File written successfully");
//     }
//   },
// );
// console.log("3333333333333333333");

//*------UPDATE FILE ---add---->>appendfileSync ,, appendfile>>Async

// format
// fs.appendFileSync(
//   "./data.txt",
//   "444444444444444444444444444444444444, this is a new content added to the file.",
// );
// console.log("File updated successfully");
// console.log("444444444444444444444444");

// //*------DELETE FILE ------->>unlinkSync ,, unlink>>Async

// fs.unlinkSync("./data.txt");
// console.log("File deleted successfully");

//*========PROCESS=====BUILT IN OBJ // NODE JS ==== INFORMATION ABOUT CURRENT PROCESS
console.log(process.argv);
if (process.argv[2] === "list") {
  //logic
  fs.readFile("./data.txt", "utf8", (error, data) => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  });
}

if (process.argv[2] === "add") {
  process.argv[3];
  //logic
  fs.writeFile("./data.txt", process.argv[3], (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      //logic
      console.log("File written successfully");
    }
  });
}
