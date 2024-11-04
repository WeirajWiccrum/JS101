//LEXICAL SCOPING
var dog = "Tyson"; // dog -> Global Scope
// 1. Execution Starts: "Tyson" is allocated to the global variable `dog`. 
function askAge(question) { // askAge -> Global Scope, question -> `askAge` scope.
  console.log(dog, question);
  // 6. During execution, the value of `dog` is not found in the local scope of `askAge`, so it checks the outer scope.
  // 7. The value of `dog` is found at the global level as "Tyson". 
  // 8. Program logs "Tyson".
  // 9. The value of `question` is found as "Age?" in the current scope.
  // 10. Program logs "Age?".
}
function fun() { // fun -> Global Scope
  var dog = "Scooby"; // dog -> `fun` Scope
  // 3. "Scooby" is assigned to the local variable `dog` scoped to `fun`.
  askAge("Age?"); 
  // 4. `askAge` is called by the `fun` function because both functions are defined in the global scope.
  // 5. Variable "Age?" is passed as the argument `question` of the `askAge` function.
}
fun(); 
// 2. Function `fun` is called.

//DYNAMIC SCOPING : No Scope Resolution Happens and the program outputs, Scooby Age?
var dog = "Tyson"; // dog -> Global Scope
// 1. Execution Starts: "Tyson" is allocated to the global variable `dog`. 
function askAge(question) { // askAge -> Global Scope, question -> `askAge` scope.
  console.log(dog, question); 
  // 5. During execution, the value of `dog` is searched in the dynamic call stack.
  // 6. The most recent call to a function is checked first. In this case, `dog` is found in the global scope as "Tyson".
  // 7. Program logs "Tyson".
  // 8. The value of `question` is found as "Age?" in the current scope.
  // 9. Program logs "Age?".
}
function fun() { // fun -> Global Scope
  var dog = "Scooby"; // dog -> `fun` Scope
  // 3. "Scooby" is assigned to a local variable `dog` scoped to `fun`.
  // In a dynamic scoping environment, this `dog` could be accessed by functions called within `fun`.
  askAge("Age?"); 
  // 4. `askAge` is called, and the argument "Age?" is passed to the `question` parameter of the `askAge` function.
}
// In a dynamic scoping model, if askAge were to reference `dog`, it would refer to the most recent scope in the call stack
// regardless of where it was defined.
fun(); 
// 2. Function `fun` is called. At this point, the dynamic scope would allow `askAge` to access `dog` from `fun` if it was called after `fun`.
