// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number

// 2) create a variable to represent the current total

// 3) write a while loop that sums the numbers from 1 to 100

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100

let counter = 0;

let total = 0;

while (counter <= 100) {
  console.log(counter);
  counter++;
}

for (counter = 0; counter <= 100; counter++) {
  total = total + counter;
}
console.log(total);
