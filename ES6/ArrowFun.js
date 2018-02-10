
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


