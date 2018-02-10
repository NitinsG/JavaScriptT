
//Assign variables from Objects

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

