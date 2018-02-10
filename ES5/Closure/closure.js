

// When you pass an argument to a function it becomes available as a local variable.
// More than one reference to a variable within function will persist the variable , even when the function has returned.

//---------Closure #1:--------------

function f(){
  var b = "b";
  return function(){ return b; }   // Here the reference to the variable b exists in inner function , so the variable persist even after outer function done/returned.
}

var n = f();
n();  // Output: "b"

//---------Closure #2:--------------

var n;

function f(){
 var b = "b";
 n = function(){
 return b;
 }
}

n() //Output : "b"

//---------Closure #3:--------------
/*
When you pass an argument to a function it becomes available as a local variable.
You can create a function that returns another function, which in turn returns its
parent's argument
*/

function f(arg) {
 var n = function(){
 return arg;
 };
 arg++;
 return n;
}

var m = f(123);
m();    // Output: 124

/*
Notice how arg++ was incremented after the function was defined and yet, when
called, m() returned the updated value. This demonstrates how the function binds to
its scope, not to the current variables and their values found in the scope.
*/

function f() {
 var a = [];
 var i;
 for(i = 0; i < 3; i++) {
   a[i] = function(){ return i; } 
 }
 return a;
}

var a = f();
console.log(a[0]());  //Output : 3
console.log(a[1]());  //Output : 3 
console.log(a[2]());  //Output : 3

/*
The solution is to use another closure,
When you pass an argument to a function it becomes available as a local variable
*/

function f() {
 var a = [];
 var i;
 for(i = 0; i < 3; i++) {
 a[i] = (function(x){
             return function(){
                               return x;           // The scope of inner function is outside function which have local copy of x,  three function have different copy of x with different value.
                    }
         })(i);
 }
 return a;
}

/*

Here below two functions are equal.

function f(x){ return function { return x;} }
function f(x){ 
   var a = x;
   return function {
                     return a;                           
          }
}

*/
