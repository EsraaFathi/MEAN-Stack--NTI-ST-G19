///-------DIALOG BOX -------->>BROWSER BUILT IN
// alert("hello external js"); // show info
// var confirm = confirm("R U SURE TO DELETE THIS PRODUCT?");
// alert(confirm);//true || false
// var data = prompt("how r u ?"); // input
// alert(data);

//-----------Console ----- developer tool-- built in //custom
//show info
// --warn --error
// console.log("DAY 1 JS");
// console.error(" name , age is required");
// console.warn("password pattern  a-z A-Z min 8");
// console.clear();

//--------- variables --------
//1- redeclration --2-reassign  3-- scope  4--hoisting
// var title = "DAY 1 JS";
// alert(title);

// es6 >> let || const

// let title1 = "DAY 1 JS let";
// alert(title1);

// const title2 = "DAY 1 JS const";
// alert(title2);

/// update  >> add value (feature) -- fix bug
// *****1- redeclration
// var title = "DAY 1 JS";
// console.log(title);

// var title = "DAY 2 JS";
// console.log(title);

// var salary = 1000;
// //calc >> 1000
// var salary = 4000;
// //calc >> 4000

// let title1 = "DAY 1 JS";
// console.log(title1);

// let title1 = "DAY 2 JS";//Identifier 'title1' has already been declared
// console.log(title1);

// const title2 = "DAY 1 JS";
// console.log(title);

// const title2 = "DAY 2 JS"; // Identifier 'title2' has already been declared
// console.log(title);
//*******--2-reassign */
// var title = "DAY 1 JS";
// console.log(title);

// title = "DAY 2 JS";
// console.log(title);

// let title = "DAY 1 JS";
// console.log(title);

// title = "DAY 2 JS";
// console.log(title);

// const title = "DAY 1 JS";
// console.log(title);

// title = "DAY 2 JS"; // Assignment to constant variable.
// console.log(title);

//*******--3-hoisting */

// console.log(title); //undefined
// var title = "DAY 1 JS";

// console.log(title); // Cannot access 'title' before initialization
// let title = "DAY 1 JS";

// console.log(title); //cannot access 'title' before initialization
// const title = "DAY 1 JS";

//*******--4- scope */
// ------global scope
// console.log(title);

// function printInfo() {
//   console.log(title);
// }
// printInfo();
//--------functional scope -- var--let --const

// function printInfo() {
//   var title = "DAY 1 JS";
//   console.log(title);
// }
// printInfo();
// // console.log(title); //title is not defined

// function printInfo1() {
//   let title1 = "DAY 1 JS";
//   console.log(title1);
// }
// printInfo1();
// // console.log(title1); //title is not defined

// function printInfo2() {
//   const title2 = "DAY 1 JS";
//   console.log(title2);
// }
// printInfo2();
// // console.log(title2); //title is not defined

//---------block scope --- {}
// var passed = true;
// if (passed) {
//   var age = 20;
//   console.log(age);
// }
// console.log(age);

// var passed = true;
// if (passed) {
//   let age = 20;
//   console.log(age);
// }
// console.log(age);// age is not defined

// var passed = true;
// if (passed) {
//   const age = 20;
//   console.log(age);
// }
// console.log(age); //age is not defined

//******DATA TYPES --primitive --- non primitive   */
//primitive -- string , number, boolean ,undefined ,null ,symbol

let title1 = "DAY 1 JS let";
console.log(typeof title1);
title1 = 50;

let age = 50;
console.log(typeof age);

let passed = true;
console.log(typeof passed);

let address;
console.log(typeof address);

let id = Symbol("123");
console.log(typeof id);

//-- non primitive ---- class function object{} array[]
function sayHello() {
  //logic
}
sayHello();
console.log(typeof sayHello);

//--------rusable ----schema---
// class Student {
//   //properties
//   age;
//   fname = "ahmed";

//   constructor(agex, outName) {
//     this.age = agex;
//     this.fname = outName;
//   }
//   //methods--logic
//   print() {
//     //logic
//     console.log(this.age, this.fname);
//   }
// }

// console.log(new Student(20));
// let std1 = new Student(20, "ali");
// console.log(std1);
// console.log(std1.age);
// console.log(std1.fname);

// std1.print();

///---------object --{}
// let std2 = {
//   age: 20,
//   fname: "sara",
//   address: { city: "cairo", str: "nile" },
//   grades: [20, 30],
//   print: function print() {
//     console.log("jlgsdijglakfjpierjmf");
//   },
// };
// //acess
// //--DOT NOTATION .
// console.log(std2);
// console.log(std2.age);
// std2.print();
// //
// //--pracket NOTATION ["key"]
// console.log(std2["grades"]);
// console.log(std2["age"]);

// //update
// console.log((std2.age = 50));
// console.log(std2);

// //add
// console.log((std2.course = "html"));
// console.log(std2);

// //delete
// delete std2.age;
// console.log(std2);

//***************RECAP */
//*web development process >> front - backend - DB */
//** browser >> html css js */
//*js history // 1997 -MOCHA - LIVESCRIPT - VANILLA JAVASCRIPT -- ECMASCRIPT --updates >>ES6- 2015
//* IDE --VS CODE
//* INLINE - INTERNAL EXTERNAL
//* ---DIALOG BOX --- CONSOLE TOOL
//* ---VARIABLES --- VAR >>ES6 >> LET || CONST
//* --- DIFF >> REDCLRATION  -- REASSIGN -- HOISTING -- SCOPES
//* -- DATA TYPES -- PRIMITIVE DT -- NON PRIMITIVE
