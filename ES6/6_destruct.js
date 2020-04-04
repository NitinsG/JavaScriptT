
// Object Destructuring
// Assign variables from Objects
// a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays

let car = { id: 5000 , style: 'convertable' };
let { id , style} = car
console.logs(id , style);  // 5000 convertable

let { id , style}       // if need to done in multiline
({id, style} = car);

//OLD
var abc = {a: 1, b: 2, c:3 };
var x = abc.a;
var y = abc.b;
var z = abc.c;

//NEW
const {a,b,c} = abc; //Note: Need to use same Keys name for getting those values.
const {x,y,z} = abc; //Note: This dont work as the varaible names are not like keys used in object.
console.log(x);  // undefined

console.log(a); //1

var sandwich = {
                 bread: "dutch crunch",
                 meat: "tuna",
                 cheese: "swiss",
                 toppings: ["lettuce", "tomato", "mustard"]
               }

var {bread, meat} = sandwich
console.log(bread, meat) // dutch crunch tuna

const profile = {
	firstName: "John",
	lastName: "Appleseed",
	email: "john.appleseed@plant.com",
	mobile: "+001-23234324322",
	gender: "male"
};

const {email: e, mobile: m} = profile;
console.log(e);   // "john.appleseed@plant.com"

// OR
// {prop} is short for {prop: prop}

const {firstName, lastName} = profile;
console.log(lastName)  // "Appleseed"

//Dest of array

const [a, b] = [1,2,3,4];
console.log(a,b);   //Output 1,2

const [a, ...b] = [1,2,3,4];
console.log(b); //[2,3,4]
console.log(a); // 1

var [firstResort] = ["Kirkwood", "Squaw", "Alpine"] 
console.log(firstResort) // Kirkwood

var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"] 
console.log(thirdResort) // Alpine


//function parametes

const profile = (profileU) => { };  // profileU is Object {name: '',age: 3 }
const profile = ({name, age}) => { };

//without Destru

var lordify = regularPerson => {
      console.log(`${regularPerson.firstname} of Canterbury`)
}

var regularPerson = {
  firstname: "Bill",
  lastname: "Wilson"
}

lordify(regularPerson) // Bill of Canterbury

//With Destruc

var lordify = ({firstname}) => { console.log(`${firstname} of canterbury`) }
lordify(regularPerson) // Bill of Canterbury

