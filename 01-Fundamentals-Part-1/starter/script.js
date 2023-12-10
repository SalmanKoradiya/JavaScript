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


// If and else Conditional 

const age = 10;
const isOldEnough = age >= 18;
if (isOldEnough){
    console.log("Sarah can't start driving licence");
}

const age1 = 10;
if (age1 >= 18){
    console.log("Sarah can't start driving licence");
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too ypung .Wait Another ${yearsLeft} years`);
}

const birthYears = 1991;
let century1
if (birthYears <= 2000){
    century1 = 20;
} else {
    century1 = 21;
}
console.log(century1);

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(`BMIMarks: ${BMIMark}, BMIJhon: ${BMIJohn}`);

/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's! ${BMIJohn}`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's! ${BMIMark}`)
}


// Type Conversion And Coercion
// type coversion

const inputYear = '1991'
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

// type coercion

console.log('I' + ' am'+ ' ' + '23' + 'years old')
console.log("1" + 1 + 1)
console.log("1" - 1 + 1 +'1' - 1);
console.log('10' * 10 * "1" + "1" / 2);

// Truthy And Falsy Values

//Truthy Values

// 


//Falsy Values

//  5 Falsy Values 0 , '' , Undefined , Null , NaN , False

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Jonas"))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0;
if (money) {
    console.log("Dont spend it all")
}else {
    console.log("You should get a job")
}

let height;
if(height){
   console.log("Yay Height is defined"); 
} else {
    console.log("Yay Height is undefined"); 
}

// Equality Operators

// > < >= <= == === ==! !=

const age2 = 18
if (age2 !== 19) console.log("You just become an adult")


// const favourite = Number(prompt("What's your favourite number")) Please keep an eye on data type as coersion occurs
// console.log(favourite)
// console.log(typeof(favourite))

// if (favourite === 23) {
//     console.log("Cool 23 is an amazing number")
// } else if (favourite === 7) {
//     console.log("Cool 7 is an amazing numbner")
// } else if (favourite === 9) {
//     console.log("Cool 9 is an amazing numbner")
// } else {
//     console.log("Number is not 23 , 9 or 7 ")
// }

// Boolean Logic :  And Or Not operators

const hasDriversLicence = true;
const hasGoodVisions = false;

console.log(hasDriversLicence && hasGoodVisions)
console.log(hasDriversLicence || hasGoodVisions)
console.log(!hasDriversLicence) 


if(hasDriversLicence && hasGoodVisions){
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else sahould drive..")
}



// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// Answer

/* Write your code below. Good luck! 🙂 */

const scoreDolphines = (96 + 108 + 89) / 3; // To get the average
const scoreKoalas = (88 + 91 + 110) / 3;    // to get the average

if (scoreDolphines > scoreKoalas){
    console.log("Dolphins win the trophy")
} else if (scoreDolphines > scoreKoalas) {
    console.log("Koalas win the trophy")
} else {
    console.log("Both win the trophy")
}

// Switch Statements

// const day = "wednesday"
// switch (day) {
//     case "monday":
//         console.log("plan course structure");
//         console.log("Go to coding meetups");
//         break;
//     case "tuesday":
//         console.log("Preparing therory");
//         console.log("xyz");
//         break;
//     case "wednesday":
//         console.log("plan course structure");
//         console.log("Go to coding");
//         break;
//     case "thursday":
//         console.log("plan course structure");
//         console.log("Go to meetups");
//         break;
//     case "friday":
//         console.log("plan course structure");
//         console.log("coding meetups");
//         break;
//     case "saturday":
//         console.log("course structure");
//         console.log("Go to coding meetups");
//         break;
//     case "sunday":
//         console.log("plan course structure");
//         console.log("Go to coding meetups");
//         break;

//     default:
//         console.log("Not a Valid day")
// }

const days = "Sunday"

if(days === "Monday"){
    console.log("Plan course structure");
    console.log("Go to Coding meetup")
} else if (days === "Tuesday") {
    console.log("Prepare theory videos");
} else if (days === "Wednesday" || days === "Thursday"){
    console.log("Write code examples");
} else if (days === "Friday") {
    console.log("Record videos");
} else if (days === "Saturday" || days === "Sunday")  {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Please enter valid day")
}

// The conditional ternary operator

const age3 = 16;
const drink1 = age3 >= 18 ? "You can drink Wine" : "You are below 18 drink water";
console.log(drink1)


// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// Answer

const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



// JavaSCript Releases ES5 , ES6 + and ES Next
// During  development we can use ES NEXT
// During production And uploading website to we all users dont have updated browswer
// Its important to TRANSPILING and POLYFILLING with ES5
// We can use tools like BABEL
