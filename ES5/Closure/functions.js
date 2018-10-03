/*

Functions are the first class objects. They can be stored in variables, passed into other functions as arguments, passed out of functions as return values, and constructed at run-time.

1. JavaScript have function level Scope, this means that a varibale defined within a function is not accessible outside of it. 

2. Scope Chain , JavaScript has two kinds of scope: global and local. You also know that scope works "lexically." When you are looking to resolve a variable (determine what its value is when you use it), first you look in the local scope of the function you're in, if you don't find it, you look in the surrounding scope, and so on, until you get to the global scope. If you don't find the variable in any of those places, you get an error.

A scope chain is created in two stages: 
1. the first stage is when the function is defined, and 
2. the second, when the function executes. 

1. When you define a function, the initial scope chain is created. You can think of the scope chain as a list of pointers from the function to the scopes that surround the function at define time. These scopes are in order, so that the scope at the top of the chain (the first position) is the scope immediately surrounding the function (usually the global
scope, unless the function is nested), and subsequent scopes are further out.

2. In the second stage, when the function executes, an activation object is created. This object represents the state of the function as it executes, so it contains all the local variables, as well as t his (which is usually the global object, window). The activation object is added to the top (the first position) of the scope chain.

3. When a function is executing and it comes across a variable and needs to resolve that variable to know what the value is, the function starts at the first position in the scope chain, which is the activation object. If the function finds the variable there (that is, the variable is a local variable to the function), it stops there, and uses that value. If the function doesn't find the variable there, it looks in the next position in the scope chain, and so on. The function continues down the chain until it finds a scope that contains the variable. If it gets to the end—the global scope is always the last stop in the chain—and hasn't found the variable, then we get a Reference Error.


Syntax :

*/

// An anonymous function executed immediately 

(function(){
  var foo = 10;
  var bar = 2;
 alert(foo * bar);
})();

// An anonymous function with arguments

(function(foo, bar) {
  alert(foo * bar)
})(10,2);

// An anonymous function that returns a value

var baz = (function(foo,bar) {
            return foo * bar;
          })(10,2);





 
