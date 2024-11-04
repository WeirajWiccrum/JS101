// Parsing in JS
var student = "Viraj";
/* JS Scope MGMT Checks:
   the variable `student` already in the global scope or not.
   if yes:
   if no -> allocate `student` in the global scope.  
*/
function fun() {
/* JS Scope MGMT Checks:
  ATP of formal declaration is `fun` globally scoped or not.
  if yes: 
  if no -> allocation `fun` in the global scope.
  Now we know function creates scopes => we are in scope of a function `fun`.
*/
  var student = "Ayush";
/* In scope of `fun` JS Scope MGMT Checks:
  if yes:
  if no -> 
*/
  console.log(student);
}
fun();
console.log(student);

// Execution in JS
var student = "Viraj";
function fun() {
  var student = "Ayush";
  console.log(student);
}
fun();
console.log(student);

// Failing in Execution v/s Failing in Parsing
  //code1
    console.log("hi");
    console.lo("sup");
  //code 2
    console.log("hi");
    console..log("sup");

// Fixing Code 3
  var a = 1;
  function myFun() {
    var a = 2;
    b = 3;
    console.log(a);
  }
  console.log(b);
  myFun();
  console.log(a);

  // Autoglobals


  