// Logical Operators
// what do you expect each line to print?
console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false
console.log(!(true && false)); //true
console.log(false || !false); //true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); //false, actually prints null? Odd...
console.log(!``); //true
console.log(!(1 && "false")); //false
console.log(NaN || !"true"); //false

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 34;

if (age > 10) {
  console.log("full menu");
} else if (age < 10) {
  console.log("kids menu");
} else {
  console.log("We don't serve ten year olds here.");
}

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *

if (!num || false) {
  console.log("The number is zero");
} else {
  console.log("Error in logic");
}
