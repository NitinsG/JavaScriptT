// literal creation of Object

cat = { name: "Fluffy", color: "White" }

// Using new operator

function cat(name, color) {
  this.name = name;
  this.color = color;
}

var abc = new cat('Fluffy', 'White');

/* 
new operator creates a object and pass it to the function, so that 'this' can point to it. So the above cat function look like below:

function cat(name, color){
    let abc = {};
    abc.name = name;
    abc.color = color;
    return abc;
}

here abc.__proto__ will point to cat.prototype

In above code abc is replaced with 'this', and object creation and return statement will be reoved.
*/

//Using Object.create
/*
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
*/


const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
console.log(me.__proto__) // it will point to person.

/*Output
> "My name is Matthew. Am I human? true"
> Object { isHuman: false, printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  } }
*/

/*
Very simply said, new X is Object.create(X.prototype) with additionally running the constructor function. 
And giving the constructor the chance to return the actual object that should be the result of the expression.

That’s it. :)

*/


// Using Class

class Cat {
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  
  speak() {
    display('Meeooow')
  }
}

var cat = new Cat('Fluffy', 'White')

display(cat)
cat.speak()

/* 
Object property have Descriptors
value , writeable, enumrable , configurable 
*/

'use strict';

var cat = {
    name: 'Fluffy', 
    color: 'White'
}

display(Object.getOwnPropertyDescriptor(cat, 'name'))

/*
 Output
    Object{ value: 'Fluffy'
            writable : true,   writable flase means value of name attribute cant be changed
            enumrable : true,  if set to false , name property will not shown in iteration of object keys.
            configurable : true  if set to false , it dont let set confiurable , enumrable to true and dont let delete the property.
          }
 */

//getter and setter Example
'use strict';

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'}, 
    color: 'White'
}

Object.defineProperty(cat, 'fullName', 
  {
    get: function() {
      return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
      var nameParts = value.split(' ')
      this.name.first = nameParts[0]
      this.name.last = nameParts[1]
    }
  })

cat.fullName = 'Muffin Top'       // set will be called here setting name.first and name.last   
display(cat.fullName)             // get will call here with output Muffin Top
display(cat.name.first)           // Output : Muffin  
display(cat.name.last)            // Output : Top

//Inheritance Multi Level

'use strict';

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'
  }
  
  speak() {
    display(this.voice)
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super('Meow')
    this.name = name
    this.color = color
  }
}

var fluffy = new Cat('Fluffy', 'White')
display(Object.keys(fluffy.__proto__.__proto__))               
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))
