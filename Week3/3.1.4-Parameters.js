// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function addMath(num1, num2) {
  console.log("The first number is " + num1);
  console.log("The second number is " + num2);
return (num1 + num2);
}

// invoke the function and pass in two numbers
addMath(1, 2);
// invoke the function and pass in more than two numbers
addMath(1, 2, 3); // The third number disappears****
// invoke the function and pass in only one number
addMath(1); // The second number is undefined****
// change the function to set default values for the parameters
function addMaths(num1 = 2, num2 = 3) {         // Created identical funct. with diff. name for usability
  console.log("The first number is " + num1);
  console.log("The second number is " + num2);
return (num1 + num2);
}
// again, invoke the function and pass in only one number
addMaths(2);    // Outputs 6. Overwrites first param set value, keeps second param value.
// Rest Operator "..."
// add a rest operator to the function's parameters

// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
function addsMaths(num1 = 2, num2 = 3, ...numX) {         // Created identical funct. with diff. name for usability
  console.log("The first number is " + num1);
  console.log("The second number is " + num2);
  console.log("Additional numbers are " + numX);
  console.log(numX);
return (num1 + num2 + numX);  //numX gets turned into a catch all array of additional values.
}

addsMaths(1, 2, 3, 4, 5);
console.log(addsMaths(1, 2, 3, 4, 5));
