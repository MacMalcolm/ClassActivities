// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "Morning";
// Create a variable "greeting" that references a template literal
let greeting = `"Good ${timeOfDay}"`;
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
timeOfDay = "Good Morning!";
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newVariable;
// Print the new variable and its type
console.log(newVariable);
// What type should we expect?
// Undefined type <-
// Assign the variable a value that indicates the variable is purposely blank
newVariable = null;
// What value should we assign?
// Null <-
// Print the variable and its type again
console.log(newVariable);
console.log(typeof newVariable);
// What type should we expect?
//Null <- *Ran code, discovered Object type.
// Try to print a variable that does not exist
console.log(mew);
// What should we expect to print in the CLI?
//compiler error? Undefined <-
// Print "greeting" again
console.log(greeting);
// Will this line run?
//Yes <-, *ran code, discovered it will not run due to error with print var that does not exist.
