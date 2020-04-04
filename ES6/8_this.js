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
        
console.log(o.getId()); // 123    Here 'this' refers to o.




