// create an Array using an Array literal
const dinner = ["Cereal", "Ham", "Eggs", "Pizza"];
// access the 1st item in the Array
dinner[0];
// access the last item in the Array
dinner[3];
// print the length of the Array
console.log(dinner.length);
// use the length property to access the last item in the Array
console.log(dinner[dinner.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let newValue of dinner) {
const dinner2[newValue] = dinner[newValue] + "New";
}
console.log(dinner2);