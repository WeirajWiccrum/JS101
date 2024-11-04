// Operators
  var values = {
    x: 31,
    y: 69
  };
  console.log(!(values.x > values.y)); 
        // 31 > 69 is false, and NOT false is true, so the program returns true.
  console.log(values.x += values.y); 
        // The value of x gets reassigned to 100 (x = x + y)
  console.log(!(values.x > values.y)); 
        // 100 > 69 is true, and NOT true is false, so the program returns false.

// Abstract and Strict Equality Operator
console.log(1 == '1'); // true
/*
Why?
The abstract equality operator (`==`) performs type coercion. 
Here, the string '1' is converted to the number 1, so the comparison becomes 1 == 1.
Since both values are now the same, the result is true.
*/
console.log(1 === '1'); // false
/*
Why?
The strict equality operator (`===`) does not perform type coercion.
It compares both the value and the type. 
Here, 1 is a number and '1' is a string, so the comparison returns false because the types are different.
*/
console.log(1 === 'VS'); // false as 1 === NaN
/*
Why?
1 is a number and 'VS' is a string. Since strict equality doesn't perform type coercion,
the types are different, so the comparison returns false.
Note: Comparing a number with a non-numeric string (like 'VS') does not convert the string into a number,
it just returns false because the types don't match.
*/

// Increment Operators
// Unary and Ternary Operators: widely used in React for inline conditional rendering and frequent toggling boolean states.
