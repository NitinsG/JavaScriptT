/*
The life cycle of var-declared variables:
var variables don’t have temporal dead zones. Their life cycle comprises the following steps:
When the scope (its surrounding function) of a var variable is entered, storage space (a binding) is created for it. 
The variable is immediately initialized, by setting it to undefined.
When the execution within the scope reaches the declaration, the variable is set to the value specified by the initializer (an assignment) 
– if there is one. If there isn’t, the value of the variable remains undefined.

The life cycle of let-declared variables 
Variables declared via let have temporal dead zones and their life cycle looks like this:
When the scope (its surrounding block) of a let variable is entered, storage space (a binding) is created for it. The variable remains uninitialized.
Getting or setting an uninitialized variable causes a ReferenceError.
When the execution within the scope reaches the declaration, the variable is set to the value specified by the initializer (an assignment) 
– if there is one. If there isn’t then the value of the variable is set to undefined.

const variables work similarly to let variables, but they must have an initializer (i.e., be set to a value immediately) and can’t be changed.
*/

//var-declaring a variable in the head of a for loop creates a single binding (storage space) for that variable:

const arr = [];
for (var i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [3,3,3]

//Every i in the bodies of the three arrow functions refers to the same binding, which is why they all return the same value.

//If you let-declare a variable, a new binding is created for each loop iteration:

const arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]


//In a for-of loop, var creates a single binding:

const arr = [];
for (var i of [0, 1, 2]) {
    arr.push(() => i);
}
arr.map(x => x()); // [2,2,2]

//const creates one immutable binding per iteration:

const arr = [];
for (const i of [0, 1, 2]) {
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]

//let also creates one binding per iteration, but the bindings it creates are mutable.

//The for-in loop works similarly to the for-of loop.


//Old var

console.log(a);      //no error , but show undefined because of hoisting

for (var a=0; a<3; a++){
  console.log(a);
}

console.log(a);       // Output is 3

//----------let is used for block scoping-----------------

console.log(a); // Error 
 
for (let a=0 ; a<3; a++){       //a is only accessible within the loop , it also create fresh binding per iteration thats changeable.
  console.log(a);
}

console.log(a);     // Error: Undefined

//----const is used for fixed value and block scope---------

//array and permitive

const PI = 3.14
PI = 1; //Error: Cant change const

const arr1 = [1,2,3]
arr1 = [2,3,4]       // Error : Cant assign to const

arr1[0] = 'abc'     // Perfectly legal 

console.log(arr1)  //Output : ['abc',2,3]

var foo = true;

if (foo) {                // TMZ start for let and const
        console.log(b);            // Referror
        console.log(a);            // Undefined
    	var a = 2;
    	const b = 3; // block-scoped to the containing `if`

    	a = 3; // just fine!        
    	b = 4; // error!        //TMZ ends
}

console.log( a ); // 3
console.log( b ); // ReferenceError!



//Object

const a = {x: 'Egg', y: 'Pizza' }
a = {}      //Error : Cant assigned to const

a[x] = 'aaa'     

console.log(a) //Output {x: 'aaa', y: 'Pizza' }

