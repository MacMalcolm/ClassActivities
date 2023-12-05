const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const savedNums = [];
savedNums.push(nums.pop());
savedNums.push(nums.pop());
// remove each of the first two items with shift(), saving each item to a variable
savedNums.push(nums.shift());
savedNums.push(nums.shift());
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(savedNums.pop());
nums.push(savedNums.pop());
nums.unshift(savedNums.pop());
nums.unshift(savedNums.pop());
console.log(nums);
