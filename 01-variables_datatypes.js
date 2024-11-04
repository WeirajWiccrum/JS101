var user1 = {
  name: "VS",
  age: 23,
  department: 'BCA',
  sem: '1st',
  company: undefined, // undefined as no job yet therefore can be re-assigned later.
  /*
    Variables declared without an initial value are automatically assigned undefined.
          let company;
          console.log(company); ---> undefined
    Object properties in JavaScript, however, don’t follow this same rule.
          Properties only exist if they are explicitly defined. 
          If you want an object to have a property with a value of undefined, you must write property: undefined.
  */
  hobby: null, // Hobbies are unknown (null explicitly indicates the absence of a value)
  hasHobby: false, // Doesn't have hobbies (boolean false is explicitly set)
};

console.log('Details of the user:', user1); // prints values in dev tools console when src'd in an HTML file.
console.log(typeof user1.name);
console.log(typeof user1.age);
console.log(typeof user1.company);
console.log(typeof user1.hobby); // returns "object", a historical mistake in JS.
console.log(typeof user1.hasHobby);

// Difference between `var`, `let` and `const`
  // With const, the variable is fixed after the initial assignment.
  const city = "New York";
  /*
  city = "London"; // Error: Assignment to constant variable
  */
  console.log(city); // Output: "New York"

  // With let, you can change the variable’s value (reassign) but cannot redeclare it in the same scope.
  let age = 25;
  age = 30; // Allowed: Reassignment
  /*
  let age = 35; // Error: Identifier 'age' has already been declared
  */
  console.log(age); // Output: 30

  // With var, you can do both redeclaration and reassignment.
  var nameOf = "Alice";
  var nameOf = "Bob"; // Allowed: Redeclaration
  nameOf = "Charlie"; // Allowed: Reassignment
  console.log(nameOf); // Output: "Charlie"

// Methods of redeclaring a variable in JS

  // Case 1: `var`
  var myName = "Viraj";
  var myName = "Ayush"; // Allowed with `var` (redefines global variable)

  // Case 2: `let`
  let age = 25;
  let age = 30; // SyntaxError: Identifier 'age' has already been declared
  // Fix
    let age = 25;
    {
      let age = 30; // Valid redeclaration in a separate block
      console.log(age); // Output: 30
    }
    console.log(age); // Output: 25

  // Case 3: `const`
  const city = "Mumbai";
  const city = "Delhi"; // SyntaxError: Identifier 'city' has already been declared
  // Fix
    const city = "Mumbai";
    {
      const city = "Delhi"; // Valid redeclaration in a separate block
      console.log(city); // Output: Delhi
    }
    console.log(city); // Output: Mumbai  

// Methods of reassigning a variable in JS

  // Case1: `var`
  var myName = "Viraj"; // Declared with `var`, value set to "Viraj"
  myName = "New Name";
  console.log(myName); // Output: "New Name"

  // Case2: `let`
  let age = 25; // Declared with `let`, value set to 25
  age = 30; // Reassignment (without `let`) is allowed
  console.log(age); // Output: 30

  // Case3: `const`
  const city = "Mumbai"; // Declared with `const`, value set to "Mumbai"
  /*
  city = "Delhi"; // TypeError: Assignment to constant variable
  */
  console.log(city); // Output: "Mumbai"

/* Question:
  Can a variable initially initialized globally using var be redeclared in a block using var again?
    Yes but, redeclaring it inside a block does not create a new variable exclusive to that block.
    It simply reuses and potentially reassigns the same global variable.
*/

// Fixing Code 1
  let myName = "Viraj";
  var myName = "Ayush"; // SyntaxError: Identifier 'myName' has already been declared
  function fun1() {
    console.log(myName); 
  }
  fun1();
  console.log(myName);

  // Fix #1
    var myName = "Viraj";
    {
      let myName = "Ayush"; // This `myName` is only in this block.
      console.log(myName); // Output: Ayush
      }
      console.log(myName); // Output: Viraj

  // Fix #2
    let myName = "Viraj";
    myName = "Ayush"; // Reassign without using `let` or `var` again.
    function fun1() {
      console.log(myName); // Output: Ayush
    }
    fun1();
    console.log(myName); // Output: Ayush