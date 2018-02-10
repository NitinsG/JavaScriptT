
//Old var

console.log(a);      //no error , but show undefined because of hoisting

for (var a=0; a<3; a++){
  console.log(a);
}

console.log(a);       // Output is 3

// let is used for lexical scoping

console.log(a); // Error: Undefined 
 
for (let a=0 ; a<3; a++){       //a is only accessible within the loop
  console.log(a);
}

console.log(a);     // Error: Undefined

//const is used for fixed value

//array and permitive

const PI = 3.14
PI = 1; //Error: Cant change const

const arr1 = [1,2,3]
arr1 = [2,3,4]       // Error : Cant assign to const

arr1[0] = 'abc'     // Perfectly legal 

console.log(arr1)  //Output : ['abc',2,3]

//Object

const a = {x: 'Egg', y: 'Pizza' }
a = {}      //Error : Cant assigned to const

a[x] = 'aaa'     

console.log(a) //Output {x: 'aaa', y: 'Pizza' }

