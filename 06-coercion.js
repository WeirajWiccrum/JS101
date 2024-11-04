// Short-Circuiting : commonly used in React to conditionally render components or fallback values.
var values = {
    x: 31,
    y: 69
  };
  
console.log(values.x < values.y && values.y < 420); 
// 100 < 69 is false, so the program returns false immediately (short-circuiting).
console.log(values.x > values.y || values.y > 420); 
// 100 > 69 is true, so the program returns true immediately without checking the second condition.
console.log(10 && 6); // Returns 6. 
/*
Why? 
Since 10 is a truthy value (not null, undefined, false, etc.), the AND operator returns the second value, 6, because both are truthy.
*/
console.log(null && 6); // Returns null. 
// Since null is falsy, AND short-circuits and returns null.
console.log(6 || null); // Returns 6. 
// Since 6 is truthy, OR doesn't check further and returns 6.
/*
Explanation of AND and OR behavior:
AND (`&&`) returns the first falsy value, or the last value if all are true.
OR (`||`) returns the first truthy value, or the last value if all are false.
*/  
console.log((10 > 6) && (6 > 7)); // Returns false. 
/*
Why? 
The first comparison (10 > 6) evaluates to true, but the second comparison (6 > 7) is false. 
For AND (`&&`) to return true, both comparisons need to be true.
In contrast, `console.log(10 && 6);` evaluates the values for their "truthiness," 
not for comparison, and returns the last truthy value, which is 6.
*/