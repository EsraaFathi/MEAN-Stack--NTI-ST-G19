console.log(" hello ts ");
var title = "hello";
// title = 7;
var x;
x = 9;
x = { city: "cairo" };
var y;
y = true;
y = false;
// y = "esraa";
var data;
// data=[2,3,4] //error
var id;
if (typeof id == "string") {
    //logic as string
}
else if (typeof id == "number") {
    //logic as number
}
//*-------FUNCTION--------return --- paramters-
// function welcome(): void {
//   console.log(" hello ts ");
// }
// welcome();
// function welcome(): string {
//   console.log(" hello ts ");
//   return "hello";
// }
// welcome();
// function welcome(name: string, age: number): string {
//   console.log(" hello ts ");
//   return `hello ${name}`;
// }
// welcome("ali", 30);
//*------------GENERIC-----------
// function welcome<T, U>(name: T, age: U): string {
//   console.log(" hello ts ");
//   return `hello ${name}`;
// }
// welcome<string, number>("ali", 40);
// welcome<number, boolean>(8, true);
//*--------- object --------------
//instance of class >>constructor creation
class Car {
    //properties
    color;
    model;
    //constructor
    constructor(x, y) {
        ((this.color = x), (this.model = y));
    }
    // methods
    move() {
        console.log(" car move");
    }
}
var car1 = new Car("red", 2020); //{color:"red",model:2020}
var car2 = new Car("gray", 2021); //{color:"red",model:2020}
var carr1 = { color: "red", model: 2020 };
// var carr2:Carr = { color: "gray", model: 2012, price: 9000000000 };//error
var carr2 = [
    { color: "red", model: 2020 },
    { color: "red", model: 2020 },
    { color: "red", model: 2020 },
];
//*---------- ARRAY ----------
var arr1 = [2, 3, 4];
// arr1=["sss",4,5]//error
///----------------------------TUPLES --------------[DT]>>FIXED LENGTH ,FIXED DT
var arr2 = ["ali"];
// arr2=["ali","sara"]//ERROR LENGTH
// arr2=[30]//error dt
var arr3 = [8, true];
// arr3=[7,7,false]
// arr3=["ali,true"]
//-----------------------------UNION ----------NOT FIXED LENGTH --NOT FIXED DT  >> ()[]
var arr4;
arr4 = [4, 5, 6, 7, 8, "wael", "sara", 60];
// arr4 = [4, 5, 6, 7, 8, "wael", "sara", 60,true];//error
//variable
var id2 = 4;
id2 = "kmfkme23e";
//----------------------ENUM--------------
var Direction;
(function (Direction) {
    Direction["UP"] = " redirect up";
    Direction["DOWN"] = " redirect down";
    Direction["LEFT"] = " redirect left";
    Direction["RIGHT"] = " redirect right";
})(Direction || (Direction = {}));
var map = Direction.UP;
console.log(Direction.UP);
console.log(Direction.DOWN);
console.log(Direction.LEFT);
console.log(Direction.RIGHT);
//*----------MODULES-----------------
import { sum } from "./modules/export.js";
sum(5, 7);
//*---------DECTRATORRRRRRRRRRRR--------------->>SELF STUDY
//=========ts >>supset of JS +  DATA TYPE >>> MICROSOFT 2012
///==========INSTALL TS COMPILER >>> RUN COMMAND >> tsc filepath --watch
//=========== PRIMITIVE DATA TYPE===
//=========== PRIMITIVE DATA TYPE===
// object >> CLASS || INTERFACE
// ARRAY >> TUPLES || UNION
///========FUNCTIONS -======
//========GENERIC <T> ========
//=======ENUMS ======= SELECTED VALUES >>MOPTIONS
//======MODULES >> IMPORT // EXPORT
// DECREATORRRRRRRRRRRRRRRRRRRRR
