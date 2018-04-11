

// By hoisting, we mean this exact strange behavior in which you can call a function before it was defined.

test(); // ???

function test() {
  console.log('working?!');
}

// In JavaScript, BEFORE the code is executed variables and functions are moved to the top. So the strange piece of code above, actually becomes:

function test() {
  console.log('working?!');
}

test(); // working?!

/*
The same happens with variable definitions — they are all moved to the top of their scope (if they are declared with the ‘var’ keyword; ‘let’ variables are not being hoisted). 

What’s different about variables is that only their definition is moved to the top. 

The value assignment stays where it is, but the definition of the variable is hoisted. 

Therefore if we try to use a variable before a value is assigned to it we will get undefined, not an error.

So be careful when you’re using function expressions, because only their declaration will hoist to the top.

*/

console.log(test) // undefined
var test = 'working?'
console.log(test) // working?

// This is how the above code is looking after the variables were hoisted to the top:

var test;
console.log(test) // undefined
test = 'working?'
console.log(test) // working?

console.log( abc ); // ReferenceError!
abc = 2;

//We haven’t used var along with assignment of abc and same goes with let.

console.log(xyz) //Reference Error
let xyz=2

/*
var abc = 2 (to javascript engine these are two statements var abc and abc =2 , var abc is processed during the compilation phase and the second 
statement is processed during execution phase. 
So without var , its will be a single statement that will be processed in execution phase, that why there was error in above code.
*/

// Function declarations are hoisted, as we just saw. But function expressions are not.

foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
    	// ...
};

/*
The variable identifier foo is hoisted and attached to the enclosing scope (global) of this program, so foo() doesn't fail as a ReferenceError. 
But foo has no value yet (as it would if it had been a true function declaration instead of expression). 
So, foo() is attempting to invoke the undefined value, which is a TypeError illegal operation.
Also recall that even though it's a named function expression, the name identifier is not available in the enclosing scope:
*/

foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
    	// ...
};

//This snippet is more accurately interpreted (with hoisting) as:

var foo;

foo(); // TypeError
bar(); // ReferenceError

foo = function() {
    	var bar = ...self...
    	// ...
}

// -----

function foo() {
    	console.log( 1 );
}

foo(); // 1

foo = function() {
    	console.log( 2 );
};

// ---

//While multiple/duplicate var declarations are effectively ignored, subsequent function declarations do override previous ones.

foo(); // 3

function foo() {
    	console.log( 1 );
}

var foo = function() {
    	console.log( 2 );
};

function foo() {
    	console.log( 3 );
}

//Function declarations that appear inside of normal blocks typically hoist to the enclosing scope, rather than being conditional as this code implies:

foo(); // "b"

var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}

//However, it's important to note that this behavior is not reliable and is subject to change in future versions of JavaScript, 
//so it's probably best to avoid declaring functions in blocks.

function foo() {
	alert('global foo'); 
}
					
function bar() {
           alert('global bar'); 
}
					
function hoistMe() {
    console.log(typeof foo); // "function"
    console.log(typeof bar); // "undefined"
    foo(); // "local foo"
    bar(); // TypeError: bar is not a function
					
    // function declaration:
    // variable 'foo' and its implementation both get hoisted 

    function foo() {
       alert('local foo'); 
    }
					
    // function expression:
    // only variable 'bar' gets hoisted // not the implementation

   var bar = function () {
     alert('local bar'); 
   };
} 

hoistMe(); 

/*
In this example you see that, just like with normal variables, the mere presence of foo and bar anywhere in the hoistMe() function moves them to the top, 
overwriting the global foo and bar. 
The difference is that local foo()’s definition is hoisted to the top and works fine; although it’s defined later. 
The definition of bar() is not hoisted, only its declaration. That’s why until the code execution reaches bar()’s definition, 
it’s undefined and not usable as a function (while still preventing the global bar() from being “seen” in the scope chain). 
*/



