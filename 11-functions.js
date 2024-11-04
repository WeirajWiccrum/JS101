function isEvenOrOdd(num){
    if (num % 2 == 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}
let a = 10;
let b = 9;
let c = 28;
 console.log("A is ", is isEvenOrOdd(a));
 console.log("B is ", is isEvenOrOdd(b));
 console.log("C is ", is isEvenOrOdd(c));

function isEven (num){
    if (num % 2 == 0){
        return true;
    } else{
        return false;
    }
}
let x = 13;
let result = isEven(x);
if (result == true){
    console.log('Even')
} else {
    console.log('Odd')
}
// Function to print even numbers between a given range (excluding boundaries) by using the logic function
 function getEvenNumbersBetween(start, end) {
    let evens = [];
    for (let e = start + 1; e < end; e++) {
      if (e % 2 == 0) {
        evens.push(e);
      }
    }
    return evens;
  }
  let startRange = 2;
  let endRange = 26;
  console.log('Even numbers between 2 and 26:', getEvenNumbersBetween(startRange, endRange).join(', '));

// Function to calculate the sum of numbers from 'initial' to 'final' and check in step if the sum is prime or not.
  function calculateSum(initial, final) {
    let sum = 0;
    while (initial <= final) {
      sum += initial;
      initial += 1;
    }
    return sum;
  }
  let initial = 1;
  let final = 10;
  console.log('Sum of numbers from 1 to 10:', calculateSum(initial, final));

// Difference between functional statements
  // Code 1
    {
      function fun() {
        console.log("123");
     }
    }
    console.log(fun());
    /* Outputs:
    123
    undefined
    */
  // Code 2
    {
      function fun() {
        return("123");
      }
    }
    console.log(fun());
    // Outputs: 123
  // Code 3
    {
      function fun() {
      return("123");
      }
    }
    console.log(fun);
    // Outputs: [Function: fun]