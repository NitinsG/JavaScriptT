
/* Class Person */

function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype = {
   getName: function() {
   return this.name;
  }
   getAge: function() {
   return this.age;
  }
}

/* Instantiate */

var alice = new Person('Alice', 23);
var bill = new Person('bill', 23);

/* Modify the class again */

Person.prototype.getGreetings = function() {
   return 'Hi ' + this.getName() + '!';
};

/* Modify Specific Instance */

alice.displayGreeting = function() {
   alert(this.getGreetings());
}

/* Introspection :- You can examine any Object any runtime to see what mathods attributes it contains. */

/* Other way to craete user defined objects 

Creating a user-defined object requires two steps:

 1. Define the object type by writing a function.
 2. Create an instance of the object with new.

When you use new, four things happen:

 1. It creates a new, empty object.
 2. It binds this to our newly created object.
 3. It adds a property onto our newly created object called “__proto__” which points to the constructor function’s prototype object.
 4. It adds a return this to the end of the function, so that the object that is created is returned from the function.

*/

function Car() {}
car1 = new Car();
car2 = new Car();
 
console.log(car1.color);    // undefined
 
Car.prototype.color = "original color";
console.log(car1.color);    // original color
 
car1.color = 'black';
console.log(car1.color);   // black

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
console.log(car1.color)  // black
console.log(car2.color) // original color

function Student(name, age) {
  this.name = name;
  this.age = age;
}

var first = new Student('John', 26);

/*

So, what happens when we run the above code?

1. A new object is created — the first object.
2. this is bound to our first object. So any references to this will point to first.
3. Our __proto__ is added. first.__proto__ will now point to Student.prototype.
4. After everything is done, our brand new first object is returned to our new first variable.

https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e

*/


