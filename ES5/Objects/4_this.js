/*

If a function has a this reference inside it, that this reference usually points to an object. But which object it points to depends on how the function was called.

The this keyword does not refer to the function in which it is used or it’s scope. It refers to the object on which a function is being executed and depends entirely 
on the call-site of the function.

Here's a quick illustration:

*/

function foo() {
    	console.log( this.bar );
}
var bar = "global";
var obj1 = {
    	bar: "obj1",
    	foo: foo
};
var obj2 = {
    	bar: "obj2"
};
// --------
foo();                      	// "global"
obj1.foo();                 	// "obj1"
foo.call( obj2 );           	// "obj2"
new foo();                  	// undefined

/*

There are four rules for how this gets set, and they're shown in those last four lines of that snippet.

foo() ends up setting this to the global object in non-strict mode -- in strict mode, this would be undefined and you'd get an error in accessing 
the bar property -- so "global" is the value found for this.bar.

obj1.foo() sets this to the obj1 object.

foo.call(obj2) sets this to the obj2 object.

new foo() sets this to a brand new empty object.

Bottom line: to understand what this points to, you have to examine how the function in question was called. 
It will be one of those four ways just shown, and that will then answer what this is.

Implicit Binding

*/

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo(); // 2

//- - - 

function foo() {
    console.log( this.a );
}

var obj = {
    a: 2,
    foo: foo
};

var uu = obj.foo;
uu();  //undefined

//Because the context (Object) of uu() is global , as its just a reference to the function taking from obj.foo.

//Explicit Binding  

function foo() {
    	console.log( this.a );
}
var obj = {
    	a: 2
};

foo.call( obj ); // 2

/*

Call, Bind, Apply

Last, but certainly not least, we can actually set the value of this explicitly with call(), bind(), and apply() . The three are very similar, but it’s important to understand the minor differences. 

1. Call and Apply are each invoked immediately.
2. Identical to call() but bind() is not invoked immediately. Instead, bind() returns a function with the context of 'this' bound already. 
   Because of this, bind() is useful when we don’t know all of our arguments up front.

An example should make this clearer. Look at the code below. We’re trying to add numbers. Copy this into your browser console and call the function.

 function add(c, d) {
  console.log(this.a + this.b + c + d);
 }
 add(3,4); // logs => NaN

The add function logs NaN (not a number). That’s because this.a and this.b are undefined. They don’t exist. And you can’t add a number to something that is undefined.

Lets introduce an object to the equation. We can use call() and apply() to call the function with our object:
*/

 function add(c, d) {
  console.log(this.a + this.b + c + d);
 }
 var ten = {a: 1, b: 2};
 add.call(ten, 3, 4);   // logs => 10
 add.apply(ten, [3,4]); // logs => 10

/*
When we use add.call() the first parameter is what this should be bound to. The subsequent parameters are passed into the function we are calling. 
Thus, in add() , this.a refers to ten.a and this.b refers to ten.b and we get 1+2+3+4 returned, or 10.

add.apply() is similar. The first parameter is what this should be bound to. The subsequent parameter is an array of arguments to be used in the function.

What about Bind? The parameters in bind() are identical to call() but bind() is not invoked immediately. 
Instead, bind() returns a function with the context of this bound already. Because of this, bind() is useful when we don’t know all of our arguments up front. 
Again, an example should help with your understanding:

*/

var small = {
  a: 1,
  go: function(b,c,d){
    console.log(this.a+b+c+d);
  }
}

var large = {
  a: 100
}

/*

Copy the above into your console. Then call small.go(2,3,4); // logs 1+2+3+4 => 10

Cool. Nothing new here. But, what if we want to use the value of large.a instead? We can use call/apply:

small.go.call(large,2,3,4); // logs 100+2+3+4 => 109

Now, what if we don’t know all 3 arguments yet? We can use bind:

var bindTest = small.go.bind(large,2);

If we console.log our variable above, bindTest , we can see what we’re working with 
console.log(bindTest); // logs => function (b,c,d){console.log(this.a+b+c+d);}

Remember, with bind a function is returned that already has this bound! So our this has been successfully bound to our large object. 
We’ve also already passed in our second argument as the number 2. Later, when know the rest of the arguments we can pass them in:

 bindTest(3,4); // logs 100+2+3+4 => 109

For clarity, here is all of the code together in one block. Look it over, and copy it into your console to really understand what is happening!
*/

 var small = {
  a: 1,
  go: function(b,c,d){
    console.log(this.a+b+c+d);
  }
 }

 var large = {
  a: 100
 }
 
 small.go(2,3,4); // logs 1+2+3+4 => 10
 var bindTest = small.go.bind(large,2);
 console.log(bindTest); // logs => function (b,c,d){console.log(this.a+b+c+d);}
 bindTest(3,4); // logs 100+2+3+4 => 109

//Other concept where 'this' and 'new' are useful is chaning the function calls.

 function chain(){
  let a = 0;
  this.add = function(b){
    a = a + b;
    return this;
  }
  this.mul = function(b){
    a = a * b;
    return this;
  }
  this.equal = function (callback){
      callback();
  }
 }

 new chain()
     .add(1)
     .add(2)
     .mul(3)
     .equal(function () {})

//There is difference in using this in nested function for example:

function abc() {
   console.log(this);
    (function xyz(){ 
      console.log(this); 
    })();
}

var a = {};

abc.call(a);

// logs: {} and windows Object. First 'this' is 'a' object and second 'this' is windows.

/* Note : JavaScript always use context (Object) to call the function, if you havn't describe the context (Object) then JavaScript uses the Global Object to invoke the method.
Global Object in case of Browser is Window. So 'this' in nested function becomes the Global Object (Context). 
*/

var myObject = {
  foo: "Bar",
  func: function() {
          var that = this;
          console.log("Outer that.foo member = " + that.foo);    //Bar
          console.log("Outer this.foo member = " + this.foo);    //Bar
          (function() {
            console.log("inner func:  that.foo = " + that.foo);   //Bar
            console.log("inner func:  this.foo = " + this.foo);   //undefined
          }());
        }
}
myObject.func();
          
Outer that.foo member = Bar
Outer this.foo member = Bar
inner func:  that.foo = Bar
inner func:  this.foo = undefined

// This is the reason we use this & that possible solution. 

// Lets have some public private privileged access patterns for javascript

function Container(param) {
    this.member = param; //public member
    //private
    var secret = 3;
        that = this; //makes outer object available to private methods

    //private method..
    var test_private = function(){
        alert("u cant see me !!! from outside!!");
    };

    //privileged method - can be seen from outside..and can access private methods..
    this.test_privileged = function(){
        alert("hello...wanna see me call a private method");
        test_private();
    };

}

//public method
Container.prototype.stamp = function (string) {
    return this.member + string;
}

