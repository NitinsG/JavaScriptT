//Adding element to an existing array 

var arr1 = ['a','b','c'];
var arr2 = [1 , 2, 3, ...arr1]; 
var arr3 = ['x', ...arr1, 'z'];
console.log(arr2); //Will have output like [1,2,3,'a','b','c'] its just spread the element in another array
console.log(arr3); //Will have output like ['x', 'a','b','c', 'z'].

//Passing to function

function add(a,b){
  console.log(a+b);
}

var args = [1,2];
add(...args);  //Its just spreads the arguments passed to function

//Copying the arrays

var arr1 = [1,2,3,4];
var arr2 = [...arr1]; // Here both array are different 

arr2.push(0);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4,0]

//Array Concat

var arr1 = [1,2,3,4];
var arr2 = [5,6,7,8];

var arr1 = [...arr1, ...arr2];

console.log(arr1); //Will have output [1,2,3,4,5,6,7,8]

//Rest:: Collects multiple elements into an array

function muls(multp , ...restArgs){
  return restArgs.map(function(element) {
                   return multp * element;
                   });
}

var arr1 = muls(2,1,2,3);
console.log(arr1);  // will have output [2,4,6]









