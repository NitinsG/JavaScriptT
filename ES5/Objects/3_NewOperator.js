function NothingSpecial() {
    	console.log( "Don't mind me!" );
}

var a = new NothingSpecial();
// "Don't mind me!"

a; // {}


/*
NothingSpecial is just a plain old normal function, but when called with new, it constructs an object, almost as a side-effect, which we happen to assign to a. 
The call was a constructor call, but Nothing Special is not, in and of itself, a constructor.
In other words, in JavaScript, it's most appropriate to say that a "constructor" is any function called with the new keyword in front of it.
Functions aren't constructors, but function calls are "constructor calls" if and only if new is used.
*/


