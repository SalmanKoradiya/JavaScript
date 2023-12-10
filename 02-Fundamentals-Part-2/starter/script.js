'use strict';

// Strict mode is important 

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log("I can Drive")

// const interface = "Audio" //Variable name reserved for future

// const private = 12; // variable name reserved or maybe in use in future check the list .

// Try above stuffs and commet it to see changes


// Functions

// declaring a function 
// function logger(){
//     console.log("My name is jonas")
// }

// // invoking a function calling a function or running a function
// logger();
// logger();

function fruitProccesser(apples, oranges){
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProccesser(5, 0)
console.log(appleJuice)
// console.log(fruitProccesser(6, 2))

// const appleOrangeJuice = fruitProccesser(2, 5)
// console.log(appleOrangeJuice)

// Function Declration vs Expresssion

function calAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calAge1(1991);
console.log(age1);


// Function expression 

const calAge2 = function (birthYear){ // anonymous function
    return 2037 - birthYear
}

const age2 = calAge2(1991);

console.log(age1, age2)


// Arrow Functions added in ES6
// arrow function return values implicitly without writing explicitly with return keywords
// usefull for oneliner 
// for more then one parameter we need to wrap it up in parenthises 
// this keyword we cant use in this so function dec and exp better there
const calage3 = birthYear => 2037 - birthYear;
const age3 = calage3(1991)
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`
}

console.log(yearUntilRetirement(1991, 'Jonas'))
console.log(yearUntilRetirement(1995, 'Bob'))


// Function calling diffrent functions

function cutFruitPices(fruit){
    return fruit * 4;
}

function fruitProccesser(apples, oranges){
    const applePieces = cutFruitPices(apples);
    const orangePieces = cutFruitPices(oranges);
    const juice = `Juice with ${applePieces} pices of apples and ${orangePieces} pices of oranges`;
    return juice;
}

console.log(fruitProccesser(2, 3))

// Reviewing Functions

