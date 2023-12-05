// ? what does the function below return?
// The function below returns undefined? It outputs 42
/*
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
}
*/
// change the function above to return a value

function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
  return num;
}

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {
  return "Zap! - Short Circuited!";
  console.log(
    "This will never print because it is after the return statement."
  );
}

// ? will the following function short circuit?
// This function will not short circuit as there is no return statement.
/*
let height = 50;
function checkCircusRides() {
  if (height < 48) {
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}
*/
// change the function above to use short circuiting

let height = 50;
function checkCircusRides() {
  if (height < 48) {
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    console.log("Try the bumper cars!");
  }
  return "Caching! Money Maker!";             // Short circuit line
  console.log("Enjoy the roller coaster!");
}
