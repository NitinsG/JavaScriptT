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
