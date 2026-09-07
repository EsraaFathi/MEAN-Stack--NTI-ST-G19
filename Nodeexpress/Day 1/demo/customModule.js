function sum(a, b) {
  console.log("Calculating the sum of", a, "and", b, "=", a + b);
}

function multiply(a, b) {
  console.log("Calculating the product of", a, "and", b, "=", a * b);
}
//export --- require
module.exports = { sum, multiply };

//2-
//export -- import >> es6
// export function sum(a, b) {
//   console.log("Calculating the sum of", a, "and", b, "=", a + b);
// }

// export function multiply(a, b) {
//   console.log("Calculating the product of", a, "and", b, "=", a * b);
// }
//export --- require
