/* Two main benefits of arrow functions:
1. Shorter Syntax
2. No binding of this

An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. 
These function expressions are best suited for non-method functions, and they cannot be used as constructors.

*/

//Syntax

   () => { ... } // no parameter
   x => { ... } // one parameter, an identifier
(x, y) => { ... } // several parameters

x => { return x * x }  // block
x => x * x  // expression, equivalent to previous line

() => ({Object})  // Paranthesis are required arround object to retun.

1.  (arg1,arg2) => { statements }
2.  (arg1,arg2) => expression               // By default its return the evaluated expression
3.  (arg1,arg2) => {return expression}      // With Curly braces we need to specify the return statemnet

// 2 and 3 are equal

(singleArg) => {statement}   
singleArg => {statement}

() => { statemnet }     // Without args brakets are necessary
() => expression
() => { return expression }

(arg1, arg2, agr3) => expression

// Example

var addition = function(a,b){
  return a+b;
}

var addition = (a,b) => { return a+b};
var addition = (a,b) => a+b;

var arr1 = ['Matter','Sine','Cose','Tan'];

var length = arr1.map (function(element) {
                         return element.length;
                       });
var length = arr1.map ((element) => {
              return element.length;
             });

var length = arr1.map ((element) => element.length );

//-------- bind this-------------

function Counter() {
  this.num = 0;
  this.timer = setInterval(function add() {     //setInterval is async function , doesn't keep the scope for this, and this binds to window object.
    console.log(this);
  }, 1000);
}

var b = new Counter();

//Clear interval
clearInterval(b.timer); 

function Counter() {
  this.num = 0;
  this.timer = setInterval(() => {    //Here arrow function binds the this with object passed.
    this.num++;
    console.log(this.num);
  }, 1000);
}

var b = new Counter();

