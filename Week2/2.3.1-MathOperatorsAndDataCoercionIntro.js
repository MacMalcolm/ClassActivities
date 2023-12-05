// What should we expect to print?

// Basic Math
console.log(1 + 2 * 3);             //7, Multiplication first, then addition
console.log((1 + 2) * 3);           //9, Parenthesis first
console.log(40 / 5 - 2 ** 3 );      // 0, exponent, div, then subtract
console.log(6 % 2);                 // 0, no remainder

// Adding/Concatenating Strings
console.log("10" + "5");            // 105
console.log("Hello " + "world");    // Helloworld

// Data Coercion
console.log("2" + 2);               // 22, as a string
console.log(2 + true);              // 3, boolean true is the same as 1, so 2 + 1 = 3.
console.log(true + true + "true" + "false");  // 1 + 1 + "true" + "false" = 2truefalse
console.log(1 + 1 + "2" + "3");     //  223, Performs math until string converts all integers into strings.