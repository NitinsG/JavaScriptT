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

// Object property have Descriptors
'use strict';

var cat = {
    name: 'Fluffy', 
    color: 'White'
}

display(Object.getOwnPropertyDescriptor(cat, 'name'))

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

cat.fullName = 'Muffin Top'
display(cat.fullName)
display(cat.name.first)
display(cat.name.last)
