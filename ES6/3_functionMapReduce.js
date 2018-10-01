
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


//----------------- More Examples --------------------------------

const arr = [1,2,3,4,5];
const newArray = arr.map(i => i*10);    // return a new array with all value as multiple of 10;

// Map works on an array and return an array that’s it. Above code snippet works on an collection i.e an array and takes a callback with current iteration value, index as arguments and return a new array.


collection.reduce((accumulator, item, index) => {
    // logic to perform to get accumulator as a return value
}, initialValue for accumulator);

// example

const arr = [1,2,3,4,5];
const total = arr.reduce((acc, item) => acc+= item, 0);  // return a total as 15


collection.find((item) => {
    // return first element that satisfy the condition
});

// example

const arr = [1,2,8,4,5];
const value = arr.find(i => i%4 == 0);   // return the first value i.e 8 

// Find works on an array and return the first element that satisfy the condition in function.


collection.filter((currentValue, index) => {
    // logic to filter array on
});

// example
const arr = [1,2,3,4,5];
const newArray = arr.filter(i => i%2 == 0);  // return a new array with value [2, 4]
// Filter works on array return an array for filtered items.


const users = [
  {
    id: 1,
    name: "Jonathon Haley",
    username: "Monte.Weber2",
    email: "Daphne43@yahoo.com",
    phone: "1-123-456",
    website: "carmela.net",
    password: "hashed_password"
  },
  {
    id: 2,
    name: "Dean John",
    username: "dd.1",
    email: "deno@google.com",
    phone: "1-123-456",
    website: "dd.net",
    password: "Dean_hashed_password"
  }
];

const newUser = {
    id: 4,
    name: "Denomer Crazy",
    username: "crazy.1",
    email: "deno@crazy.com",
    phone: "",
    website: "crazy.app",
    password: "crazed_checker"
};

const newData = [...users, newUser]; // add element at last or 
const newData = [newUser, ...users]; // add element at first or 
const newData = users.concat(newUser) // the old way

// Get email address, phone number and website of users into new array
const contactInfo = users.map(({email, website, phone}) => ({email, website, phone})); // The use es6 of destructuring of object keys and map to get the contact info array for user.

// Find and replace value for key of objects
const newUsers = users.map(u => u.id == 2? ({...u, name: 'te'}): u); // this will return newUsers with all user having name 'te'

// Delete some key’s from object
const newUsers = users.map({id, email, name, username, phone, password} => ({id, email, username, email, phone, password})); // will return an array with all keys other than website


const newUsers = users.map(u => Object.keys(u).reduce((newObj, key) => key != 'website' ? { ...newObj, [key]: u[key]} : newObj, {}));
//We map through the users and then on each user we do a reduce and form a new object (newObj) and then check for website key, if its a website we return the previously formed newObj, if not then we do a spread operator and add require key to obj and finally return newObj.
