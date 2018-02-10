
//-----------------MAP Function-----------------
/* 
Traverses the array from left to right invoking a callback function on each element with parameters (below). 
For each callback the value returned becomes the element in the new array. After all elements have been traversed map() returns the new array 
with all the translated elements.


elements.map((element,index,array) => {
               return {};
             }, thisArg);

array.map(function(elem, index, array) {
      return {};
}, thisArg);


elem	element value
index	index in each traversal, moving from left to right
array	original array invoking the method
thisArg	(Optional) object that will be referred to as this in callback
*/

var far = [0, 10, 20, 30, 40];
far.map(elem => Math.round((elem - 32) * 5 / 9));

//-----------------Filter Function-----------------
/*
Like map() it traverses the array from left to right invoking a callback function on each element. 
The returned value must be a boolean identifying whether the element will be kept or discarded. 
After all elements have been traversed filter() returns a new array with all elements that returned true.
And always make sure your callbacks in filter return true or false.


array.filter(function(elem, index, array) {
    return <Boolean Expresion>;
}, thisArg);

elem	element value
index	index in each traversal, moving from left to right
array	original array invoking the method
thisArg	(Optional) object that will be referred to as this in callback
*/

var tasks = [
    {
        'name'     : 'Work',
        'duration' : 120
    },
    {
        'name'     : 'Rest',
        'duration' : 10
    },
    {
        'name'     : 'Play',
        'duration' : 130
    }
];

   
var difficult_tasks = tasks.filter(function (task) {
    return task.duration >= 120;
});

console.log(difficult_tasks);  //Output : tasks = [{'name': 'Play', 'duration': 130}] New array filtered out 

//-----------------Reduce Function-----------------
/*
Used to find a cumulative or concatenated value based on elements across the array.

It traverses the array from left to right invoking a callback function on each element. 
The value returned is the cumulative value passed from callback to callback. 
After all elements have been traversed reduce() returns the cumulative value

array.reduce(function(prevVal, elem, index, array) {
      ...
}, initialValue);

Here prevValue cumulative value returned thru each callback and rest are same.
*/

var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);


