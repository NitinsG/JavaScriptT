// 'this' have a special meaning within function.
// It is the context in which function is called. 

let fn = function() {
   console.log(this === window);
}

fn();   // true

let o = { carId: 123, 
          getId: function() {
                    console.log(this === window);
                 }
        }
        
console.log(o.getId());   // false, here the context is o.

//Same function like below without this

let o = { carId: 123, 
          getId: function() {
                    return carId;           
                 }
        }
        
console.log(o.getId()); // Reference Error, carId not defined.
// Here there is no 'this' used , though function with o is called , but compiler will look for carId in window object. 
// Which is undefined. As carId is not a variable but a property of object o.

let o = { carId: 123, 
          getId: function() {
                    return this.carId;
                 }
        }
        
console.log(o.getId()); // 123    Here 'this' refers to o. And carId is the property of object, instead of independent variable.
// As shown below with example of independent variable

let carId = 234;
let o = { carId: 123, 
          getId: function() {
                    return carId;    // return window.carId , which is 234, this.carId is 123.
                 }
        }
        
console.log(o.getId());   // 234 , Here 

 //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/* Now story comes of call and apply function.
   How and why we need to use it 
*/
//call function
//call immidealtiy invoke the function with supplied context as parameter. This is required when you change context from o to newCar.

let o = { carId: 123, 
          getId: function() {
                    return this.carId;    // return window.carId , which is 234, this.carId is 123.
                 }
        }

let newCar = { carId : 234 };

console.log(o.getId.call(newCar)); // 234, Here we send a newCar as a context to 'this' instead of o object.

// apply
/* The difference between call and apply is , with apply you can send additional argument to function, like below */

let o = { carId: 123, 
          getId: function(prefix) {
                    return prefix + this.carId;    // return window.carId , which is 234, this.carId is 123.
                 }
        }

let newCar = { carId : 234 };

console.log(o.getId.apply(newCar, ['ID :'));  // ID : 234
                                   
// bind 
/* bind function same as other function, the only difference is instead of calling the function at the same time, it return
the copy of function binded with new context suppiled , as later you can invoke the function */

let o = { carId: 123, 
          getId: function(prefix) {
                    return prefix + this.carId;    // return window.carId , which is 234, this.carId is 123.
                 }
        };

let newCar = { carId : 234 };
let newFn = o.getId.bind(newCar);       // copy of function is retuned with new context binded to it.                            
console.log(newFn()); // 234            Here we call the function                       
                                   
//Using Function
var Task = function (name) {
    this.name = name;
    this.completed = false;

 this.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
 }

 this.save = function () {
    console.log('saving Task: ' + this.name);
 }
};                                   

var task1 = new Task('Task for constructor');
var task2 = new Task('Task for Singleton');
                                   
//Other way
var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

// Using Classes
                                   
'use strict'

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    };

    save() {
        console.log('saving Task: ' + this.name);
    };
}

var task1 = new Task('create a demo for constructors');
var task2 = new Task('create a demo for modules');
var task3 = new Task('create a demo for singletons');
var task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
                                   
