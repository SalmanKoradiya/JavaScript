// let js = 'amazing'
// if (js === 'amazing') alert(`js is ${js}`)
// console.log(40 + 8 + 23 + 10);

// Variable 
// Reserved Keyword Name of the variable = String in "" '' quotes
// We can't use any reserved keywords as a variable name
// Naming should be discriptive.
// let firstName  = "salman"
// var secondName = "salman" // Not recommeded due to global scope and block scope mixup
// const thirdName = "salman" 

// Printing the value of variable

// console.log(firstName)
// console.log(secondName)
// console.log(thirdName)

// Values and variable (Assignment)
// Questions ?
// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

// Answers

let country = 'India'
let continent = 'Asia'
let population = 'Two millions'

console.log(country);
console.log(continent);
console.log(population);

// End of Value and Variable 

// Data Types

// Every value is object or primitive

// Primitive data types

// Numbers any whole number or decimal number 
// Strings any character number we can store but it should be between "salman12" '124salman' quotes
// Boolean it can only be true or false 
// Undefiend when we just declare a variable but didnt assigne value to it
// Null empty value as 0 is consider a value 
// Symbols (ES2015)values that is Unique Cannot Change
// BigInt (ES2020) Larger integers than the number type can hold

// JavaScript has dynamic typing
// We dont have to manually set data type as we do in some other languages
// which maybe sometime create issues
// var x = 0;
// var x = "salman"

// let y = 0; // Y is already been declared error 
// let y = "abc";

// Up as variable x we can see we changed the value from number to other string data it works 

// 
let JavaScript = true;
console.log(JavaScript)
console.log(typeof(JavaScript)) // typeof() this function help us to check the data type

// Declering a variable 
let a;
console.log(a)
// Assining the value to a variable
a = 123;
console.log(a)

// Diffrence between var let const Keyword

// We can reassign value to variable which we declared with let keyword mordern way es6
// We can reassign value to variable which we declared with var keyword but its old way es5 even we have block scope issues
// We cant reassign value to variable which we declared with const keyword 

// Assignment: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

// Answer 

let language = "english"
const countryILive = "India"

// Operators
let firstName = "salman";
let lastName = "koradiya";  // Error didnt get ?? why comma 
let fullName = `${firstName} ${lastName}`;
let fullName1 = firstName + " " + lastName  
console.log(fullName);
console.log(fullName1)

let x = 2;
let y = 2;
let addition = x + y
console.log(addition);
let subtraction = x - y;
console.log(subtraction);
let multiplication = x * y;
console.log(multiplication);
let divition = x / y;
console.log(divition);
let modules = x % y
console.log(modules);
let poweroff = x ** y
console.log(poweroff);

// Assignment: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

// Answers

let myCountry = "India"
let myCountryPopulation = 550000000;
let halfMyCountryPop = myCountryPopulation / 2;
console.log(halfMyCountryPop)
halfMyCountryPop++
console.log(halfMyCountryPop)
let finLandPop = 6000000
let doesFinlandpopIsGrThenUs = halfMyCountryPop > finLandPop
console.log(doesFinlandpopIsGrThenUs)
let avrgpop = 33000000
let isMyConGreAverage = halfMyCountryPop > avrgpop
console.log(isMyConGreAverage)
let description = "Portugal is in Europe, and its 11 million people speak portuguese "
console.log(description)

/////////////////////////////////////////////////////////////////////////////////

// Strings Template literals

const first =  "salman"
const job = "teacher"
const birthyear = 1996
const year = 2037
const salman = "I'm " + first + ', a ' + (year - birthyear) + ' ' + 'years old' + ' ' + job  + '!'
console.log(salman)

const salmannew = `i'm a ${first}, ${year - birthyear} years old ${job} !`
console.log(salmannew)

// we can create multi line strings with template literals
console.log(`abc
abc
abc
abc`)
