// Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

// Closures are exposed nested functions

/*

If you declare a variable inside a function it won’t be available outside of it. But we can also define functions inside of other functions which will 
have a scope on their own inside of them. Now the special thing about those nested functions is that they can access their parent’s variables.

Every function defined in the global scope can access the variables in it. Those nested functions that we mentioned can access their parent function’s scope 
but they themselves can’t be called from outside of the parent function. Unless we expose them somehow.

We can expose that inner function so it can be used in the global scope. Now we can call it and use it as we wish. 
But this exposed inner function actually references one of the variables in it’s parent’s scope. 
Will that be a problem? No, of course it won’t because it’s a Closure!

Scopes plays vital role in Clousers , functions are use for creating the new scopes and once excuted its scopes can persist if the nested function inside it is exposed 
and refernces a outer scope variable.

*/

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
You can create a function that returns another function, which in turn returns its parent's argument
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
Notice how arg++ was incremented after the function was defined and yet, when called, m() returned the updated value. This demonstrates how the function binds to
its scope, not to the current variables and their values found in the scope. 
*/

function f() {
 var a = [];
 var i;
 for(i = 0; i < 3; i++) {
   a[i] = function(){ return i; }       // inside the single scope of f()
 }
 return a;
}

var a = f();
console.log(a[0]());  //Output : 3
console.log(a[1]());  //Output : 3 
console.log(a[2]());  //Output : 3


// The solution is to use another closure, When you pass an argument to a function it becomes available as a local variable


function f() {
 var a = [];
 var i;
 for(i = 0; i < 3; i++) {
 a[i] = (function(x){
             return function(){
                     return x;   // Created three different scopes with three self invoking functions.
                    }
         })(i);
 }
 return a;
}


// The difference is we have created three different scopes in above example rather than single scope. Note: the final value in the scope is remembered only.

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

//Apllication of clouser is when we try to encapsulate certain data or say data hiding and only exposing th functions that operate on that data.

function Person(firstName, lastName, age) {
  var private = 'this is a private member';

  return {
    getName: function() {
      console.log('My name is ' + firstName + ' ' + lastName);
    },
    getAge: function() {
      console.log('I am ' + age + ' years old')
    }
  }
}

let person = new Person('Alex', 'Kondov', 22);
person.getName();
person.getAge();
console.log(person.private); //undefined


