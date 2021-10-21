/* Variables - containers that store values
Multi-line comment here */
var name; // a declared variable, but not initialized and it's on the global scope (BAD)

let foo; // a declared variable that can be changed 
//const bar; // a declared variable that cannot be changed -short for constant' 

const Answer = 42; // t is decalred and initilazed with the value 42 

// Strings 

let string1 = "hello world!" // preferred way 
let string2 = new String("Hello world!") // constructor

// number 

let myNum = 29038424;

let myNum2 = 345.89

"1" == 1; // this statment is true because of type coercion and loose equality checking
"1" == 1; // false because  this is strict equality checking 
// Boolean

let myBol = false; 

// Array

let myArray = []; // this is an array 

// 
letmyArray2 = [42, "Bob", myBool, ANSWER, true];

let secondElement = myArray2[1]; // the second position is at index #1

myArray2.push("NataliaSheridan"); // added an element to the end of myArray2.unshift("Hellow world!");

let mylongString =
  "32408usfjalieriweur938u425ksdjfowiur84uwrlwshdjfo8wuroiwejr4eadfwefds"; // just an array of characters

mylongString.length;

// Object

let minObject = {};

let myCar = {
  make: 'Jeep',
  color: 'white',
  year: '1998',
  vin: '2874ihweoriy2380qoiu38r'
}

myCar.numDoors = 4;

const anotherObject = {
  wordz: ["foo", "bar", "baz"],
  car: {
    make: "McLaren",
    model: "675LT"
  },
  awesomeness: true
};

// Functions

function myFunction() {
  return "My greeting to you...";
}

function sumTwoThings(one, two) {
  // watch out for data type issues here!
  return one + two; // if numbers, will add them.  If strings, will concatenate.
}
element => console.log(element) // implicit 'return' when only one line for the function
element => {
  let foo = 'bar' + 'baxz'
  return console.log(element) // explicit 'return' because of multiple lines
}
(num1, num2) => num1 + num2

// basic syntax is num => 'The Num'

// a higher order function is a function that accepts another function as a parameter.
// filter, map and reduce are the most popular, but forEach, every, find, and some are also HOFs

const theFunction = () => {
  //multiple lines use curly braces and 'return' keyword
  return "I am awesome";
};

// Filter method example.  Filter returns an array of all elements that 'pass the test'
const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels"
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire"
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire"
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels"
  }
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels")
const empire = pilots.filter((pilot) => {
  return pilot.faction === "Empire"
})