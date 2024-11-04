// 1. Global Scope
// 2. Function/Local Scope
// 3. Block Scope

// What is meant by `var` being globally/functionally scoped, `let` & `const` being blocked scoped?

  // Case of `var`
  var x = 9;
  console.log("The value of `x` after initial declaration", x);
  // Output: 9
  {
    var x = 19; // Redeclares and reassigns `x` globally.
  }
  console.log("The value of `x` after redeclaraitons from a Block is", x);
  // Output: 19, as the reassignment inside a block affects `x` globally
  function testScope1() {
    var x = 29; // `x` is accessible throughout the function.
    console.log("The value of `x` after redeclaraitons from a Function is", x);
    // Output: 29, as `x` is function-scoped within `testScope1`.
  }
  testScope1();
  console.log("Value of `x` outside function scope", x);
  // Output: 19. This proves `var` is fucntion scoped.
  
  // Case of `let`
  let z = 9;
  console.log("The value of `z` after initial declaration:", z); 
  // Output: 9
  {
    let z = 19; 
    // This `z` is scoped to the block
    console.log("Object Value:", z);
    // Output: 19, as it refers to the local-block-scoped `z`
  }
  console.log("Value of `z` after redeclaration in a block:", z);
  // Output: 9 (global value)
  function testScope() {
    let z = 10; // Declaring a new `z` with `let` inside the function
    console.log("Value of `z` inside function scope:", z);
    // Output: 10, referring to the local-function-scoped `z`
    }
    testScope();
    console.log("Global value of `z` after function call:", z);
    // Output: 9, showing the global `z` remains unchanged
  
    // Case of `const` : const behaves similarly to let in terms of block and function scoping but prohibits reassignment.
    
    /* Key Takeaways:
      1. `var` is sensitive to the function keyword, meaning any var declaration inside a function applies throughout that entire function.
      2. This means by using `var` you can access variables before initalization.
    */

// Hoisting
  function fun() {
    console.log(y);
    var y = 10; // let y = 10; --> ReferenceError: Cannot access 'y' before initialization.
  }
  fun(); // Output: undefined
  /* Under the hood:
  function fun() {
  var y;          // Declaration is hoisted to the top, but not the assignment
  console.log(y); // Logs the current value of `y`, which is `undefined` at this point
  y = 10;         // Assignment happens here
  }
  */
 // This is what is meant by var declaration inside a function applies throughout that entire function.

// Fixing Code 2
function test() {
  var x = 10; // `x` is declared in the function scope with `var`
  if (true) {
    var x = 20; // Redeclaration of `x` will overwrite the previous `x` in the function scope
    let y = 30; // `y` only exists inside this `if` block
  }
  console.log(x); // Output: 20, because the `var x` inside the `if` block overwrites the outer `x`
  console.log(y); // ReferenceError: `y` is not defined outside the `if` block => JS can't access `y` outside the block.
}
test();
// Fix #1
// Fix #2
// Fix #3

// Nested Scopes : Going one scope outside.