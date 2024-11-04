/* Autoglobals in Sloopy-Mode
    var a = 1;
    function myFun() {
        var a = 2;
        aa = 3; // autoglobal created
        console.log(a);
    }
    //console.log(b);
    myFun();
    console.log(a);
    console.log(b); // Output: autoglobal executed in the sloppy-mode.
*/

/* Function Scoping in Sloppy-Mode
  {
    function fun() {
      console.log("123");
    }
  }
  console.log(fun);
*/

"use strict";
var a = 1;
function myFun() {
  var a = 2;
  aa = 3;
  console.log(a);
}
//console.log(b);
myFun();
console.log(a);
console.log(aa); // ReferenceError: b is not defined

{
  function fun() {
    console.log("123");
  }
  console.log (fun);
}
console.log(fun);