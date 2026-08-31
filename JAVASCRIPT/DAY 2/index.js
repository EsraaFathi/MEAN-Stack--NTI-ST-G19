//**Conditions >>>>if if else  switch   es6>>>ternary operators */
let grade = 30;
let age = 25;
//if(condition ){ //logic }

// if (grade < 100 && grade > 60 && age > 20) {
//   //logic
//   console.log("U R VERY GOOD");
// } else if (grade < 50 && grade > 10) {
//   console.log("U R  GOOD");
// } else if (grade < 10 && grade > 0) {
//   console.log("U R not passed");
// } else {
//   console.log("there is error in your grade");
// }

///---  switch ---es6--
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
// switch (grade) {
//   case 90:
//     //logic
//     console.log("U R VERY GOOD");
//     break;
//   case 40:
//     //logic
//     console.log("U R  GOOD");
//     break;
//   case 10:
//     //logic
//     console.log("U R  not passed");
//     break;

//   default:
//     console.log("there is error in your grade");

//     break;
// }

//*---loops --->> for  while do while foreach for  of   for in --//
// for (start; condition; step){
//    //logic
//  }

//0//1//2//3//4//
// for (let counter = 0; counter < 5; counter++) {
//   //logic
//   console.log("hello");
// }
// let counter = 0;
// while (counter < 5) {
//   console.log("hello while");
//   counter++;
// }

// do {
//   console.log("hello do while");
// } while (grade > 50);

// for of

// let std1 = {
//   name: "ali",
//   age: 20,
//   passed: true,
// };
// console.log(std1.age); //dot notation

// console.log(std1["age"]); //pracket notation

// for (key in std1) {
//   //logic
//   console.log(key);
//   // console.log(std1.key);//undefined
//   console.log(std1[key]);
// }
// for (key of std1) {
//   //logic
//   console.log(key);
// }//std1 is not iterable

//
// let std2 = ["ahmed", 20, false];
// for (index in std2) {
//   //logic
//   console.log(index);
//   console.log(std2[index]);
// }

// for (item of std2) {
//   //logic
//   console.log(item);
// }

//*BOM ---- DOM ----//
//BOM >> JAVASCRIPT >> BROWSER OBJECT MODEL
// BOM --- WINDOW { //prop // methods //objects}
//methods
// window.alert("jsfuidjhkfg");
// window.console.log("asdpkfporjkfgsio");

// BOM --- objects >> location{}-  navigaator {} - screen{} - history{} - Dom{}
// console.log(window.location);

//BOM >>DOM -- DOCUMENT OBJECT MODEL(html)
//access -- update -- add -- remove

//access
// let h1tags = window.document.getElementsByTagName("h1");
// console.log(h1tags[0]); //HTMLCOLLECTION

// let paragrph1 = document.getElementById("ID1");
// console.log(paragrph1); //object

// let cls1tags = document.getElementsByClassName("cls1");
// console.log(cls1tags); //HTMLCollection

// let qrueryTag = document.querySelector(".cls1");
// console.log(qrueryTag); //

// let qrueryTags = document.querySelectorAll(".cls1");
// console.log(qrueryTags); //NodeList

// let qrueryTagId = document.querySelector("#ID1");
// console.log(qrueryTagId); //

// let qrueryTag2 = document.querySelector("#id2");
// console.log(qrueryTag2);

//--update-- // style // content
// background-color
// h1tags[0].style.color = "red";
// h1tags[0].style.backgroundColor = "blue";
// h1tags[0].style.fontSize = "50px";

// h1tags[0].textContent = " HELLO JAVASCRIPT";
// h1tags[0].innerText = " <button> innerText </button>";
// h1tags[0].innerHTML = "<button> innerText </button> ";

// //--delete------
// paragrph1.remove();

//--add---
// let newTag = document.createElement("h1"); //<h1></h1>
// console.log(newTag);

// newTag.textContent = "new element added ";

// document.body.appendChild(newTag);
// // document.body.append(newTag ,  ,   , );
// document.body.prepend(newTag);

// qrueryTag2.appendChild(newTag);

//*---------EVENTS---actions-----
//-----EVENTS IN JS >> keyboard -- mouth -- screen -- form -----
//---3ways ..

function sayHello(event) {
  alert("welcome to my site");
  console.log(event);
}

//2-- attribute event handler

// paragrph1.onmouseover = () => {
//   paragrph1.style.color = "red";
//   paragrph1.style.backgroundColor = "green";
// };

// paragrph1.onmouseout = () => {
//   paragrph1.style.color = "yellow";
//   paragrph1.style.backgroundColor = "gray";
// };

// //-3--- addEventLisnter
// // h1tags[0].addEventListener( evenName,()=>{})

// let Fname = document.getElementById("Fname");

// Fname.addEventListener("keydown", (event) => {
//   console.log(event);
//   if (event.ctrlKey && event.key == "e") {
//     console.log("you pressed ctrl+e");
//   }
//   //  if (event.code==17) {
//   //    console.log("you pressed ctrl");
//   //  }
// });

//*---SYNC && ASYNC {settimeout -- fetch data --- --  }----
// setTimeout(()=>{},time in ms)
// setTimeout(() => {
//   //logic
//   console.log("setTimeout");
// }, 3000);

// console.log("hello");

// clearInterval(
//   setTimeout(() => {
//     //logic
//     console.log("setTimeout");
//   }, 3000),
// );

// setInterval(() => {
//   //logic
//   console.log("setInterval");
// }, 3000);

//*---fetch api ------- http req

// XMLHTTPREQUEST  >> open req .. req .. send .. res..

//es6 >>fetch

// fetch(url, {
//     methode: "GET POST PUT DELETE ",
//     headers: {
//         Accept_Language: "en",
//         token:"kgsropk903487634"
//     },
//     body: {
//         "name": "ali",
//         "age":20
//     }
// })

fetch("https://fakestoreapi.com/products", { methode: "GET" })
  .then((res) => {
    console.log(res);
    //Response cannot deal with it
    return res.json();
  })
  .then((products) => {
    console.log(products);

    //loop
    //foreach //map --//for of in
    products.forEach((product) => {
      let newElem = document.createElement("h1");
      newElem.innerText = product.title;
      document.body.prepend(newElem);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//------RECAP----------

//-----LOOPS && CONDITIONS ------
// ---------BOM>>{LOCATION ,, NAVIGATOR ,, HISTORY ,, DOM }
//---------DOM >> ACESS -- UPDATE -- ADD -- REMOVE
//---------EVENTS----- { MOUTH - KEYBOARD -- SCREEN --SCROLL FORM --}
//---------SYNC && ASYNC ----------
//--------CALLBACK >> CALLBACK HELL  >>> ES6 >> PROMISE
//--------PROMISE >> .THEN( SECUSESS ) .CATCH(ERROR) // TRY { SUCCESSS } CATCH {}
// ------- HTTP REQ STRUC  >>> FETCH () >> CALL API

///TASK///
//IN JS IN DOM
// CREATE BUTTON(GET DATA)
// CLICK ON IT >> FETCH THIS DATA FROM BACKEND
