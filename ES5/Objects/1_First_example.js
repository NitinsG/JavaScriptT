
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



