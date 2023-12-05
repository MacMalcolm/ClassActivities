const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
console.log("first a @: ", arr.indexOf("a"));
console.log("first b @: ", arr.indexOf("b"));
console.log("first c @: ", arr.indexOf("c"));
// find the last index of "a", "b", and "c"

console.log("last a @: ", arr.lastIndexOf("a"));
console.log("last b @: ", arr.lastIndexOf("b"));
console.log("last c @: ", arr.lastIndexOf("c"));
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
 /*
while (arr.indexOf("a") !== arr.lastIndexOf("a")) {
   if (arr.indexOf("a") === arr.lastIndexOf("a"))
   return arr;
else 
    arr.splice(arr.lastIndexOf("a"), 1);
console.log("Current array: ", arr.join(" "));
}
*/

for ( let i = arr.lastIndexOf("a"); arr.indexOf("a") !== arr.lastIndexOf("a"); i--) {
if (arr[i] === "a")
arr.splice(i,1);
console.log(`"Currently i: ${i}"`);
console.log("Current array: ", arr.join(" "));
}